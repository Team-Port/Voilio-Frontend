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

    if (jwtToken) {
      axios
        .get(`${HOST_URL}/api/v1/users/${user_id}`, {
          headers: { Authorization: `Bearer ${jwtToken}` },
        })
        .then((response) => {
          setData(response.data.data);
          setId(response.id);
          console.log(response.data);
          if (response.status === 200) {
            setimageUrl(response.data.data.imageUrl);
            setNickname(response.data.data.nickname);
            setFollowing(response.data.data.following);
            console.log("팔로워:", response.data.data.following);
            console.log("닉네임:", response.data.data.nickname);
            console.log("프로필을 정상적으로 불러왔습니다.");
          }
        })
        .catch((error) => {
          console.log("프로필을 불러오는데 실패했습니다.");
          console.log(error);
          console.log(user_id);
        });
    }
  }, [user_id]);
  return (
    <div>
      <div className="pl-[230px] pt-[85px] pr-[25px]">
        <div className="flex flex-col">
          <Profile
            nickname={nickname}
            imageUrl={imageUrl}
            following={following}
            user_id={user_id}
          />
          <div className="w-full h-full">
            <div className="sticky top-[270px] z-20">
              <Filter onFilterChange={handleFilterChange} />
            </div>
            <div className="mt-[205px] pl-4">
              <Mylist division={division} items={items} filter={filter} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mypage;
