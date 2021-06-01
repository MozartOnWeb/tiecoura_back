import React from "react";

// Import Components
import PhotoSeries from "../components/PhotoSeries";
import AllVideos from "../components/AllVideos";

// Import Icon
import { RiLogoutCircleLine } from "react-icons/ri";

// Import Firebase
import { app } from "../firebase";

//Import Styles
import {
  HomeWrapper,
  HomeHeadrer,
  HomeTitle,
  HomeSubTitle,
  HomeContainer,
  LogOut,
} from "../styles/homeStyles";

const Home = () => {
  const logOut = () => [app.auth().signOut()];

  return (
    <HomeContainer>
      <HomeHeadrer>
        <LogOut onClick={() => logOut()}>
          <RiLogoutCircleLine />
        </LogOut>
        <HomeTitle>Bienvenu Tiecoura</HomeTitle>
        <HomeSubTitle>Ici vous pouvez gérez votre site !</HomeSubTitle>
      </HomeHeadrer>

      <HomeWrapper>
        <HomeTitle thin="true">Gérez vos séries de photo</HomeTitle>
        <PhotoSeries />
      </HomeWrapper>
      <HomeWrapper>
        <HomeTitle thin="true">Gérez vos vidéos</HomeTitle>
        <AllVideos />
      </HomeWrapper>
    </HomeContainer>
  );
};

export default Home;
