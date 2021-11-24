import React, { useState } from "react";

// Import Components
import { Submit } from "../../styles/layout";

// Import Toastify
import { toast } from "react-toastify";
import { motion } from "framer-motion";

// Import Styles
import { VideoForm } from "../../styles/newVideoStyles";

// Import Firestore & Storage
import { fs, sr } from "../../firebase/";
import firebase from "firebase";

const NewVideo = () => {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);

  const notifySuccess = () => toast.success(" ✔️ VIDEO AJOUTéE AVEC SUCCèS");

  const onFileChange = (e) => {
    let selected = e.target.files[0];
    setFile(selected);
  };

  const onUpload2 = async (e) => {
    if (file) {
      const storageRef = sr.ref();
      const fileRef = storageRef.child(`videos/Principales/${file.name}`);
      await fileRef.put(file).on(
        "state_change",
        (snapshot) => {
          const Percentage = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(Percentage);
        },
        (err) => {
          console.log(err);
        },
        async () => {
          fs.collection("videos")
            .doc(file.name)
            .set({
              name: file.name,
              url: await fileRef.getDownloadURL(),
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            });
          setFile((e.target.value = null));
          notifySuccess();
        }
      );
    }
  };

  return (
    <VideoForm>
      {file && <motion.div animate={{ width: progress + "%" }}></motion.div>}

      <input type="file" onChange={onFileChange} accept="video/*" />
      <Submit new="true" onClick={onUpload2}>
        Ajouter cette vidéo
      </Submit>
    </VideoForm>
  );
};

export default NewVideo;
