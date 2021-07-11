import React, { useState, useEffect } from "react";

// Import Firestore
import { fs } from "../../firebase";

// Import Component
import UpdateImages from "./UpdateImages";
// import DeleteCompetence from "./DeleteCompetence";

// Import Styles
import {
  ImagesWrapper,
  ImagesContainer,
} from "../../styles/otherImgStyles";

const OtherImages = () => {
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
    <ImagesContainer>
      {images.map((image) => (
        <ImagesWrapper key={image.id}>
          <img src={image.url ? image.url : []} alt={`${image.name}`} />
          <UpdateImages name={image.name} single={image.id} />
        </ImagesWrapper>
      ))}
      <hr className="hr0" />
      <hr />
    </ImagesContainer>
  );
};

export default OtherImages;
