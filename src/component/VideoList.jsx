import React from 'react';
import './videoList.css'
import VideoItem from './VideoItem';

const VideoList = () => {
    return (
        <ul className='videoList'>
            <VideoItem/>
        </ul>
    );
};

export default VideoList;