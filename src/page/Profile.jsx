import React, { useCallback, useEffect, useState } from "react";
import Sidebar from "../component/Sidebar";
import ProfileDetail from "../component/ProfileComp/ProfileDetail";
import ProfileHeader from "../component/ProfileComp/ProfileHeader";
import jwt_decode from "jwt-decode";
import axios from "axios";
import VideoList from "../component/VideoList";
import { HOST_URL } from "../lib/HostUrl";
import { useParams } from "react-router-dom";

const Profile = () => {
  const [myVideos, setMyVideos] = useState({});
  const [userInfo, setUserInfo] = useState({});
  const nickname = useParams().nickname.substring(1);

  const getMyVideo = () => {
    axios
      .get(`${HOST_URL}/api/v1/boards/lists/@${nickname}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("jwtAuthToken")}`,
        },
      })
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
      .get(`${HOST_URL}/api/v1/users/${nickname}`)
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
        <ProfileHeader nickname={nickname} />
        <div className="video-list">
          <VideoList videoItems={myVideos} display="list-h" />
        </div>
      </div>

      <div className="right-sidebar-box">
        <ProfileDetail userInfo={userInfo} />
      </div>
    </div>
  );
};

export default Profile;
