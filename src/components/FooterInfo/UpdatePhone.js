import React, { useState, useEffect } from "react";

// Import Styles
import { Submit } from "../../styles/layout";
import { SingleBio } from "../../styles/biographieStyles";

// Import Firetore
import { fs } from "../../firebase";

const UpdatePhone = () => {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");

  const onPhoneNumberChnage = (e) => setNumber(e.target.value);

  useEffect(() => {
    const serieRef = fs.collection("Contact").doc("01");

    serieRef.get().then((doc) => {
      let { number, name } = doc.data("01");
      setNumber(number);
      setName(name);
    });
  }, []);

  const onSend = () => {
    if (number) {
      fs.collection("Contact").doc("01").update({
        number: number,
      });
    }
  };

  return (
    <SingleBio>
      <p> {name} </p>
      <input type="tel" name="tel" value={number} onChange={onPhoneNumberChnage} />
      <Submit onClick={onSend}>Mettre à jour</Submit>
    </SingleBio>
  );
};

export default UpdatePhone;
