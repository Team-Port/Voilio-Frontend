import React from 'react';
import './css/profile.css'
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../component/Sidebar';
import axios from "axios";
import { useState } from "react";
import { BiShow, BiHide} from 'react-icons/bi'
import jwt_decode from "jwt-decode";



const Login = ({ loggedIn, setLoggedIn }) => {
    const [emailValue, setEmailValue] = useState("");
    const [pwdValue, setPwdValue] = useState("");
    const [message, setMessage] = useState("");
    const [showPswd, setShowPswd] = useState(false);

    const navigate = useNavigate();

    const onLogin = () => {
        axios
          .post("http://localhost:8080/api/v1/auth/login", {
            email : emailValue,
            password : pwdValue
          })
          .then((response) => {
            localStorage.setItem("jwtAuthToken", response.data.data.accessToken);
            const decodedToken = jwt_decode(response.data.data.accessToken);
            console.log(decodedToken)
            const expirationTime = decodedToken.exp * 1000; // 토큰 만료 시간(ms)
            console.log(expirationTime)
            if (expirationTime < Date.now()) {
              localStorage.removeItem("jwtAuthToken"); // 만료된 토큰 삭제
            } else {
              setLoggedIn(true); // 로그인 상태 변경
            }
            console.log(response);
            alert("또 만나네요! 반가워요✨");
            if (response.status === 200) {
              return navigate("/");
            }
          })
          .catch((err) => {
            setMessage(err.response.message);
            alert("이메일과 비밀번호가 일치하지 않습니다.");
            console.log(err);
          });
      };
      


    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

    const toggleShowPswd =()=>{
        setShowPswd(!showPswd);
    }

    return (
        <div className='profile-wrap'>
            <div className='left-sidebar-box'>
                <Sidebar/>
            </div>
            <div className='login-container'>
                <div className='welcome-box'>
                    <h2>
                        Welcome Voilio ✨
                    </h2>
                    <p>
                        ☝🏻 Voilio는 <span>영상 기반 포트폴리오 공유 웹사이트</span>예요 <br/>
                        ✌🏻 로그인을 하면 다양한 영상을 공유해서 나를 알릴 수 있어요 🔥 <br/>
                        🤟🏻 다양한 분야 사람들과, 채용 담당자들과 DM을 해보세요 ⭐️
                    </p>
                </div>
                <form onClick={onSubmitHandler} >
                    <div className='input-box'>
                        <div className='input-box'>
                            <div><label htmlFor='userID'>ID</label></div>
                            <div>
                                <input type="text" id="userID" 
                                    placeholder="아이디(이메일)을 입력해주세요"
                                    onChange={(e) => {
                                        setEmailValue(e.target.value); }}>
                                </input>
                            </div>
                        </div>
                        <div className='input-box'>
                            <div className='pwd-box'>
                                <label htmlFor='userPWD'>Password</label>
                                <div className="absolute top-[16px] right-[20px] sm:right-[30px]">
                                    {showPswd ? (
                                    <BiShow onClick={toggleShowPswd} />
                                    ) : (
                                    <BiHide onClick={toggleShowPswd} />
                                    )}
                                </div>  
                            </div>
                            <div>
                                <input type={showPswd ? "text" : "password"} id="userPWD" 
                                    placeholder="비밀번호를 입력해주세요"
                                    onChange={(e) => {
                                        setPwdValue(e.target.value); }}>
                                </input>
                            </div>
                        </div>
                    </div>
                    <div className='profile-btn-box'>
                        <input className='login-btn' type="submit" value="login"
                                onClick={onLogin}>
                        </input>
                        <Link to={'/join'}>
                            <input className='join-btn' type="button" value="join"></input>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;