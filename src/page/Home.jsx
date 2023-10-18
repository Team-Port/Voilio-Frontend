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
    <div className="home-wrap flex justify-start">
      <div className="p-4 w-[182.04px] left-[20px] mt-1 ml-5 mr-3">
        <Sidebar />
      </div>
      {/* <div className="mx-[2px]"></div> */}
      <div className="p-4 w-[100%] h-[100%] mt-1">
        <div className="w-[100%] h-[62px] relative">
          <div className="w-[100%] h-[0px] left-0 top-[43px] absolute border border-neutral-700"></div>
          <div className="left-[248.01px] top-0 absolute text-black text-2xl font-normal font-['Titillium Web']">
            게시글
          </div>
          <div className="left-[125.01px] top-0 absolute text-black text-2xl font-semibold font-['Titillium Web']">
            동영상
          </div>
          <div className="left-[23.01px] top-0 absolute text-black text-2xl font-normal font-['Titillium Web']">
            전체
          </div>
        </div>
        {/* <VideoList videoItems={videoItems} display="list-h" /> */}
        <VideoItem />
      </div>
    </div>
  );
};

export default Home;
