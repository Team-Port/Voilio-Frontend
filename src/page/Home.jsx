import React from "react";
import Sidebar from "../component/Sidebar";
import InfoList from "../component/InfoList";
import VideoList from "../component/VideoList";

const Home = ({ videoItems, handleSelectVideo, handleSetVideo }) => {
  return (
    <div className="home-wrap">
      <div className="left-sidebar-box">
        <Sidebar handleSetVideo={handleSetVideo} />
      </div>
      <div className="video-list">
        <VideoList
          videoItems={videoItems}
          display="list-h"
          handleSelectVideo={handleSelectVideo}
        />
      </div>
      <div className="right-sidebar-box">
        <InfoList />
      </div>
    </div>
  );
};

export default Home;
