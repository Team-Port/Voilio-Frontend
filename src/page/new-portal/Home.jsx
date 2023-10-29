import React from "react";
import InfoList from "../../component/InfoList";
import VideoList from "../../component/VideoList";
import { useRecoilValue } from "recoil";
import { isVideoItems } from "../../store/video/isVideoItems";
import NewMemberBox from "../../component/NewMemberBox";
import VideoItem from "../../component/VideoItem";
import Filter from "../../component/ new-portal/Filter";
import Sidebar from "../../component/ new-portal/Sidebar";
import Header from "../../component/ new-portal/Header";

const Home = () => {
  const videoItems = useRecoilValue(isVideoItems);

  return (
    <div>
      <div className="pl-[230px] pt-[100px]">
        {" "}
        {/* 이렇게 설정하면 현재는 위치가 맞지 않으나, 모든 페이지에 header와 sidebar 때문에 padding을 설정해 주어야 할 것 같습니다!*/}
        <div className="w-full h-full">
          <div className="flex px-4 mt-1">
            <Filter />
            {/* <VideoList videoItems={videoItems} display="list-h" /> */}
          </div>
          <div className="sticky pt-[60px]"></div>
          <div className="overflow-scroll">
            <VideoList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
