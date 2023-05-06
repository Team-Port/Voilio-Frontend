import React, { useCallback, useEffect, useState } from "react";
import Sidebar from "../component/Sidebar";
import ProfileDetail from "../component/ProfileComp/ProfileDetail";
import ProfileHeader from "../component/ProfileComp/ProfileHeader";
import jwt_decode from "jwt-decode";
import axios from "axios";
import UserVideoList from "../component/ProfileComp/UserVideoList";
import VideoList from "../component/VideoList";
import { HOST_URL } from "../lib/HostUrl";

const Profile = ({ handleSelectVideo, selectedWatch }) => {
  const [myVideos, setMyVideos] = useState({});
  const [userInfo, setUserInfo] = useState({});
  const userId = sessionStorage.getItem("userId");
  const nickname = sessionStorage.getItem("nickname");

  const getMyVideo = () => {
    axios
      .get(`${HOST_URL}/api/v1/boards/lists/@${nickname}`)
      .then((response) => {
        if (response.data.status === "200") {
          setMyVideos(response.data.data._embedded.boardResponseList);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getMyVideo();
    getUser();
  }, []);

  const getUser = () => {
    axios
      .get(`${HOST_URL}/api/v1/users/${userId}`)
      .then((response) => {
        if (response.data.status === "200") {
          setUserInfo(response.data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="home-wrap">
      <div className="left-sidebar-box">
        <Sidebar />
      </div>

      <div>
        <ProfileHeader />
        <div className="video-list">
          <VideoList
            videoItems={myVideos}
            display="list-h"
            handleSelectVideo={handleSelectVideo}
          />
        </div>
      </div>

      <div className="right-sidebar-box">
        <ProfileDetail userInfo={userInfo} />
      </div>
    </div>
  );
};

export default Profile;
