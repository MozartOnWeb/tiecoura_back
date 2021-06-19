import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";

// Import Components
import { Submit } from "../../styles/layout";

// Import Styles
import { VideoForm } from "../../styles/newVideoStyles";

// Import Firestore & Storage
import { fs, sr } from "../../firebase/";

const NewBG = () => {
  const [progress, setProgress] = useState(0);
  const [allImages, setAllImages] = useState([]);

  let imagePaths = [];

  const trackFiles = (e) => {
    imagePaths = [];
    for (let i = 0; i < e.target.files.length; i++) {
      allImages.push(e.target.files[i]);
    }
  };

  const uploadFiles = async () => {
    const storageRef = sr.ref();

    allImages.map(async (img) => {
      let fileRef = storageRef.child(
        `images/BGImages/${img.name}`,
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
          fs.collection("BGImages")
            .doc(img.name)
            .set({
              name: img.name,
              url: await fileRef.getDownloadURL(),
            });
        },
      );
    });
  };

  useEffect(() => {
    if (progress === 100) {
      setAllImages([]);
    }
    if (allImages.length === 0) {
      setProgress(0);
    }
  }, [progress, allImages]);

  return (
    <VideoForm>
      {allImages && (
        <motion.div
          initial={{ width: "0%", opacity: 0 }}
          animate={{ width: progress + "%", opacity: 1 }}></motion.div>
      )}
      <input type="file" multiple onChange={trackFiles} />
      <Submit onClick={uploadFiles}>Ajouter cette Photo</Submit>
    </VideoForm>
  );
};

export default NewBG;
