import React, { useState, useEffect } from "react";

// Import Styles
import { BioContainer } from "../../styles/biographieStyles";

// Import Component
import UpdateExperience from "./UpdateExperience";

// Import Firestore
import { fs } from "../../firebase";

const AllExperiences = () => {
  const [number, setNumber] = useState([]);

  useEffect(() => {
    fs.collection("Experiences").onSnapshot((snapshot) => {
      const tempNumber = [];
      snapshot.forEach((doc) => {
        tempNumber.push({ ...doc.data(), id: doc.id });
      });
      setNumber(tempNumber);
    });
  }, []);

  return (
    <BioContainer>
      {number.map((single) => (
        <div key={single.name}>
          <UpdateExperience single={single.id} name={single.name} />
        </div>
      ))}
      <hr className="hr0" />
    </BioContainer>
  );
};

export default AllExperiences;
