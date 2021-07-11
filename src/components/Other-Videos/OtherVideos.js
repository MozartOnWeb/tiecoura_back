import React, { useState, useEffect } from "react";

// Import Firestore
import { fs } from "../../firebase";

// Import Component
import UpdateVideo from "./UpdateVideo";
// import DeleteCompetence from "./DeleteCompetence";

// Import Styles
import { ImagesWrapper, ImagesContainer } from "../../styles/otherImgStyles";

const OtherVideos = () => {
  const [video, setVideo] = useState([]);

  useEffect(() => {
    fs.collection("OtherVideos").onSnapshot((snapshot) => {
      const tempVideo = [];
      snapshot.forEach((doc) => {
        tempVideo.push({ ...doc.data(), id: doc.id });
      });
      setVideo(tempVideo);
    });
  }, []);

  return (
    <ImagesContainer>
      {video.map((vid) => (
        <ImagesWrapper key={vid.id}>
          {/* <h2> {vid.id} </h2> */}
          <video src={vid.url ? vid.url : []} autoPlay={false} muted />
          <UpdateVideo name={vid.name} single={vid.id} />
        </ImagesWrapper>
      ))}
      <hr className="hr0" />
      <hr />
    </ImagesContainer>
  );
};

export default OtherVideos;
