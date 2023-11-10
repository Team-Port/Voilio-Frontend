import React, { useState, useEffect } from "react";
import axios from "axios";
import { HOST_URL } from "../../lib/HostUrl";
import Mylist from "../../component/ new-portal/Mylist";
import Filter from "../../component/ new-portal/Filter";
import Profile from "../../component/ new-portal/Profile";

const Mypage = ({ user_id }) => {
  const [data, setData] = useState(null);
  const [imageUrl, setimageUrl] = useState(null);
  const [nickname, setNickname] = useState(null);
  const [following, setFollowing] = useState(null);

  useEffect(() => {
    const jwtToken = sessionStorage.getItem("jwtAuthToken");

    if (jwtToken && user_id) {
      axios
        // .get(`${HOST_URL}/api/v1/auth/me`, {
        //api/v1/users/{user_id}로 수정
        .get(`${HOST_URL}/api/v1/users/${user_id}`, {
          headers: { Authorization: `Bearer ${jwtToken}` },
        })
        .then((response) => {
          setData(response.data);
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
        });
    }
  }, [user_id]);
  return (
    <div>
      <div className="pl-[230px] pt-[85px] relative">
        <div className="flex flex-col">
          <Profile
            nickname={nickname}
            imageUrl={imageUrl}
            following={following}
          />
          <div className="w-full h-full">
            <div className="flex px-4 z-20">
              <Filter />
              {/* <Mylist videoItems={videoItems} display="list-h" /> */}
            </div>
            <div className="pt-[60px] mb-[30px]"></div>
            <div className="">
              <Mylist />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mypage;
