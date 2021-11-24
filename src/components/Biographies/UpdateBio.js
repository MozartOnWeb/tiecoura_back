import React, { useState, useEffect } from "react";

// Import Styles
import { Submit } from "../../styles/layout";
import { SingleBio } from "../../styles/biographieStyles";

// Import Firetore
import { fs } from "../../firebase";

const UpdateBio = ({ single }) => {
  const [desc, setDesc] = useState("");
  const [name, setName] = useState("");

  const onDescChange = (e) => setDesc(e.target.value);

  useEffect(() => {
    const serieRef = fs.collection("Descriptions").doc(single);

    serieRef.get().then((doc) => {
      let { desc, name } = doc.data(single);
      setDesc(desc);
      setName(name);
    });
  }, []);

  const onSend = () => {
    if (desc) {
      fs.collection("Descriptions").doc(single).update({
        desc: desc,
      });
    }
  };

  return (
    <SingleBio>
      <p> {name} </p>
      <textarea cols="30" rows="5" value={desc} onChange={onDescChange} />
      <Submit new="true" onClick={onSend}>
        Mettre à jour
      </Submit>
    </SingleBio>
  );
};

export default UpdateBio;
