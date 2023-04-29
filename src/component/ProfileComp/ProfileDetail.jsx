import React from 'react';
import './css/profileDetail.css'

const ProfileDetail = () => {
    return (
        <div className='infoMenu-box'>
            <div className='subscribe-title'>
                <img className='ss-titleImg' src={process.env.PUBLIC_URL + '/asset/pinkHeart1.png'} />
                <h3>People you like</h3>
            </div>
            <div className='subscribe-box'>
                <div>
                    <img className='subscribeNum' src={process.env.PUBLIC_URL + '/asset/num1.png'} />
                    <img className='ss-channelImg' src={process.env.PUBLIC_URL + '/asset/test_thum.jpeg'} />
                    Techeer</div>
                <div>
                    <img className='subscribeNum' src={process.env.PUBLIC_URL + '/asset/num2.png'} />
                    <img className='ss-channelImg' src={process.env.PUBLIC_URL + '/asset/test_thum.jpeg'} />
                    IT's Your Life</div>
                <div>
                    <img className='subscribeNum' src={process.env.PUBLIC_URL + '/asset/num3.png'} />
                    <img className='ss-channelImg' src={process.env.PUBLIC_URL + '/asset/test_thum.jpeg'} />
                    Techeer Partners</div>
                <div>
                    <img className='subscribeNum' src={process.env.PUBLIC_URL + '/asset/num4.png'} />
                    <img className='ss-channelImg' src={process.env.PUBLIC_URL + '/asset/test_thum.jpeg'} />
                    AbcaBc</div>
            </div>
        </div>
    );
};

export default ProfileDetail;