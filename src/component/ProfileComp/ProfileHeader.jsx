import React, { useCallback, useEffect, useState } from "react";
import "./css/profileHeader.css";
import VideoList from "../VideoList";
import axios from "axios";

const ProfileHeader = ({ nickname }) => {
  return (
    <div className="profileHeader-container">
      <p className="userNick"> {nickname} </p>
    </div>
  );
};

export default ProfileHeader;
