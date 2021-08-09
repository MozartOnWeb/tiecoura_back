import React, { useState, useEffect } from "react";
import { useRouteMatch, Link } from "react-router-dom";

// Import icon
import { MdKeyboardBackspace } from "react-icons/md";

// Import Styles
import {
  SerieContainer,
  SerieTitle,
  SingleSerieWrapper,
  SerieHeader,
  Back,
} from "../../styles/photoSerieStyles";

// Import Component
import UpdateImage from "./UpdateImage";
import ActualityDesc from "./ActualityDesc";

// Import Firestore
import { fs } from "../../firebase";

const Actuality = () => {
  const [image, setImage] = useState([]);
  const [ActualityName, setSerieName] = useState("");
  const [serieDesc, setSerieDesc] = useState("");

  const match = useRouteMatch("/actualities/:actuality");
  const { actuality } = match.params;

  useEffect(() => {
    fs.collection("Actualities")
      .doc(actuality)
      .onSnapshot((doc) => {
        if (doc.exists) {
          setImage(doc.data().image || []);
          setSerieName(doc.data().name);
          setSerieDesc(doc.data().desc);
        }
      });
  }, [actuality]);

  return (
    <SerieContainer>
      <SerieHeader>
        <Back>
          <Link to="/">
            <MdKeyboardBackspace />
          </Link>
        </Back>
        <SerieTitle>
          Actualité : <span>{ActualityName}</span>
        </SerieTitle>
      </SerieHeader>
      <div className="series_container">
        <SingleSerieWrapper>
          <img src={image} alt={image} />
          <UpdateImage
            name={image}
            single={image}
            currentActuality={actuality}
          />
        </SingleSerieWrapper>
      </div>
      <hr />
      <ActualityDesc currentActuality={actuality} />
    </SerieContainer>
  );
};

export default Actuality;
