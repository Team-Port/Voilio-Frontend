import React from 'react';
import './Video.css';

const VideoWatch_Video = ({data}) => {
    return (
        <div className='VideoWatch_Video'>
            <div className="Rectangle-54">
            <iframe width= "900px" height= "500px" src={data.video_url}  border-radius= "20px" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </div>
            
            <div className="videoDes">
                <span>{data.content}</span>
            </div>
        </div>
    );
};

export default VideoWatch_Video;