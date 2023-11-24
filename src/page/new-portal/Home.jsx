import React, { useState } from "react";
import InfoList from "../../component/InfoList";
import VideoList from "../../component/ new-portal/VideoList";
import { useRecoilValue } from "recoil";
import { isVideoItems } from "../../store/video/isVideoItems";
import NewMemberBox from "../../component/NewMemberBox";
import VideoItem from "../../component/ new-portal/VideoItem";
import Filter from "../../component/ new-portal/Filter";
import Sidebar from "../../component/ new-portal/Sidebar";
import Header from "../../component/ new-portal/Header";
import Followinglist from "../../component/ new-portal/Followinglist";

const Home = () => {
  const [division, setDivision] = useState("");
  const [items, setItems] = useState([]);
  const videoItems = useRecoilValue(isVideoItems);
  const [filter, setFilter] = useState(null);

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
    setDivision(selectedFilter); // division 값을 선택된 필터 값으로 설정
    // setItems();
    // console.log("Filter:", selectedFilter); // division 상태 업데이트 확인
  };

  return (
    <div>
      <div className="pl-[215px] pt-[85px] relative">
        <div className="w-full h-full flex flex-col">
          {/* <div className="w-full h-full flex flex-col"> */}
          <div className="w-full flex px-4 z-20">
            <Filter onFilterChange={handleFilterChange} />
            {/* <VideoList videoItems={videoItems} display="list-h" /> */}
          </div>
          <div className="w-full pt-[60px] mb-[30px]"></div>
          <VideoList division={division} items={items} filter={filter} />
          {/* <Followinglist division={division} items={items} filter={filter} /> */}
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Home;
