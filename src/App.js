import React, { useEffect, useState, useCallback } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Login from "./page/Login";
import Join from "./page/Join";
import Profile from "./page/Profile";
import Watch from "./page/Watch";
import axios from "axios";
import UploadVideo from "./page/UploadVideo";
import { HOST_URL } from "./lib/HostUrl";
import { useRecoilState } from "recoil";
import { isVideoItems } from "./store/video/isVideoItems";
import ChatRoomListPage from "./page/ChatRoomListPage";
import ChatPage from "./page/ChatPage";

import Header from "./component/ new-portal/Header";
import Sidebar from "./component/ new-portal/Sidebar";

const defaultVideos =
  JSON.parse(sessionStorage.getItem("defaultVideos")) || null;
const selectWatch = JSON.parse(sessionStorage.getItem("selectWatch")) || null;

function App() {
  const [videoItems, setVideoItems] = useRecoilState(isVideoItems);

  // const [loggedIn, setLoggedIn] = useState(false);
  // const [selectedWatch, setSelectedWatch] = useState(null);

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
  }, []);

  // 다른 페이지에서 로고눌렀을 때 home으로 오는데, 30개 동영상 리스트는 session에서 가져올 수 있도록
  const clickLogo = () => {
    setVideoItems(defaultVideos);
  };

  return (
    // videoItems가 있어야 실행
    videoItems && (
      <BrowserRouter>
        {window.location.pathname !== "/new-portal/login" &&
          window.location.pathname !== "/new-portal/signin" &&
          window.location.pathname !== "/new-portal/landing" && (
            <>
              <Header />
              <Sidebar />
              <img
                className="fixed bottom-0 z-0 w-full m-0"
                src="../asset/bg-gradation.svg"
              />
              <img
                className="fixed m-0 right-0 bottom-0 h-[60%] z-0"
                src="../asset/bg-word.svg"
              />
            </>
          )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:category" element={<Home />} />
          <Route path="/search/:keyword" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/watch/:id" element={<Watch />} />
          <Route path="/profile/:nickname" element={<Profile />} />
          <Route path="/upload" element={<UploadVideo />} />
          <Route path="/manage/:boardId" element={<UploadVideo />} />
          <Route path="/chatRooms" element={<ChatRoomListPage />} />
          <Route path="/chatRooms/:roomId" element={<ChatPage />} />
        </Routes>
      </BrowserRouter>
    )
  );
}

export default App;
