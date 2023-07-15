import React, { useEffect, useState } from "react";
import "./css/watch.css";
import Sidebar from "../component/Sidebar";
import InfoList from "../component/InfoList";
import VideoWatch from "../component/VideoWatch/VideoWatch";
import { useParams } from "react-router-dom";
import axios from "axios";
import { HOST_URL } from "../lib/HostUrl";

const Watch = () => {
  const { id } = useParams();

  return (
    <div className="home-wrap">
      <div className="left-sidebar-box">
        <Sidebar />
      </div>
      <div className="watch">
        <VideoWatch watchId={id} />
      </div>
      <div className="right-sidebar-box">
        <InfoList />
      </div>
    </div>
  );
};

export default Watch;
