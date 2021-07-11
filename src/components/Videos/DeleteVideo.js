import React from "react";

// Import Toastify
import { toast } from "react-toastify";

// Import Styles
import { DeleteButton } from "../../styles/deleteVideoStyles";

import { fs, sr } from "../../firebase";

const DeleteVideo = ({ video }) => {
  const notifyError = () => toast.error(" 🔥 IMPOSSIBLE DE SUPPRIMER LA VIDEO");

  const notifySuccess = () => toast.success(" ✔️ VIDEO SUPPRIMéE AVEC SUCCèS");

  const onDelete = async () => {
    try {
      const storageRef = sr.ref();
      const fileRef = storageRef.child(`videos/Principales/${video}`);
      await fileRef.delete();

      fs.collection("videos").doc(video).delete();
      notifySuccess();
    } catch (error) {
      notifyError();
      console.log(error);
    }
  };

  return (
    <>
      <DeleteButton onClick={onDelete}>X</DeleteButton>
    </>
  );
};

export default DeleteVideo;
