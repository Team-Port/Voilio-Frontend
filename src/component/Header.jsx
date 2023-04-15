import React from 'react';
import { BsChatRightHeart, BsSuitHeart, BsPersonCircle, BsSearch } from 'react-icons/bs'
import { BiLogInCircle }  from 'react-icons/bi'
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";

import './header.css'


const Header = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('jwtAuthToken');
        if (token) {
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
        }
      }, []);

    return (
        <div className='header'>
        <Link to={'/'}>
            <div className='logoArea'>
                <img className='headerLogo' src={'asset/voilio.png'}></img>
            </div>
        </Link>
        <div className='search-InputArea'>
            <input
                type = 'search'
                placeholder='검색'
                className='searchInput' />
            <div className='searchBtn-box'>
                <BsSearch className='topIcon-search' size='1.2rem' ></BsSearch> 
            </div>
        </div>
        <div className='topMenuArea'>
            <span>
            <BsSuitHeart className='topIcon' size='1.5rem'></BsSuitHeart>
            </span>
            <span>
            <BsChatRightHeart className='topIcon'size='1.5rem'></BsChatRightHeart>
            </span>
            {localStorage.getItem('jwtAuthToken') ? (
                <Link to={'/profile'}>
                    <BsPersonCircle className='topIcon'size='1.5rem'></BsPersonCircle>
                </Link>
            ): (
                <Link to={'/login'}>
                    <BiLogInCircle className='topIcon'size='1.5rem'></BiLogInCircle>
                </Link>
            )}
            
        </div>
    </div>
    );
};

export default Header;

/*
localStorage.getItem('jwtAuthToken')를 사용하여 로그인 여부를 확인하
또한, localStorage.getItem('jwtAuthToken')가 존재하면 프로필 아이콘을, 
그렇지 않으면 로그인 아이콘을 렌더링하도록 변경

이렇게 변경하면 페이지가 새로고침되지 않아도 로그인 상태에 따라 아이콘이 바로 변경
*/