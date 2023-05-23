import React from "react";
import "./css/profileDetail.css";

const ProfileDetail = ({ userInfo }) => {
  return (
    <div className="infoMenu-box">
      <div className="subscribe-box-profile">
        <img
          className="tmpProfile-img"
          src={process.env.PUBLIC_URL + "/asset/tmpProfile.png"}
        />
        <p> {userInfo.nickname} </p>
        <p> {userInfo.email} </p>
      </div>
    </div>
  );
};

export default ProfileDetail;
