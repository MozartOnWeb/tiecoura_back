import React, { useState, useEffect } from "react";

// Import Firestore
import { fs } from "../../firebase";

// Import Component
import NewVideo from "../components/NewVideo";
import DeleteVideo from "../components/DeleteVideo";

// Import Styles
import { VideoContainer, VideoWrapper } from "../../styles/allVideosStyles";

const AllVideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fs.collection("videos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snap) => {
        const tempVideos = [];
        snap.forEach((doc) => {
          tempVideos.push({ ...doc.data(), id: doc.id });
        });
        setVideos(tempVideos);
      });
  }, []);

  return (
    <VideoContainer>
      {videos.map((video) => (
        <VideoWrapper key={video.name}>
          <p> {video.name} </p>
          <DeleteVideo video={video.name} />
        </VideoWrapper>
      ))}
      <hr className="hr0"/>
      <NewVideo />
      <hr />
    </VideoContainer>
  );
};

export default AllVideos;
