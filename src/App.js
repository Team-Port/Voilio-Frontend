import React, { useEffect, useState, useCallback } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Login from "./page/Login";
import Join from "./page/Join";
import Profile from "./page/Profile";
import Header from "./component/Header";
import "./App.css";
import Watch from "./page/Watch";
import axios from "axios";
import UploadVideo from "./page/UploadVideo";
import { HOST_URL } from "./lib/HostUrl";
import { useRecoilState } from "recoil";
import { isVideoItems } from "./store/video/isVideoItems";
const defaultVideos =
  JSON.parse(sessionStorage.getItem("defaultVideos")) || null;
const selectWatch = JSON.parse(sessionStorage.getItem("selectWatch")) || null;

function App() {
  const [videoItems, setVideoItems] = useRecoilState(isVideoItems);
  const [loggedIn, setLoggedIn] = useState(false);
  const [selectedWatch, setSelectedWatch] = useState(null);

  const videoData = useCallback(() => {
    axios
      .get(`${HOST_URL}/api/v1/boards/lists`)
      .then((response) => {
        setVideoItems(response.data.data._embedded.boardResponseList);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    videoData();
  }, [videoData]);

  const updateVideoData = () => {
    videoData();
  };

  // const handleSetVideo = (data) => {
  //   setVideoItems(data);
  // };

  useEffect(() => {
    sessionStorage.setItem("defaultVideos", JSON.stringify(defaultVideos));
    sessionStorage.setItem("selectWatch", JSON.stringify(selectWatch));
  }, [selectedWatch]);

  // 다른 페이지에서 로고눌렀을 때 home으로 오는데, 30개 동영상 리스트는 session에서 가져올 수 있도록
  const clickLogo = () => {
    setVideoItems(defaultVideos);
  };

  const handleSelectVideo = (videoId) => {
    setSelectedWatch(videoId);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    // videoItems가 있어야 실행
    videoItems && (
      <div className="App">
        <BrowserRouter>
          <Header
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
            clickLogo={clickLogo}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:category" element={<Home />} />
            <Route path="/search/:keyword" element={<Home />} />
            <Route
              path="/login"
              element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
            />
            <Route path="/join" element={<Join />} />
            <Route
              path="/watch/:id"
              element={
                <Watch
                  handleSelectVideo={handleSelectVideo}
                  selectedWatch={selectedWatch}
                />
              }
            />
            <Route
              path="/profile/:nickname"
              element={
                <Profile
                  loggedIn={loggedIn}
                  setLoggedIn={setLoggedIn}
                  handleSelectVideo={handleSelectVideo}
                  selectedWatch={selectedWatch}
                />
              }
            />

            <Route
              path="/upload"
              element={<UploadVideo updateVideoData={updateVideoData} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    )
  );
}

export default App;
