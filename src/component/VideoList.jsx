import React from 'react';
import './videoList.css'
import VideoItem from './VideoItem';

const VideoList = ({ videoItems, display, handleSelectVideo})  => {
    // console.log(videoItems)
    return (
        <ul className='videoList' >
            {   
                // videoItem이 불러와지면 화면에 뿌린다.
                videoItems && Object.values(videoItems).map(videoItem => (
                    <VideoItem 
                        videoItem={videoItem}
                        key={videoItem.id} 
                        display = {display}
                        handleSelectVideo={handleSelectVideo}  />
                ))
            }
        </ul>
    );
};

export default VideoList;