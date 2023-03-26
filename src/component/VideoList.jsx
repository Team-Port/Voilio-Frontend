import React from 'react';
import './videoList.css'
import VideoItem from './VideoItem';

const VideoList = ({display}) => {
    return (
        <ul className='videoList' >
            <VideoItem 
                display={display}/>
        </ul>
    );
};

export default VideoList;