import React, { useState, useEffect } from "react";

// Import Firestore
import { fs } from "../../firebase";

// Import Styles
import { ProfileWrapper, ProfileContainer } from "../../styles/profileStyles";

// Import Component
import UpdateProfile from "./UpdateProfile";

const ProfileImage = () => {
  const [Profile, setProfile] = useState([]);

  useEffect(() => {
    fs.collection("Profile").onSnapshot((snap) => {
      const tempBG = [];
      snap.forEach((doc) => {
        tempBG.push({ ...doc.data(), id: doc.id });
      });
      setProfile(tempBG);
    });
  }, []);

  return (
    <ProfileContainer>
      {Profile.map((pro) => (
        <ProfileWrapper key={pro.name}>
          <img src={pro.url ? pro.url : []} alt={`${pro.name}`} />
          <UpdateProfile name={pro.name} single={pro} />
        </ProfileWrapper>
      ))}
      <hr />
    </ProfileContainer>
  );
};

export default ProfileImage;
