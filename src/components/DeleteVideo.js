import React from "react";

// Import Styles
import { DeleteButton } from "../styles/deleteVideoStyles";

import { fs, sr } from "../firebase";

const DeleteVideo = ({ video }) => {
  const onDelete = async () => {
    const storageRef = sr.ref();
    const fileRef = storageRef.child(`videos/${video}`);
    await fileRef.delete();

    fs.collection("videos").doc(video).delete();
  };

  return (
    <>
      <DeleteButton onClick={onDelete}>X</DeleteButton>
    </>
  );
};

export default DeleteVideo;
