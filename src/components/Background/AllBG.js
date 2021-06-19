import React, { useState, useEffect } from "react";

// Import Firestore
import { fs } from "../../firebase";

// Import Component
import NewBG from "./NewBG";
import DeleteBG from "./DeleteBG";

// Import Styles
import { BGWrapper, BGContainer } from "../../styles/AllBGStyles";

const AllBG = () => {
  const [BG, setBG] = useState([]);

  useEffect(() => {
    fs.collection("BGImages").onSnapshot((snap) => {
      const tempBG = [];
      snap.forEach((doc) => {
        tempBG.push({ ...doc.data(), id: doc.id });
      });
      setBG(tempBG);
    });
  }, []);

  return (
    <BGContainer>
      {BG.map((bg) => (
        <BGWrapper key={bg.name}>
          <img
            src={bg.url ? bg.url : []}
            alt={`${bg.name}`}
          />
          <DeleteBG name={bg.name} />
        </BGWrapper>
      ))}
      <hr className="hr0" />
      <NewBG />
      <hr />
    </BGContainer>
  );
};

export default AllBG;
