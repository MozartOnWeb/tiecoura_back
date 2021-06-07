import React, { useState } from "react";

// Import Styles
import { SerieForm } from "../styles/newSerieStyles";
import { Submit } from "../styles/layout";

// import firestore
import { fs } from "../firebase";
import firebase from "firebase";

const NewSerie = () => {
  const [serieName, setSerieName] = useState("");

  const onSerieNameChange = (e) => {
    setSerieName(e.target.value);
  };

  const onSerieCreate = () => {
    if (!serieName) {
      return;
    }
    fs.collection("series").doc(serieName).set({
      name: serieName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    setSerieName("");
  };

  return (
    <SerieForm>
      <input value={serieName} onChange={onSerieNameChange} type="text" />
      <Submit onClick={onSerieCreate}>Créer une Nouvelle Série</Submit>
    </SerieForm>
  );
};

export default NewSerie;
