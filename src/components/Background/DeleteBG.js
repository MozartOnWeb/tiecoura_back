import React from "react";

// Import Styles
import { DeleteBGS } from "../../styles/deletePhotoStyles";

// Import Toastify
import { toast } from "react-toastify";

import { fs, sr } from "../../firebase";

const DeleteBG = ({ name }) => {

    const notifySuccess = () => toast.success(" ✔️ PHOTO SUPPRIMéE AVEC SUCCèS");

  const onDelete = async () => {
    const storageRef = sr.ref();
    const fileRef = storageRef.child(`images/BGImages/${name}`);
    await fileRef.delete();

    fs.collection("BGImages").doc(name).delete().then(() => {
      notifySuccess()
    })

    
  };

  return (
    <>
      <DeleteBGS onClick={onDelete}>X</DeleteBGS>
    </>
  );
};

export default DeleteBG;
