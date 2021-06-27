import React, { useState, useEffect } from "react";

// Import Styles
import { Submit } from "../../styles/layout";
import { SingleBio } from "../../styles/biographieStyles";

// Import Firetore
import { fs } from "../../firebase";

const UpdateExperience = ({ single }) => {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");

  const onDescChange = (e) => setNumber(e.target.value);

  useEffect(() => {
    const serieRef = fs.collection("Experiences").doc(single);

    serieRef.get().then((doc) => {
      let { number, name } = doc.data(single);
      setNumber(number);
      setName(name);
    });
  }, []);

  const onSend = () => {
    if (number) {
      fs.collection("Experiences").doc(single).update({
        number: number,
      });
    }
  };

  return (
    <SingleBio>
      <p> {name} </p>
      <input type="number" name="xpinput" value={number} onChange={onDescChange} />
      <Submit onClick={onSend}>Mettre à jour</Submit>
    </SingleBio>
  );
};

export default UpdateExperience;
