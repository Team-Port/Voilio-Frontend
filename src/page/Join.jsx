import React from 'react';
import './css/profile.css'
import Sidebar from '../component/Sidebar';
import { useNavigate } from 'react-router-dom';

const Join = () => {
    const {emailValue, pwdValue, nicknameValue} = this.state;
    const navigator = useNavigate();

    fetch("http://localhost:8080/api/v1/users/join", {
        method:"POST",
        body: JSON.stringify({
            email : emailValue,
            password : pwdValue,
            nickname : nicknameValue
        })
    })
    .then((response) => response.json())
    .then((result) => {
        result.message === "사용자가 정상적으로 등록되었습니다." ? alert("회원가입에 성공했습니다✨") : alert("회원가입에 실패했습니다 다시 부탁드릴게요😿")
    })

    const joinUser = (e) => {
        e.preventDefault();
        // dispatch(login(true));
        navigator('/login')      //   함수로 쓸때는 Link를 못쓰니 navigator사용
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
                <form onSubmit={(e)=> {joinUser(e)}} >
                    <div>
                        <div className='input-box'>
                            <div><label htmlFor='userPWD'>Name</label></div>
                            <div><input type="text" id="userPWD" placeholder="이름을 입력해주세요"></input></div>
                        </div>
                        <div className='input-box'>
                            <div><label htmlFor='userID'>E-mail</label></div>
                            <div><input type="text" id="userID" placeholder="아이디로 사용할 이메일을 입력해주세요"></input></div>
                        </div>
                        <div className='input-box'>
                            <div><label htmlFor='userPWD'>Password</label></div>
                            <div><input type="text" id="userPWD" placeholder="비밀번호를 입력해주세요"></input></div>
                        </div>
                        <div className='input-box'>
                            <div><label htmlFor='userPWD'>Password Check</label></div>
                            <div><input type="text" id="userPWD" placeholder="비밀번호를 한 번 더 입력해주세요"></input></div>
                        </div>
                        <div className='input-box'>
                            <div><label htmlFor='userPWD'>Nickname</label></div>
                            <div><input type="text" id="userPWD" placeholder="채널이름으로 쓰일 닉네임을 지어주세요!"></input></div>
                        </div>
                    </div>
                    <div className='profile-btn-box'>
                        <input className='login-btn' type="submit" value="join"></input>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Join;