import React, { useState } from "react";

// Import URL Validator
import isURL from "validator/lib/isURL";

// Import Toastify
import { toast } from "react-toastify";

// Import Components
import { Submit } from "../../styles/layout";

// Import Styles
import { VideoForm } from "../../styles/newVideoStyles";

// Import Firestore & Storage
import { fs } from "../../firebase/";
import firebase from "firebase";

const NewVideo = () => {
  const [url, setUrl] = useState("");

  const notifyError = () =>
    toast.error(" 🔥 CECI N'EST PAS UN LIEN VALIDE");

  const notifySuccess = () =>
    toast.success(" ✔️ VIDéO AJOUTéE AVEC SUCCèS");

  const onUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const onUrlUpload = async () => {
    const valideURL = isURL(url);
    if (valideURL) {
      fs.collection("YoutubeVideos").doc().set({
        url: url,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setUrl("");
      notifySuccess();
    } else {
      setUrl("");
      notifyError();
    }
  };

  return (
    <VideoForm>
      <input type="url" onChange={onUrlChange} />
      <Submit onClick={onUrlUpload}>Ajouter cette vidéo</Submit>
    </VideoForm>
  );
};

export default NewVideo;
