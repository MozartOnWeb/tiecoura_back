import React, { useState } from "react";

// Import Components
import { Submit } from "../../styles/layout";

// Import Styles
import { VideoForm } from "../../styles/newVideoStyles";

// Import Firestore & Storage
import { fs, sr } from "../../firebase/";

const NewProfile = () => {
  const [file, setFile] = useState(null);

  const onFileChange = (e) => {
    let selected = e.target.files[0];
    setFile(selected);
  };

  const onUpload = async () => {
    if (file) {
      const storageRef = sr.ref();
      const fileRef = storageRef.child(`images/Profile/${file.name}`);
      await fileRef.put(file);
      fs.collection("Profile")
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
      <input type="file" onChange={onFileChange} accept="image/*" />
      <Submit onClick={onUpload}>Ajouter cette Photo</Submit>
    </VideoForm>
  );
};

export default NewProfile;
