import React from "react";

// Import Styles
import { DeleteBGS } from "../styles/deletePhotoStyles";

import { fs, sr } from "../firebase";

const DeleteBG = ({ name }) => {
  const onDelete = async () => {
    const storageRef = sr.ref();
    const fileRef = storageRef.child(`images/BGImages/${name}`);
    await fileRef.delete();

    fs.collection("BGImages").doc(name).delete();
  };

  return (
    <>
      <DeleteBGS onClick={onDelete}>X</DeleteBGS>
    </>
  );
};

export default DeleteBG;
