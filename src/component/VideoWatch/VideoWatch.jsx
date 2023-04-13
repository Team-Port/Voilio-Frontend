import React from 'react';
import './VideoWatch.css';
import VideoWatch_Header from './Header/Header';
import VideoWatch_Video from './Video/Video';
import VideoWatch_Comment from './Comment/Comment';

const VideoWatch = ({data}) => {
    return (
        <div className='videoWatch'>
            <VideoWatch_Header data={data}/>
            <VideoWatch_Video data={data}/>
            <VideoWatch_Comment data={data}/>
        </div>
    );
};

export default VideoWatch;