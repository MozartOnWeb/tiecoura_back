import React from "react";
import firebase from "firebase/app";

// Import Styles
import { Delete } from "../styles/deletePhotoStyles";

import { fs, sr } from "../firebase";

const DeletePhoto = ({ url, name, currentSerie }) => {
  
  const onDelete = async () => {
    const storageRef = sr.ref();
    const fileRef = storageRef.child(`images/series/${currentSerie}/${name}`);
    await fileRef.delete();

    fs.collection("series")
      .doc(currentSerie)
      .update({
        images: firebase.firestore.FieldValue.arrayRemove({
          name,
          url,
        }),
      });
  };

  return (
    <>
      <Delete onClick={onDelete}>X</Delete>
    </>
  );
};

export default DeletePhoto;
