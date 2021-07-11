import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Import Components
import { Submit } from "../../styles/layout";

// Import Styles
import { PhotoForm } from "../../styles/newPhotoStyles";

// Import Firestore & Storage
import { fs, sr } from "../../firebase/";
import firebase from "firebase";

const NewPhoto = ({ currentSerie }) => {
  const [progress, setProgress] = useState(0);
  const [allImages, setAllImages] = useState([]);

  let imagePaths = [];

  const trackFiles = (e) => {
    imagePaths = [];
    for (let i = 0; i < e.target.files.length; i++) {
      allImages.push(e.target.files[i]);
    }
  };

  const uploadFiles = async (e) => {
    const storageRef = sr.ref();

    allImages.map(async (img) => {
      let fileRef = storageRef.child(
        `images/series/${currentSerie}/${img.name}`,
      );

      fileRef.put(img).on(
        "state_change",
        (snapshot) => {
          const percentage = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
          );
          setProgress(percentage);
        },
        (error) => {
          console.log(error);
        },
        async () => {
          fs.collection("series")
            .doc(currentSerie)
            .update({
              images: firebase.firestore.FieldValue.arrayUnion({
                name: img.name,
                url: await fileRef.getDownloadURL(),
              }),
            });
        },
      );
    });
  };

  useEffect(() => {
    if (progress === 100) {
      setAllImages([]);
    }
  }, [progress]);

  return (
    <PhotoForm>
      {allImages.length > 0 && (
        <motion.div
          animate={{
            width: progress + "%",
          }}></motion.div>
      )}
      <input type="file" multiple onChange={trackFiles} accept="image/*" />
      <Submit onClick={uploadFiles}>Ajouter cette image</Submit>
    </PhotoForm>
  );
};

export default NewPhoto;
