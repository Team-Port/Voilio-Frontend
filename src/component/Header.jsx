import React from 'react';
import { BsChatRightHeart, BsSuitHeart, BsPersonCircle, BsSearch } from 'react-icons/bs'

import './header.css'


const Header = () => {
    return (
        <div className='header'>
        <div className='logoArea'>
            <img className='headerLogo' src={'public_asset/voilioLogo.png'}></img>
        </div>
        <div className='search-InputArea'>
            <input
                type = 'search'
                placeholder='검색'
                className='searchInput' />
            <div className='searchBtn-box'>
                <BsSearch className='topIcon-search' size='1.5rem' ></BsSearch> 
            </div>
        </div>
        <div className='topMenuArea'>
            <BsSuitHeart className='topIcon' size='2rem'></BsSuitHeart>
            <BsChatRightHeart className='topIcon'size='2rem'></BsChatRightHeart>
            <BsPersonCircle className='topIcon'size='2rem'></BsPersonCircle>
        </div>
    </div>
    );
};

export default Header;