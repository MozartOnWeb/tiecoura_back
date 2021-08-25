import React, { useState, useEffect } from "react";
import { useRouteMatch, Link } from "react-router-dom";

// Import icon
import { MdKeyboardBackspace } from "react-icons/md";

// Import Styles
import {
  ActualityWrapper,
  ActualityTitle,
  ImageWrapper,
  ActualityHeader,
  Back,
} from "../../styles/ActualitiesStyles";

// Import Component
import UpdateImage from "./UpdateImage";
import ActualityDesc from "./ActualityDesc";

// Import Firestore
import { fs } from "../../firebase";

const Actuality = () => {
  const [image, setImage] = useState([]);
  const [ActualityName, setActualityName] = useState("");
  const [serieDesc, setSerieDesc] = useState("");
  const [imageName, setImageName] = useState("");

  const match = useRouteMatch("/actualities/:actuality");
  const { actuality } = match.params;

  useEffect(() => {
    fs.collection("Actualities")
      .doc(actuality)
      .onSnapshot((doc) => {
        if (doc.exists) {
          setImage(doc.data().image || []);
          setActualityName(doc.data().name);
          setSerieDesc(doc.data().desc);
          setImageName(doc.data().imageName);
        }
      });
  }, [actuality]);

  return (
    <ActualityWrapper>
      <ActualityHeader>
        <Back>
          <Link to="/">
            <MdKeyboardBackspace />
          </Link>
        </Back>
        <ActualityTitle>
          éVENT : <span>{ActualityName}</span>
        </ActualityTitle>
      </ActualityHeader>
      <div className="series_container">
        <ImageWrapper>
          <img src={image} alt={image} />
          <UpdateImage name={imageName} currentActuality={actuality} />
        </ImageWrapper>
        <hr />
        <ActualityDesc currentActuality={actuality} />
      </div>
    </ActualityWrapper>
  );
};

export default Actuality;
