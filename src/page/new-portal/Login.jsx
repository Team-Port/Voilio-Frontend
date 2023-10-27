import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

import jwt_decode from "jwt-decode";
import { HOST_URL } from "../../lib/HostUrl";

import AuthInput from "../../component/ new-portal/AuthInput";
import ServiceIntro from "../../component/ new-portal/ServiceIntro";

const Login = () => {
  const [emailValue, setEmailValue] = useState("");
  const [pwdValue, setPwdValue] = useState("");

  const [showPwd, setShowPwd] = useState(false);

  const navigate = useNavigate();

  const loginAxios = () => {
    axios
      .post(`${HOST_URL}/api/v1/auth/login`, {
        email: emailValue,
        password: pwdValue,
      })
      .then((response) => {
        console.log(response);
        alert("반가워요!");
        if (response.status === 200) {
          sessionStorage.setItem(
            "jwtAuthToken",
            response.data.data.replace("Bearer ", "")
          );
          const decodedToken = jwt_decode(
            response.data.data.replace("Bearer ", "")
          );
          const expirationTime = decodedToken.exp * 1000; // 토큰 만료 시간(ms)

          if (expirationTime < Date.now()) {
            sessionStorage.removeItem("jwtAuthToken"); // 만료된 토큰 삭제
          }

          getUser(decodedToken.sub);
          return navigate("/new-portal");
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.response && error.response.status === 401) {
          alert("E-mail 또는 비밀번호를 확인해 주세요.");
        }
      });
  };

  const getUser = (userId) => {
    axios
      .get(`${HOST_URL}/api/v1/users/${userId}`)
      .then((response) => {
        sessionStorage.setItem("nickname", response.data.data.nickname);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="relative flex bg-[#F8FAFC] flex-row">
      <img
        className="absolute flex-shrink top-[-30px] left-[-3px] w-[18%]"
        src="/asset/new-logo.svg"
        alt="new-logo"
      />
      <div className="h-[100vh] px-[12%] w-1/2 items-center justify-center flex">
        <div className="flex flex-col w-full">
          <ServiceIntro />
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-[16px] mb-[32px]">
              <AuthInput
                formTitle="E-mail"
                placeholder="이메일을 입력해 주세요."
                setValue={setEmailValue}
              />
              <AuthInput
                formTitle="Password"
                placeholder="비밀번호를 입력해 주세요."
                icon="/asset/Icon_eyeOff.svg"
                anotherIcon="/asset/Icon_eyeOn.svg"
                setValue={setPwdValue}
                event={showPwd}
                setEvent={setShowPwd}
              />
            </div>
            <button
              className="flex w-full justify-center px-[24px] py-[16px] mb-[29px] bg-[#FACAD5] rounded-[4px] text-white font-bold"
              onClick={loginAxios}
            >
              Login
            </button>
          </form>
          <div className="flex flex-row gap-[5px]">
            <span className="text-[#475569]">회원이 아니신가요?</span>
            <Link to="/new-portal/signin" className="text-[#FF6A8C] font-bold">
              Join
            </Link>
          </div>
        </div>
      </div>
      <img
        className="m-[0px] h-[100vh] w-1/2 object-cover"
        src="/asset/login-bg.svg"
        alt="login-bg"
      />
    </div>
  );
};

export default Login;
