import React from "react";

// Import Components
import PhotoSeries from "../components/PhotoSeries";
import AllVideos from "../components/AllVideos";
import AllBG from "../components/AllBG";
import Competence from "../components/Competence";
import ProfileImage from "../components/ProfileImage";
import WelcomeImages from "../components/WelcomeImages";

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

const sectionData = [
  {
    component: PhotoSeries,
    title: "Gérez vos séries de photo",
    id: 0,
  },
  {
    component: AllVideos,
    title: "Gérez vos vidéos",
    id: 1,
  },
  {
    component: AllBG,
    title: " Gérez vos Images D'arrière plan",
    id: 2,
  },
  {
    component: Competence,
    title: "Autres images",
    id: 3,
  },
  {
    component: ProfileImage,
    title: "Changez votre photo de profile",
    id: 4,
  },
  {
    component: WelcomeImages,
    title: "Changez votre image de Bienvenu",
    id: 5,
  },
];

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

      {sectionData.map((section) => (
        <HomeWrapper key={section.id}>
          <HomeTitle thin="true"> {section.title} </HomeTitle>
          <section.component />
        </HomeWrapper>
      ))}

    </HomeContainer>
  );
};

export default Home;
