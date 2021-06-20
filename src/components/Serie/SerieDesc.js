import React, { useState, useEffect } from "react";

// Import Styles
import { DescWrapper } from "../../styles/serieDesStyles";
import { Submit } from "../../styles/layout";

// Import Firetore
import { fs } from "../../firebase";

const SerieDesc = ({ currentSerie }) => {
  const [desc, setDesc] = useState("");

  const onDescChange = (e) => setDesc(e.target.value);

  useEffect(() => {
    const serieRef = fs.collection("series").doc(currentSerie);

    serieRef.get().then((doc) => {
      let { desc } = doc.data();
      setDesc(desc);
    });
  }, []);

  const onSend = () => {
    if (desc) {
      fs.collection("series").doc(currentSerie).update({
        desc: desc,
      });
    }
  };

  return (
    <DescWrapper>
      <textarea cols="30" rows="5" value={desc} onChange={onDescChange} />
      <Submit onClick={onSend}>Mettre à jour</Submit>
    </DescWrapper>
  );
};

export default SerieDesc;
