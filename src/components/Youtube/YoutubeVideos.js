import React, { useState, useEffect } from "react";

// Import Firestore
import { fs } from "../../firebase";

// Import Component
import NewYoutube from "./NewYoutube";
import DeleteYoutube from "./DeleteYoutube";

// Import Styles
import { VideoContainer, VideoWrapper } from "../../styles/youtubeStyles";

const AllVideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fs.collection("YoutubeVideos")
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
        <VideoWrapper key={video.id}>
          <iframe
            src={video.url}
            title="Youtube"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
          <DeleteYoutube video={video.id} />
        </VideoWrapper>
      ))}
      <hr className="hr0" />
      <NewYoutube />
      <hr />
    </VideoContainer>
  );
};

export default AllVideos;
