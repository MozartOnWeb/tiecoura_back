import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Import Styles
import { SerieWrapper, SerieContainer } from "../../styles/photoSeriesStyles";

// Import Component
import NewSerie from "../Serie/NewSerie";
import DeleteSerie from "../Serie/DeleteSerie";

// Import Firestore
import { fs } from "../../firebase";

// Import custom arrows
import { NextArrow, PrevArrow } from "../CustomArrows";

// Import React Slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PhotoSeries = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    fs.collection("series")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        const tempSeries = [];
        snapshot.forEach((doc) => {
          tempSeries.push({ ...doc.data(), id: doc.id });
        });
        setSeries(tempSeries);
      });
  }, []);

   // Slider Settings
   const setting = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToScroll: 4,
    slidesToShow: 4,
    autoplay: false,
    fade: false,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

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
      <hr className="hr0" />
      <NewSerie />
      <hr />
    </SerieContainer>
  );
};

export default PhotoSeries;
