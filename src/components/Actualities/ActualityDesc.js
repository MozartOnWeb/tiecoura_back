import React, { useState, useEffect } from "react";

// Import Styles
import { ActyalityDesc } from "../../styles/ActualitiesStyles";
import { Submit } from "../../styles/layout";

// Import Firetore
import { fs } from "../../firebase";

const ActualityDesc = ({ currentActuality }) => {
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [hour, setHour] = useState("");
  const [name, setName] = useState("");

  const onDescChange = (e) => setDesc(e.target.value);
  const onDateChange = (e) => setDate(e.target.value);
  const onLocationChange = (e) => setLocation(e.target.value);
  const onHourChange = (e) => setHour(e.target.value);

  useEffect(() => {
    const serieRef = fs.collection("Actualities").doc(currentActuality);

    serieRef.get().then((doc) => {
      let { desc } = doc.data();
      setDesc(desc);
    });
    serieRef.get().then((doc) => {
      let { date } = doc.data();
      setDate(date);
    });
    serieRef.get().then((doc) => {
      let { location } = doc.data();
      setLocation(location);
    });
    serieRef.get().then((doc) => {
      let { hour } = doc.data();
      setHour(hour);
    });

    fs.collection("Actualities")
      .doc(currentActuality)
      .onSnapshot((doc) => {
        if (doc.exists) {
          setName(doc.data().name);
        }
      });
  }, [currentActuality]);

  const onSend = () => {
    if (desc || date || location || hour) {
      fs.collection("Actualities").doc(currentActuality).update({
        desc: desc,
        date: date,
        location: location,
        hour: hour,
      });
    }
    console.log(desc, date, location, hour);
  };

  return (
    <div className="desc_container">
      <ActyalityDesc>
        <label>
          <p>Titre</p>
          <input type="text" name="title" value={name} disabled />
        </label>

        <label>
          <p>Date</p>
          <input type="date" name="date" value={date} onChange={onDateChange} />
        </label>

        <label>
          <p>Localisation</p>
          <input
            type="text"
            name="location"
            value={location}
            onChange={onLocationChange}
          />
        </label>
      </ActyalityDesc>

      <ActyalityDesc>
        <label>
          <p>Heure</p>
          <input type="time" value={hour} onChange={onHourChange} />
        </label>

        <label>
          <p>Description</p>
          <textarea cols="30" rows="5" value={desc} onChange={onDescChange} />
        </label>
      </ActyalityDesc>

      <ActyalityDesc className="eventSubmit">
        <Submit onClick={onSend}>Mettre à jour</Submit>
      </ActyalityDesc>
    </div>
  );
};

export default ActualityDesc;
