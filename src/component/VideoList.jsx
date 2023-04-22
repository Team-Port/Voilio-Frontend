import React from 'react';
import './videoList.css'
import VideoItem from './VideoItem';

const VideoList = ({ videoItems, display, handleSelectVideo, selectedWatch})  => {
    return (
        <ul className='videoList' >
            {   
                // videoItem이 불러와지면 화면에 뿌린다.
                videoItems && videoItems.map(videoItem => (
                    <VideoItem 
                        videoItem={videoItem}
                        key={videoItem.id} 
                        display = {display}
                        handleSelectVideo={handleSelectVideo}
                        selectedWatch={selectedWatch}  />
                ))
            }
        </ul>
    );
};

export default VideoList;