import React, { useCallback, useEffect, useState } from "react";
import Sidebar from "../component/Sidebar";
import ProfileDetail from "../component/ProfileComp/ProfileDetail";
import ProfileHeader from "../component/ProfileComp/ProfileHeader";
import jwt_decode from "jwt-decode";
import axios from "axios";
import VideoList from "../component/VideoList";
import { HOST_URL } from "../lib/HostUrl";

const Profile = () => {
  const [myVideos, setMyVideos] = useState({});
  const [userInfo, setUserInfo] = useState({});
  const userId = jwt_decode(sessionStorage.getItem("jwtAuthToken")).sub;
  const nickname = sessionStorage.getItem("nickname");
  const [auth, setAuth] = useState(false);

  const getMyVideo = () => {
    axios
      .get(`${HOST_URL}/api/v1/boards/lists/@${nickname}`)
      .then((response) => {
        if (response.data.status === "200") {
          setMyVideos(response.data.data._embedded.boardResponseList);
          if (
            response.data.data._embedded.boardResponseList[0].user_id == userId
          ) {
            setAuth(true);
          }
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
          <VideoList videoItems={myVideos} auth={auth} display="list-h" />
        </div>
      </div>

      <div className="right-sidebar-box">
        <ProfileDetail userInfo={userInfo} />
      </div>
    </div>
  );
};

export default Profile;
