import React from 'react';
import './css/profile.css'
// import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
// import { login } from '../store/user/userSlice';
import Sidebar from '../component/Sidebar';


const Login = () => {
    const navigator = useNavigate();
    // const dispatch = useDispatch();

    const loginUser = (e) => {
        e.preventDefault();
        // dispatch(login(true));
        navigator('/')      //   함수로 쓸때는 Link를 못쓰니 navigator사용
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
                <form onSubmit={(e)=> {loginUser(e)}} >
                    <div className='input-box'>
                        <div className='input-box'>
                            <div><label htmlFor='userID'>ID</label></div>
                            <div><input type="text" id="userID" placeholder="아이디(이메일)을 입력해주세요"></input></div>
                        </div>
                        <div className='input-box'>
                            <div><label htmlFor='userPWD'>Password</label></div>
                            <div><input type="text" id="userPWD" placeholder="비밀번호를 입력해주세요"></input></div>
                        </div>
                    </div>
                    <div className='profile-btn-box'>
                        <input className='login-btn' type="submit" value="login"></input>
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