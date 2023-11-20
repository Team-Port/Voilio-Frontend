import React, { useState, useEffect } from "react";
import axios from "axios";
import { HOST_URL } from "../../lib/HostUrl";
import Mylist from "../../component/ new-portal/Mylist";
import Filter from "../../component/ new-portal/Filter";
import Profile from "../../component/ new-portal/Profile";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { isVideoItems } from "../../store/video/isVideoItems";

const Mypage = () => {
  const [data, setData] = useState(null);
  const [imageUrl, setimageUrl] = useState(null);
  const [nickname, setNickname] = useState(null);
  const [following, setFollowing] = useState(null);
  const [videoCount, setVideoCount] = useState(null);
  const [normalCount, setNormalCount] = useState(null);
  const [followerCount, setFollowerCount] = useState(null);
  const [user_id, setUser_id] = useState("2");
  const [id, setId] = useState(null);
  const [division, setDivision] = useState("전체");
  const [items, setItems] = useState([]);
  const videoItems = useRecoilValue(isVideoItems);
  const [filter, setFilter] = useState(null);
  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
    setDivision(selectedFilter); // division 값을 선택된 필터 값으로 설정
  };

  useEffect(() => {
    const jwtToken = sessionStorage.getItem("jwtAuthToken");
    // const user_id = sessionStorage.getItem("id");
    // console.log(sessionStorage.id);
    if (jwtToken) {
      axios
        .get(`${HOST_URL}/api/v1/users/${user_id}`, {
          headers: { Authorization: `Bearer ${jwtToken}` },
        })
        .then((response) => {
          setData(response.data.data);
          setUser_id(response.data.data.id);
          console.log(user_id);
          console.log(response.data.data.id);
          if (response.status === 200) {
            setData(response.data.data);
            setimageUrl(response.data.data.imageUrl);
            setNickname(response.data.data.nickname);
            setFollowing(response.data.data.following);
            setVideoCount(response.data.data.videoCount);
            setNormalCount(response.data.data.normalCount);
            setFollowerCount(response.data.data.followerCount);
            console.log("프로필을 정상적으로 불러왔습니다.");
          }
        })
        .catch((error) => {
          console.log("프로필을 불러오는데 실패했습니다.", error);
        });
    }
  }, [user_id]);
  return (
    // <div>
    <div className="pl-[215px] pt-[90px] relative">
      <div className="flex flex-col">
        <Profile
          nickname={nickname}
          imageUrl={imageUrl}
          following={following}
          videoCount={videoCount}
          normalCount={normalCount}
          followerCount={followerCount}
        />
        <div className="w-full h-full flex flex-col">
          {/* <div className=""> */}
          <div className="fixed w-full flex pt-[170px] px-4 z-20 bg-[#F5F5F7] ">
            <Filter onFilterChange={handleFilterChange} />
          </div>
          <div className="w-full pt-[60px] mb-[30px]"></div>
          <Mylist division={division} items={items} filter={filter} />
          {/* </div> */}
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Mypage;
