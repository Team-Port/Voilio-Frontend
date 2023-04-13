import React from 'react';
import './VideoWatch.css';
import VideoWatch_Header from './Header/Header';
import VideoWatch_Video from './Video/Video';
import VideoWatch_Comment from './Comment/Comment';

const VideoWatch = () => {
    return (
        <div className='videoWatch'>
            <VideoWatch_Header/>
            <VideoWatch_Video/>
            <VideoWatch_Comment/>
        </div>
    );
};

export default VideoWatch;