import React, { useState } from "react";
import VideoList from "../../component/ new-portal/VideoList";
import { useRecoilValue } from "recoil";
import { isVideoItems } from "../../store/video/isVideoItems";
import Filter from "../../component/ new-portal/Filter";

const Home = () => {
  const [division, setDivision] = useState("");
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState(null);

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
    setDivision(selectedFilter); // division 값을 선택된 필터 값으로 설정
    // setItems();
    // console.log("Filter:", selectedFilter); // division 상태 업데이트 확인
  };

  return (
    <div>
      <div className="pl-[230px] pr-[25px] pt-[85px]">
        <Filter onFilterChange={handleFilterChange} />
        <div className="mt-[20px]">
          <VideoList division={division} items={items} filter={filter} />
        </div>
      </div>
    </div>
  );
};

export default Home;
