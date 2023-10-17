import React from "react";
import "../../src/styles/tailwind.css";
import Sidebar from "../component/Sidebar";
import InfoList from "../component/InfoList";
import VideoList from "../component/VideoList";
import { useRecoilValue } from "recoil";
import { isVideoItems } from "../store/video/isVideoItems";
import NewMemberBox from "../component/NewMemberBox";
import VideoItem from "../component/VideoItem";

const Home = () => {
  const videoItems = useRecoilValue(isVideoItems);

  return (
    <div className="home-wrap flex">
      <div className="flex-1 p-4 w-[182.04px] left-[20px]">
        <Sidebar />
      </div>
      <div className="flex-1 p-4">
        {/* <VideoList videoItems={videoItems} display="list-h" /> */}
        <VideoItem />
      </div>
    </div>
  );
};

export default Home;
