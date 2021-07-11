import React, { useState } from "react";

// Import Components
import { Submit } from "../../styles/layout";

// Import Styles
import { PhotoForm } from "../../styles/newPhotoStyles";

// Import Firestore & Storage
import { fs, sr } from "../../firebase";

const NewImages = () => {
  const [file, setFile] = useState(null);

  const onFileChange = (e) => {
    let selected = e.target.files[0];
    setFile(selected);
  };

  const onUpload = async () => {
    if (file) {
      const storageRef = sr.ref();
      const fileRef = storageRef.child(`images/OtherImages/${file.name}`);
      await fileRef.put(file);
      fs.collection("OtherImages")
        .doc(file.name)
        .set({
          name: file.name,
          url: await fileRef.getDownloadURL(),
        });
    }
  };

  return (
    <PhotoForm comp="true">
      <input type="file" onChange={onFileChange} accept="image/*" />
      <Submit onClick={onUpload}>Ajouter cette image</Submit>
    </PhotoForm>
  );
};

export default NewImages;
