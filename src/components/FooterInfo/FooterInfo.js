import React, { useState, useEffect } from "react";

// Import Component
import UpdateLocation from "./UpdateLocation";
import UpdateEmail from "./UpdateEmail";
import UpdatePhone from "./UpdatePhone";

// Import Styles
import { BioContainer } from "../../styles/biographieStyles";

// Import Firestore
import { fs } from "../../firebase";

const FooterInfo = () => {
  const [location, setLocation] = useState([]);
  const [year, setYear] = useState("");

  var year3 = new Date().getFullYear();

  useEffect(() => {
    setYear(year3);
    fs.collection("Locations").onSnapshot((snapshot) => {
      const tempLocation = [];
      snapshot.forEach((doc) => {
        tempLocation.push({ ...doc.data(), id: doc.id });
      });
      setLocation(tempLocation);
    });

    if (year) {
      fs.collection("Copyright").doc("01").update({
        year: year,
      });
    }
  }, []);

  return (
    <BioContainer>
      {location.map((single) => (
        <div key={single.name}>
          <UpdateLocation single={single.id} name={single.name} />
        </div>
      ))}
      <UpdateEmail />
      <UpdatePhone />
      <hr className="hr0" />
      <hr /> 
    </BioContainer>
  );
};

export default FooterInfo;
