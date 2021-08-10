import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Import Styles
import { SerieWrapper, SerieContainer } from "../../styles/photoSeriesStyles";

// Import Component
import NewActuality from "./NewActuality";
import DeleteActuality from "./DeleteActuality";

// Import Firestore
import { fs } from "../../firebase";

const Actualities = () => {
  const [actualities, setActualities] = useState([]);

  useEffect(() => {
    fs.collection("Actualities")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        const tempAct = [];
        snapshot.forEach((doc) => {
          tempAct.push({ ...doc.data(), id: doc.id });
        });
        setActualities(tempAct);
      });
  }, []);

  return (
    <SerieContainer>
      {actualities.map((actuality) => (
        <SerieWrapper key={actuality.id}>
          <Link to={`actualities/${actuality.id}`}>
            <img
              src={actuality.image ? actuality.image : []}
              alt={`${actuality.name}`}
            />
            <p>{actuality.name}</p>
          </Link>
          <DeleteActuality name={actuality.id} actuality={actuality} />
        </SerieWrapper>
      ))}
      <hr className="hr0" />
      <NewActuality />
      <hr />
    </SerieContainer>
  );
};

export default Actualities;
