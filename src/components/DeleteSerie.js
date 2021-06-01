import React from "react";

// Import Styles
import { Delete } from "../styles/deleteSerieStyles";

// Import Firebase
import { fs, sr } from "../firebase";

const DeleteSerie = ({ name }) => {

  const onDelete = async () => {
    fs.collection("series").doc(name).delete();

    // Create a root reference
    var storageRef = sr.ref();
    // Create a reference
    var serieRef = storageRef.child(`images/series/${name}`);

    // Now we get the references of these files
    serieRef
      .listAll()
      .then(function (result) {
        result.items.forEach(function (file) {
         file.delete();
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <Delete onClick={onDelete}>X</Delete>
    </>
  );
};

export default DeleteSerie;
