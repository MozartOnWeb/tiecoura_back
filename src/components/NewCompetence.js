import React, { useState } from "react";

// Import Components
import { Submit } from "../styles/layout";

// Import Styles
import { PhotoForm } from "../styles/newPhotoStyles";

// Import Firestore & Storage
import { fs, sr } from "../firebase/";

const NewCompetence = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const types = ["image/png", "image/jpeg"];

  const onFileChange = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setError(alert("Tiecoura Veuillez choisir une image au format png/jpeg"));
      setFile(null);
    }
  };

  const onUpload = async () => {
    if (file) {
      const storageRef = sr.ref();
      const fileRef = storageRef.child(
        `images/CompetenceImages/${file.name}`,
      );
      await fileRef.put(file);
      fs.collection("CompetenceImages")
        .doc(file.name)
        .set({
          name: file.name,
          url: await fileRef.getDownloadURL(),
        });
    }
  };

  return (
    <PhotoForm comp="true">
      <input type="file" onChange={onFileChange} />
      <Submit onClick={onUpload}>Ajouter cette image</Submit>
    </PhotoForm>
  );
};

export default NewCompetence;