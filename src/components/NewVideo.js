import React, { useState } from "react";

// Import Components
import { Submit } from "../styles/layout";

// Import Styles
import { VideoForm } from "../styles/newVideoStyles";

// Import Firestore & Storage
import { fs, sr } from "../firebase/";

const NewVideo = () => {
  const [file, setFile] = useState(null);

  const types = ["video/mp4", "video/mkv"];

  const onFileChange = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
    } else {
      setFile(null);
    }
  };

  const onUpload = async () => {
    if (file) {
      const storageRef = sr.ref();
      const fileRef = storageRef.child(`videos/${file.name}`);
      await fileRef.put(file);
      fs.collection("videos")
        .doc(file.name)
        .set({
          name: file.name,
          url: await fileRef.getDownloadURL(),
        });
    }
    setFile(null);
  };

  return (
    <VideoForm>
      <input type="file" onChange={onFileChange} />
      <Submit onClick={onUpload}>Ajouter cette vidéo</Submit>
    </VideoForm>
  );
};

export default NewVideo;
