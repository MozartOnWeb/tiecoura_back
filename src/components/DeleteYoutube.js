import React from "react";

// Import Toastify
import { toast } from "react-toastify";

// Import Styles
import { DeleteButton } from "../styles/deleteYoutube";

import { fs } from "../firebase";

const DeleteVideo = ({ video }) => {
  const notifyError = () => toast.error(" 🔥 IMPOSSIBLE DE SUPPRIMER LA VIDEO");

  const notifySuccess = () => toast.success(" ✔️ VIDEO SUPPRIMEE AVEC SUCCES");

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
