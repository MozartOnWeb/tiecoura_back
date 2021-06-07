import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Import Components
import { Submit } from "../styles/layout";

// Import Styles
import { PhotoForm } from "../styles/newPhotoStyles";

// Import Firestore & Storage
import { fs, sr } from "../firebase/";
import firebase from "firebase";

const NewPhoto = ({ currentSerie }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [progress, setProgress] = useState(0);

  const types = ["image/png", "image/jpeg"];

  const onFileChange = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setError(alert("Tiecoura Veuillez choisir une image au format png/jpeg"));
      setFile(null);
    }
  };

  const onUpload = () => {
    const storageRef = sr.ref();
    const fileRef = storageRef.child(
      `images/series/${currentSerie}/${file.name}`,
    );

    if (file) {
      fileRef.put(file).on(
        "state_changed",
        (snapshot) => {
          const percentage = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
          );
          setProgress(percentage);
          console.log(percentage);
        },
        (error) => {
          setError(error);
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
        },
      );
    }
  };

  useEffect(() => {
    if (progress === 100) {
      setFile(null);
    }
  }, [progress]);

  return (
    <PhotoForm>
      {file && (
        <motion.div
          initial={{ width: 0 + "%" }}
          animate={{ width: progress + "%" }}></motion.div>
      )}
      <input type="file" onChange={onFileChange} />
      <Submit onClick={onUpload}>Ajouter cette image</Submit>
    </PhotoForm>
  );
};

export default NewPhoto;
