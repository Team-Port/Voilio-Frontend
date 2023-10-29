import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import { HOST_URL } from "../../lib/HostUrl";

import AuthInput from "../../component/ new-portal/AuthInput";
import ServiceIntro from "../../component/ new-portal/ServiceIntro";

const Signin = () => {
  const [emailValue, setEmailValue] = useState("");
  const [pwdValue, setPwdValue] = useState("");
  const [confirmPwdValue, setConfirmPwdValue] = useState("");
  const [nicknameValue, setNicknameValue] = useState("");

  const [showValue, setShowValue] = useState(true);
  const [showPwd, setShowPwd] = useState(false);
  const [showConfirmPwd, setShowConfirmPwd] = useState(false);

  const navigate = useNavigate();

  const signinAxios = () => {
    axios
      .post(`${HOST_URL}/api/v1/auth/signup`, {
        email: emailValue,
        password: pwdValue,
        nickname: nicknameValue,
      })
      .then((response) => {
        console.log(response);
        alert("회원가입이 완료되었습니다.");
        if (response.status === 200) {
          return navigate("/new-portal/login");
        }
      })
      .catch((err) => {
        console.log(err.request.status);
        var errcode = err.request.status;
        if (errcode === 500) {
          alert("이미 사용중인 이메일입니다.");
        }
      });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (pwdValue !== confirmPwdValue) {
      return alert("비밀번호가 일치하지 않습니다.");
    }
  };

  const handleEventClick = () => {
    // random nickname 생성으로 대체될 함수
    alert("hey👋");
  };

  return (
    <div className="relative flex bg-[#F8FAFC] flex-row">
      <img
        className="absolute flex-shrink top-[-30px] left-[-3px] w-[18%]"
        src="/asset/new-logo.svg"
        alt="new-logo.svg"
      />
      <div className="h-[100vh] px-[12%] w-1/2 items-center justify-center flex">
        <div className="flex flex-col w-full">
          <ServiceIntro />
          <form onSubmit={onSubmitHandler}>
            <div className="flex flex-col gap-[16px] mb-[32px]">
              <AuthInput
                formTitle="E-mail"
                placeholder="아이디로 사용할 이메일을 입력해 주세요."
                setValue={setEmailValue}
                event={showValue}
                setEvent={setShowValue}
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
              <AuthInput
                formTitle="Password Check"
                placeholder="비밀번호를 한 번 더 입력해 주세요."
                icon="/asset/Icon_eyeOff.svg"
                anotherIcon="/asset/Icon_eyeOn.svg"
                setValue={setConfirmPwdValue}
                event={showConfirmPwd}
                setEvent={setShowConfirmPwd}
              />
              <AuthInput
                formTitle="Nickname"
                placeholder="채널 이름으로 사용할 닉네임을 입력해 주세요."
                icon="/asset/Icon_random.svg"
                anotherIcon="/asset/Icon_random.svg"
                setValue={setNicknameValue}
                event={showValue}
                setEvent={handleEventClick}
              />
            </div>
            <button
              className="flex justify-center w-full px-[24px] py-[16px] mb-[29px] bg-[#FACAD5] rounded-[4px] text-white font-bold"
              onClick={signinAxios}
            >
              Join
            </button>
          </form>
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

export default Signin;
