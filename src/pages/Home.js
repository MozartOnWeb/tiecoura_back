import React from "react";

// Import Sections
import PhotoSeries from "../components/Series/PhotoSeries";
import AllVideos from "../components/Videos/AllVideos";
import YoutubeVideos from "../components/Youtube/YoutubeVideos";
import AllBG from "../components/Background/AllBG";
import Competence from "../components/Other-Images/Competence";
import ProfileImage from "../components/Profile-Image/ProfileImage";
import WelcomeImages from "../components/Welcome/WelcomeImages";
import AllDescriptions from "../components/Biographies/AllDescriptions"
import AllExperiences from "../components/Experiences/AllExperiences"

// Import Icon
import { RiLogoutCircleLine } from "react-icons/ri";

// Import Firebase
import { app } from "../firebase";

//Import Home Styles
import {
  HomeWrapper,
  HomeHeadrer,
  HomeTitle,
  HomeSubTitle,
  HomeContainer,
  LogOut,
} from "../styles/homeStyles";



const Home = () => {

  // All Sections Data
  const sectionData = [
    {
      component: ProfileImage,
      title: "Changez votre photo de profile",
      id: 5,
    },
    {
      component: WelcomeImages,
      title: "Changez votre image de Bienvenu",
      id: 6,
    },
    {
      component: PhotoSeries,
      title: "Gérez vos séries de photo",
      id: 0,
    },
    {
      component: YoutubeVideos,
      title: "Gérez vos Vidéos Principales",
      id: 1,
    },
    {
      component: AllVideos,
      title: "Gérez vos vidéos secondaires",
      id: 2,
    },
    {
      component: AllBG,
      title: " Gérez vos Images D'arrière plan",
      id: 3,
    },
    {
      component: Competence,
      title: "Gérez vos images secondaires",
      id: 4,
    },
    {
      component: AllDescriptions,
      title: "Gérez vos Biographies",
      id: 7,
    },
    {
      component: AllExperiences,
      title: "Votre Expérience",
      id: 8,
    },
  ];

  // LogOut Function
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
