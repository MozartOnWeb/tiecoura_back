import React, { useState } from "react";

// Import Components
import { Submit } from "../styles/layout";

// Import Styles
import { VideoForm } from "../styles/newVideoStyles";

// Import Firestore & Storage
import { fs } from "../firebase/";
import firebase from "firebase";

const NewVideo = () => {
  const [url, setUrl] = useState("");

  const onUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const onUrlUpload = async () => {
    if (!url) {
      return;
    }
    fs.collection("YoutubeVideos").doc().set({
      url: url,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    await setUrl("");
  };

  return (
    <VideoForm>
      <input type="url" onChange={onUrlChange} />
      <Submit onClick={onUrlUpload}>Ajouter cette vidéo</Submit>
    </VideoForm>
  );
};

export default NewVideo;
