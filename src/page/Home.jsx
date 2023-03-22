import React from 'react';
import Sidebar from '../component/Sidebar';
import InfoList from '../component/InfoList';
import VideoList from '../component/VideoList';

const Home = () => {
    return (
        <div className='home-wrap'>
            <div className='left-sidebar-box'>
                <Sidebar/>
            </div>
            <div className='video-list'>
                <VideoList/>
            </div>
            <div className='right-sidebar-box'>
                <InfoList/>
            </div>
        </div>
    );
};

export default Home;