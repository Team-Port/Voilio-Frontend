import React from 'react';
import './css/profileDetail.css'

const ProfileDetail = ({userInfo}) => {
    return (
        <div className='infoMenu-box'>
            {/* <div className='subscribe-title'>
                <img className='ss-titleImg' src={process.env.PUBLIC_URL + '/asset/pinkHeart1.png'} />
                <h3>People you like</h3>
            </div> */}
            <div className='subscribe-box-profile'>
                <img className='tmpProfile-img' src={process.env.PUBLIC_URL + '/asset/tmpProfile.png'} />
                <p> {userInfo.nickname} </p>
                <p> {userInfo.email} </p>
            </div>
        </div>
    );
};

export default ProfileDetail;