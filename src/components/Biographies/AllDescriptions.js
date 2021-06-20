import React, { useState, useEffect } from "react";

// Import Styles
import { BioContainer } from "../../styles/biographieStyles";

// Import Component
import UpdateBio from "./UpdateBio";

// Import Firestore
import { fs } from "../../firebase";

const AllDescriptions = () => {
  const [desc, setDesc] = useState([]);

  useEffect(() => {
    fs.collection("Descriptions").onSnapshot((snapshot) => {
      const tempDesc = [];
      snapshot.forEach((doc) => {
        tempDesc.push({ ...doc.data(), id: doc.id });
      });
      setDesc(tempDesc);
    });
  }, []);

  return (
    <BioContainer>
      {desc.map((single) => (
          <div key={single.name}>
          <UpdateBio single={single.id} name={single.name} />
        </div>
      ))}
      <hr className="hr0" />
    </BioContainer>
  );
};

export default AllDescriptions;
