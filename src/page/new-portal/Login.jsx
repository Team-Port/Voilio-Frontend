import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useLogin } from "../../modules/apis/auth";

import AuthInput from "../../component/ new-portal/AuthInput";
import ServiceIntro from "../../component/ new-portal/ServiceIntro";
import { removeJwtToken } from "../../modules/Auth";

const Login = () => {
  const [emailValue, setEmailValue] = useState("");
  const [pwdValue, setPwdValue] = useState("");

  const [showId, setShowId] = useState(true);
  const [showPwd, setShowPwd] = useState(false);

  const { mutate: onLogin } = useLogin();

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
                event={showId}
                setEvent={setShowId}
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
              onClick={() => {
                removeJwtToken();
                onLogin({
                  email: emailValue,
                  password: pwdValue,
                });
              }}
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
