import React from 'react';
import './css/profile.css'
import Sidebar from '../component/Sidebar';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useState } from "react";

const Join = () => {
    const [emailValue, setEmailValue] = useState("");
    const [pwdValue, setPwdValue] = useState("");
    const [nicknameValue, setNicknameValue] = useState("");
    const [message, setMessage] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();

    const registerAxios = () => {
        axios
            .post("http://localhost:8080/api/v1/users/join", {
                email : emailValue,
                password : pwdValue,
                nickname : nicknameValue
            })
            .then((response) => {
                console.log(response);
                alert("회원가입에 성공했습니다✨")
                if(response.status === 200){
                    return navigate("/login");
                }
            }).catch((err) => {
            setMessage(err.response.message)
            console.log(err)
        });
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        if(pwdValue !== ConfirmPassword){
            return alert('비밀번호가 같지 않습니다. 확인해주세요😿')
        }
    }

    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value);
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
                        ✌🏻 회원이 되면 다양한 영상을 공유해서 나를 알릴 수 있어요 🔥 <br/>
                        🤟🏻 다양한 분야 사람들과, 채용 담당자들과 DM을 해보세요⭐️
                    </p>
                </div>
                <form onSubmit={onSubmitHandler}>
                    <div>
                        <div className='input-box'>
                            <div><label htmlFor='userID'>E-mail</label></div>
                            <div><input type="text" id="userID"
                                        placeholder="아이디로 사용할 이메일을 입력해주세요"
                                        value={emailValue}
                                        onChange={(e) => {
                                            setEmailValue(e.target.value); }}></input></div>
                        </div>
                        <div className='input-box'>
                            <div><label htmlFor='userPWD'>Password</label></div>
                            <div><input type="text" id="userPWD"
                                        placeholder="비밀번호를 입력해주세요"
                                        value={pwdValue}
                                        onChange={(e) => {
                                            setPwdValue(e.target.value); }}></input></div>
                        </div>
                        <div className='input-box'>
                            <div><label htmlFor='userPWD'>Password Check</label></div>
                            <div><input type="text" id="userPWD" 
                                        placeholder="비밀번호를 한 번 더 입력해주세요"
                                        value={ConfirmPassword}
                                        onChange={onConfirmPasswordHandler}></input></div>
                        </div>
                        <div className='input-box'>
                            <div><label htmlFor='userPWD'>Nickname</label></div>
                            <div><input type="text" id="userPWD"
                                        placeholder="채널이름으로 쓰일 닉네임을 지어주세요!"
                                        value={nicknameValue}
                                        onChange={(e) => {
                                            setNicknameValue(e.target.value); }}></input></div>
                        </div>
                    </div>
                    <div className='profile-btn-box'>
                        <input className='login-btn' type="submit" value="join"
                                onClick={registerAxios}></input>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Join;