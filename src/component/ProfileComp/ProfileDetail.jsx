import React, {useEffect, useState} from "react";
import "./css/profileDetail.css";
import axios from "axios";
import { HOST_URL } from "../../lib/HostUrl";

const ProfileDetail = ({ userInfo }) => {
  const [isSubscribed, setIsSubscribed] = useState(false); 


  const onClickSubscribe = async () => {
    if (isSubscribed) {
      // 이미 팔로우한 상태라면 언팔로우 요청
      await axios
        .post(`${HOST_URL}/api/v1/unsubscribes/`, {
          nickname: sessionStorage.getItem("nickname"),
          subscribeId: userInfo.id,
        })
        .then((res) => {
          console.log(res);
          alert(`${userInfo.nickname}님 팔로우를 취소합니다.`);
          setIsSubscribed(false); // 언팔로우 상태 업데이트
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      // 팔로우하지 않은 상태라면 팔로우 요청
      await axios
        .post(`${HOST_URL}/api/v1/subscribes/`, {
          nickname: sessionStorage.getItem("nickname"),
          subscribeId: userInfo.id,
        })
        .then((res) => {
          console.log(res);
          alert(`${userInfo.nickname}님 팔로우를 시작합니다.`);
          setIsSubscribed(true); // 팔로우 상태 업데이트
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const checkSubscribe = async () => {
    await axios
      .post(`${HOST_URL}/api/v1/subscribes/`, {
        nickname: sessionStorage.getItem("nickname"),
        subscribeId: userInfo.id,
      })
      .then((res) => {
        if (res.data.data === true) {
          setIsSubscribed(true); // 팔로우 상태 업데이트
        } else {
          setIsSubscribed(false); // 팔로우하지 않은 상태 업데이트
        }
      });
  };

  useEffect(() => {
    checkSubscribe();
  }, [userInfo, isSubscribed]); 

  return (
    <div className="infoMenu-box">
      <div className="subscribe-box-profile">
        <img
          className="tmpProfile-img"
          src={process.env.PUBLIC_URL + "/asset/tmpProfile.png"} 
        />
        <p> {userInfo.nickname} </p>
        <p> {userInfo.email} </p>
        <div>
          <input
              className={isSubscribed ? "normal-btn active" : "normal-btn"} 
              type="submit"
              value="팔로우"
              onClick={onClickSubscribe}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetail;
