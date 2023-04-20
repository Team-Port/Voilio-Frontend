import React from 'react';
import './Video.css';

const VideoWatch_Video = () => {
    return (
        <div>
            <div className="watch-box"/>
                <div className='playVideoBox'>
                    <iframe className="videoframe" type="text/html" title="비디오플레이어"
                    src="http://localhost:8080/api/v1/boards" />
                </div>
            <div className="videoDes">
                <span>hello</span>
            </div>
        </div>
    );
};

export default VideoWatch_Video;