import React from 'react';
import './Video.css';

const Video = ({videoItem}) => {
    return (
        <div className='video-container'>
            <div className='playVideoBox'>
                <iframe className="videoframe" type="text/html" title="비디오플레이어"
                src={videoItem.video_url}></iframe>
            </div>
            <div className='txtContainer'>
                <p>{videoItem.content}</p>
            </div>            
        </div>
    );
};

export default Video;