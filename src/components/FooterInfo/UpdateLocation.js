import React, { useState, useEffect } from "react";

// Import Styles
import { Submit } from "../../styles/layout";
import { SingleBio } from "../../styles/biographieStyles";

// Import Firetore
import { fs } from "../../firebase";


const UpdateLocation = ({ single }) => {
    
    const [location, setLocation] = useState("");
    const [name, setName] = useState("");

  const onLocationChange = (e) => setLocation(e.target.value);


      useEffect(() => {
        const serieRef = fs.collection("Locations").doc(single);

        serieRef.get().then((doc) => {
          let { location, name } = doc.data(single);
          setLocation(location);
          setName(name);
        });
      }, []);
    
      const onSend = () => {
        if (location) {
          fs.collection("Locations").doc(single).update({
            location: location,
          });
        }
      };

    return (
      <SingleBio>
        <p> {name} </p>
        <input
          type="text"
          name="location"
          value={location}
          onChange={onLocationChange}
        />
        <Submit onClick={onSend}>Mettre à jour</Submit>
      </SingleBio>
    );
};

export default UpdateLocation;
