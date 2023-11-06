import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./styles/globalStyles.css";

import Header from "./component/ new-portal/Header";
import Sidebar from "./component/ new-portal/Sidebar";

import Landing from "./page/new-portal/Landing";
import Home from "./page/new-portal/Home";
import Login from "./page/new-portal/Login";
import Signin from "./page/new-portal/Signin";
import UploadVideo from "./page/new-portal/UploadVideo";
import UploadPost from "./page/new-portal/UploadPost";
import Detail from "./page/new-portal/Detail";

const NewApp = () => {
  return (
    <BrowserRouter>
      {window.location.pathname !== "/new-portal/login" &&
        window.location.pathname !== "/new-portal/signin" &&
        window.location.pathname !== "/new-portal/landing" && (
          <>
            <Header />
            <Sidebar />
            <img
              className="fixed bottom-0 z-0 w-full m-0"
              src="/asset/bg-gradation.svg"
            />
            <img
              className="fixed m-0 right-0 bottom-0 h-[60%] z-0"
              src="/asset/bg-word.svg"
            />
          </>
        )}
      <Routes>
        <Route path="/new-portal/landing" element={<Landing />} />
        <Route path="/new-portal" element={<Home />} />
        <Route path="/new-portal/:category" element={<Home />} />
        <Route path="/new-portal/login" element={<Login />} />
        <Route path="/new-portal/signin" element={<Signin />} />
        <Route path="/new-portal/upload-video" element={<UploadVideo />} />
        <Route path="/new-portal/upload-post" element={<UploadPost />} />
        <Route path="/new-portal/boards/:boardId" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default NewApp;
