import React from "react";

// Import Toastify
import { toast } from "react-toastify";

// Import Styles
import { DeleteButton } from "../styles/deleteYoutube";

import { fs } from "../firebase";

const DeleteVideo = ({ video }) => {
  const notifyError = () => toast.error(" 🔥 IMPOSSIBLE DE SUPPRIMER LA VIDéO");

  const notifySuccess = () => toast.success(" ✔️ VIDéO SUPPRIMéE AVEC SUCCèS");

  const onDelete = async () => {
    try {
      fs.collection("YoutubeVideos").doc(video).delete();
      notifySuccess();
    } catch (error) {
      notifyError();
    }
  };

  return (
    <>
      <DeleteButton onClick={onDelete}>X</DeleteButton>
    </>
  );
};

export default DeleteVideo;
