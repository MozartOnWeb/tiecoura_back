import React from "react";
import firebase from "firebase/app";

// Import Styles
import { Delete } from "../../styles/deletePhotoStyles";

// Import Toastify
import { toast } from "react-toastify";

// Import firebase
import { fs, sr } from "../../firebase";

const DeletePhoto = ({ url, name, currentSerie }) => {

  const notifyError = () =>
    toast.error(" 🔥 IMPOSSIBLE D'EFFACER CETTE PHOTO");

  const notifySuccess = () =>
    toast.success(" ✔️ PHOTO EFFACéE AVEC SUCCèS");

  const onDelete = async () => {
    try {
      const storageRef = sr.ref();
      const fileRef = storageRef.child(`images/series/${currentSerie}/${name}`);
      await fileRef.delete();

      fs.collection("series")
        .doc(currentSerie)
        .update({
          images: firebase.firestore.FieldValue.arrayRemove({
            name,
            url,
          }),
        });

      await notifySuccess();
    } catch (error) {
      notifyError()
    }
  };

  return (
    <>
      <Delete onClick={onDelete}>X</Delete>
    </>
  );
};

export default DeletePhoto;
