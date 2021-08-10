import React, { useState, useEffect } from "react";

// Import Styles
import { ActyalityDesc } from "../../styles/ActualitiesStyles";
import { Submit } from "../../styles/layout";

// Import Firetore
import { fs } from "../../firebase";

const ActualityDesc = ({ currentActuality }) => {
  const [desc, setDesc] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const onDescChange = (e) => setDesc(e.target.value);
  const onTitleChange = (e) => setTitle(e.target.value);
  const onDateChange = (e) => setDate(e.target.value);

  useEffect(() => {
    const serieRef = fs.collection("Actualities").doc(currentActuality);

    serieRef.get().then((doc) => {
      let { desc, title, date } = doc.data();
      setDesc(desc);
      setTitle(title);
      setDate(date);
    });
  }, []);

  const onSend = () => {
    if (desc || date || title) {
      fs.collection("Actualities").doc(currentActuality).update({
        desc: desc,
        title: title,
        date: date,
      });
    }
  };

  return (
    <ActyalityDesc>
      <input type="text" value={title} onChange={onTitleChange} />
      <input type="date" value={date} onChange={onDateChange} />
      <textarea cols="30" rows="5" value={desc} onChange={onDescChange} />
      <Submit onClick={onSend}>Mettre à jour</Submit>
    </ActyalityDesc>
  );
};

export default ActualityDesc;
