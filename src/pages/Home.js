import React from "react";

// Import Sections
import PhotoSeries from "../components/Series/PhotoSeries";
import YoutubeVideos from "../components/Youtube/YoutubeVideos";
import AllBG from "../components/Background/AllBG";
import OtherImages from "../components/Other-Images/OtherImages";
import ProfileImage from "../components/Profile-Image/ProfileImage";
import WelcomeImages from "../components/Welcome/WelcomeImages";
import AllDescriptions from "../components/Biographies/AllDescriptions";
import AllExperiences from "../components/Experiences/AllExperiences";
import OtherVideos from "../components/Other-Videos/OtherVideos";
import AllVideos from "../components/Videos/AllVideos";
import FooterInfo from "../components/FooterInfo/FooterInfo";
import Actualities from "../components/Actualities/Actualities";

// Import Icon
import { RiLogoutCircleLine } from "react-icons/ri";

// Import Firebase
import { auth } from "../firebase";

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
      component: WelcomeImages,
      title: "Changez votre image de Bienvenu",
      id: 6,
    },
    {
      component: ProfileImage,
      title: "Changez votre photo de profile",
      id: 5,
    },
    {
      component: PhotoSeries,
      title: "Gérez vos séries de photo",
      id: 0,
    },
    {
      component: OtherImages,
      title: "Gérez vos images secondaires",
      id: 4,
    },
    {
      component: AllBG,
      title: " Gérez vos Images D'arrière plan",
      id: 3,
    },
    {
      component: AllVideos,
      title: "Gérez vos Vidéos Principales",
      id: 9,
    },
    {
      component: YoutubeVideos,
      title: "Gérez vos Vidéos YouTube",
      id: 1,
    },
    {
      component: OtherVideos,
      title: "Gérez vos vidéos secondaires",
      id: 2,
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
    {
      component: FooterInfo,
      title: "Localisation & Contact",
      id: 10,
    },
    {
      component: Actualities,
      title: "Actualité",
      id: 11,
    },
  ];

  // LogOut Function
  const logOut = () => [auth.signOut()];

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
