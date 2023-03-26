import React from 'react';
import { BsChatRightHeart, BsSuitHeart, BsPersonCircle, BsSearch } from 'react-icons/bs'
import { Link } from 'react-router-dom';

import './header.css'


const Header = () => {
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
            <BsSuitHeart className='topIcon' size='1.5rem'></BsSuitHeart>
            <BsChatRightHeart className='topIcon'size='1.5rem'></BsChatRightHeart>
            <Link to={'/login'}>
                <BsPersonCircle className='topIcon'size='1.5rem'></BsPersonCircle>
            </Link>
        </div>
    </div>
    );
};

export default Header;