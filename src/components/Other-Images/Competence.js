import React, { useState, useEffect } from "react";

// Import Firestore
import { fs } from "../../firebase";

// Import Component
import NewCompetence from "./NewCompetence";
import UpdateCompetence from "./UpdateCompetence";
// import DeleteCompetence from "./DeleteCompetence";

// Import Styles
import {
  CompetenceWrapper,
  CompetenceContainer,
} from "../../styles/competenceStyles";

const Competence = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fs.collection("OtherImages").onSnapshot((snapshot) => {
      const tempImages = [];
      snapshot.forEach((doc) => {
        tempImages.push({ ...doc.data(), id: doc.id });
      });
      setImages(tempImages);
    });
  }, []);

  return (
    <CompetenceContainer>
      {images.map((image) => (
        <CompetenceWrapper key={image.name}>
          <img src={image.url ? image.url : []} alt={`${image.name}`} />
          <UpdateCompetence name={image.name} single={image} />
        </CompetenceWrapper>
      ))}
      <hr className="hr0" />
      <NewCompetence />
      <hr />
    </CompetenceContainer>
  );
};

export default Competence;
