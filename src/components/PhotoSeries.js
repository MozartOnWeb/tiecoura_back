import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Import Styles
import { SerieWrapper, SerieContainer } from "../styles/photoSeriesStyles";

// Import Component
import NewSerie from "../components/NewSerie";
import DeleteSerie from "./DeleteSerie";

// Import Firestore
import { fs } from "../firebase";

const PhotoSeries = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    fs.collection("series").onSnapshot((snapshot) => {
      const tempSeries = [];
      snapshot.forEach((doc) => {
        tempSeries.push({ ...doc.data(), id: doc.id });
      });
      setSeries(tempSeries);
    });
  }, []);

  return (
    <SerieContainer>
      {series.map((serie) => (
        <SerieWrapper key={serie.name}>
          <Link to={`/${serie.id}`}>
            <img
              src={serie.images ? serie.images[0].url : []}
              alt={`${serie.name}`}
            />
            <p>{serie.name}</p>
          </Link>
          <DeleteSerie name={serie.name} serie={serie} />
        </SerieWrapper>
      ))}
      <hr />
      <NewSerie />
    </SerieContainer>
  );
};

export default PhotoSeries;