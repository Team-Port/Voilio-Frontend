import React from 'react';
import './infoList.css'

const SubscribeList = () => {
    return (
        <div className='infoMenu-box'>
            <div className='subscribe-title'>
                <img className='ss-titleImg' src={'asset/pinkHeart1.png'}/>
                <h3>People you like</h3>
            </div>
            <div className='subscribe-box'>
                <div>
                    <img className = 'subscribeNum' src={'asset/num1.png'}/>
                    <img className='ss-channelImg' src={'asset/test_thum.jpeg'}/>
                    Techeer</div>
                <div>
                    <img className = 'subscribeNum' src={'asset/num2.png'}/>
                    <img className='ss-channelImg' src={'asset/test_thum.jpeg'}/>
                    IT's Your Life</div>
                <div>
                    <img className = 'subscribeNum' src={'asset/num3.png'}/>
                    <img className='ss-channelImg' src={'asset/test_thum.jpeg'}/>
                    Techeer Partners</div>
                <div>
                    <img className = 'subscribeNum' src={'asset/num4.png'}/>
                    <img className='ss-channelImg' src={'asset/test_thum.jpeg'}/>
                    AbcaBc</div>
            </div>
        </div>
    );
};

export default SubscribeList;