import React, { useState, useEffect } from "react";

// Import Firestore
import { fs } from "../../firebase";

// Import Styles
import { WelcomeWrapper, WelcomeContainer } from "../../styles/welcomeStyles";

// Import Component
import UpdateWelcome from "../components/UpdateWelcome";

const ProfileImage = () => {
  const [Welcome, setWelcome] = useState([]);

  useEffect(() => {
    fs.collection("Welcome").onSnapshot((snap) => {
      const tempBG = [];
      snap.forEach((doc) => {
        tempBG.push({ ...doc.data(), id: doc.id });
      });
      setWelcome(tempBG);
    });
  }, []);

  return (
    <WelcomeContainer>
      {Welcome.map((wel) => (
        <WelcomeWrapper key={wel.name}>
          <img src={wel.url ? wel.url : []} alt={`${wel.name}`} />
          <UpdateWelcome name={wel.name} single={wel} />
        </WelcomeWrapper>
      ))}
      <hr />
    </WelcomeContainer>
  );
};

export default ProfileImage;
