import React from "react";

// Import Styles
import { DeleteButton } from "../styles/deleteYoutube";

import { fs } from "../firebase";

const DeleteVideo = ({ video }) => {
  const onDelete = async () => {
    fs.collection("YoutubeVideos").doc(video).delete();
  };

  return (
    <>
      <DeleteButton onClick={onDelete}>X</DeleteButton>
    </>
  );
};

export default DeleteVideo;
