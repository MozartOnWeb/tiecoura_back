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
import NewPhoto from "./NewPhoto";
import DeletePhoto from "./DeletePhoto";
import SerieDesc from "./SerieDesc";

// Import Firestore
import { fs } from "../../firebase";

const PhotoSerie = () => {
  const [images, setImages] = useState([]);
  const [serieName, setSerieName] = useState("");
  const [serieDesc, setSerieDesc] = useState("");

  const match = useRouteMatch("/:serie");
  const { serie } = match.params;

  useEffect(() => {
    fs.collection("series")
      .doc(serie)
      .onSnapshot((doc) => {
        if (doc.exists) {
          setImages(doc.data().images || []);
          setSerieName(doc.data().name);
          setSerieDesc(doc.data().desc);
        }
      });
  }, [serie]);

  return (
    <SerieContainer>
      <SerieHeader>
        <Back>
          <Link to="/">
            <MdKeyboardBackspace />
          </Link>
        </Back>
        <SerieTitle>
          Série de photos : <span>{serieName}</span>
        </SerieTitle>
      </SerieHeader>
      <div className="series_container">
        {images &&
          images.map((image) => (
            <SingleSerieWrapper key={image.name}>
              <img src={image.url} alt={image.name} />
              <DeletePhoto
                name={image.name}
                url={image.url}
                currentSerie={serie}
              />
            </SingleSerieWrapper>
          ))}
      </div>
      <hr />
      <NewPhoto currentSerie={serie} />
      <SerieDesc currentSerie={serie} />
    </SerieContainer>
  );
};

export default PhotoSerie;
