import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Import Components
import { Submit } from "../styles/layout";

// Import Toastify
import { toast } from "react-toastify";

// Import Styles
import { PhotoForm } from "../styles/newPhotoStyles";

// Import Firestore & Storage
import { fs, sr } from "../firebase/";
import firebase from "firebase";

const NewPhoto = ({ currentSerie }) => {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);

  const types = ["image/png", "image/jpeg"];

  const notifyError = () =>
    toast.error(" 🔥 IMPOSSIBLE D'AJOUTER CETTE PHOTO");

  const notifySuccess = () =>
    toast.success(" ✔️ PHOTO AJOUTéE AVEC SUCCèS");

  const onFileChange = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
    } else {
      setFile(null);
      notifyError();
    }
  };

  const onUpload = () => {
    const storageRef = sr.ref();
    if (file) {
      const fileRef = storageRef.child(
        `images/series/${currentSerie}/${file.name}`,
      );
      fileRef.put(file).on(
        "state_changed",
        (snapshot) => {
          const percentage = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
          );
          setProgress(percentage);
        },
        (error) => {
          notifyError();
        },
        async () => {
          fs.collection("series")
            .doc(currentSerie)
            .update({
              images: firebase.firestore.FieldValue.arrayUnion({
                name: file.name,
                url: await fileRef.getDownloadURL(),
              }),
            });
          await notifySuccess();
        },
      );
    } else {
      notifyError();
    }
  };

  useEffect(() => {
    if (progress === 100) {
      setFile(null);
    }
    if (file === null) {
      setProgress(0);
    }
  }, [progress, file]);

  return (
    <PhotoForm>
      {file && (
        <motion.div
          initial={{ width: "0%", opacity: 0 }}
          animate={{ width: progress + "%", opacity: 1 }}></motion.div>
      )}
      <input type="file" onChange={onFileChange} />
      <Submit onClick={onUpload}>Ajouter cette image</Submit>
    </PhotoForm>
  );
};

export default NewPhoto;
