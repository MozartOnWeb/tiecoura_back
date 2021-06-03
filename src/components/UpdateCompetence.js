import React, { useState } from "react";

// Import Components
import { Submit } from "../styles/layout";

// Import Styles
import { UpdateForm } from "../styles/updateCompStyles";

import {GrUpdate} from 'react-icons/gr'

// Import Firestore & Storage
import { fs, sr } from "../firebase/";

const UpdateCompetence = ({ name }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const types = ["image/png", "image/jpeg"];

  const deleteLast = () => {
    const storageRef = sr.ref();
    const fileRef = storageRef.child(`images/CompetenceImages/${name}`);
    fileRef.delete();

    fs.collection("CompetenceImages").doc(name).delete();
  };

  const onUpload = async () => {
    if (file) {
      deleteLast();
      const storageRef = sr.ref();
      const fileRef = storageRef.child(`images/CompetenceImages/${file.name}`);

      await fileRef.put(file);
      fs.collection("CompetenceImages")
        .doc(file.name)
        .set({
          name: file.name,
          url: await fileRef.getDownloadURL(),
        });
    }
  };

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

  return (
    <UpdateForm>
      <label htmlFor="file"><GrUpdate /></label>
        <input type="file" id="file" onChange={onFileChange} />
      <Submit onClick={onUpload}>Mettre à jour</Submit>
    </UpdateForm>
  );
};

export default UpdateCompetence;
