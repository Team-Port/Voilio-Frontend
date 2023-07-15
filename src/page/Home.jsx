import React from "react";
import Sidebar from "../component/Sidebar";
import InfoList from "../component/InfoList";
import VideoList from "../component/VideoList";
import { useRecoilValue } from "recoil";
import { isVideoItems } from "../store/video/isVideoItems";

const Home = () => {
  const videoItems = useRecoilValue(isVideoItems);

  return (
    <div className="home-wrap">
      <div className="left-sidebar-box">
        <Sidebar />
      </div>
      <div className="video-list">
        <VideoList videoItems={videoItems} display="list-h" />
      </div>
      <div className="right-sidebar-box">
        <InfoList />
      </div>
    </div>
  );
};

export default Home;
