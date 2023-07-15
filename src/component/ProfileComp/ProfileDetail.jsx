import React from "react";
import "./css/profileDetail.css";
import { Button } from "@mui/material";
import axios from "axios";
import { HOST_URL } from "../../lib/HostUrl";

const ProfileDetail = ({ userInfo }) => {
  const onClickSubscribe = async () => {
    await axios
      .post(`${HOST_URL}/api/v1/subscribes/`, {
        nickName: sessionStorage.getItem("nickname"),
        subscribe_id: userInfo.id,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="infoMenu-box">
      <div className="subscribe-box-profile">
        <img
          className="tmpProfile-img"
          src={process.env.PUBLIC_URL + "/asset/tmpProfile.png"}
        />
        <p> {userInfo.nickname} </p>
        <p> {userInfo.email} </p>
        <Button variant="contained" onClick={onClickSubscribe}>
          구독
        </Button>
      </div>
    </div>
  );
};

export default ProfileDetail;