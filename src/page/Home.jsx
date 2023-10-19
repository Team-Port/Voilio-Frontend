import React from "react";
import "../../src/styles/tailwind.css";
import InfoList from "../component/InfoList";
import VideoList from "../component/VideoList";
import { useRecoilValue } from "recoil";
import { isVideoItems } from "../store/video/isVideoItems";
import NewMemberBox from "../component/NewMemberBox";
import VideoItem from "../component/VideoItem";
import Sidebar from "../component/ new-portal/Sidebar";

const Home = () => {
  const videoItems = useRecoilValue(isVideoItems);

  return (
    <div className="pl-[230px] pt-[100px]">
      {" "}
      {/* 이렇게 설정하면 현재는 위치가 맞지 않으나, 모든 페이지에 header와 sidebar 때문에 padding을 설정해 주어야 할 것 같습니다!*/}
      <div className="flex justify-start home-wrap">
        <div className="p-4 w-[182.04px] left-[20px] mt-1 ml-5 mr-3"></div>
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
    </div>
  );
};

export default Home;
