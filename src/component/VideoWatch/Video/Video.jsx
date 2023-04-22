import React from 'react';
import './Video.css';

const Video = ({videoItem}) => {
    return (
        <div className='watchBox'>
            <div className='playVideoBox'>
                <iframe className="videoframe" type="text/html" title="비디오플레이어"
                src={videoItem.video_url}></iframe>
            </div>
            <div className='txtContainer'>
                <h2>{videoItem.title}</h2>
                <h3>{videoItem.title}</h3>
                <p className='desc'>{videoItem.content}</p>
            </div>            
        </div>
    );
};

export default Video;