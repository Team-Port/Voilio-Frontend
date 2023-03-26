import React from 'react';
import './videoList.css'
import VideoItem from './VideoItem';

const VideoList = ({videoItems, display}) => {
    return (
        <ul className='videoList' >
            {   
                // videoItem이 불러와지면 화면에 뿌린다.
                videoItems && videoItems.map(videoItem => (
                    <VideoItem 
                        videoItem={videoItem}
                        key={VideoItem.id} 
                        display = {display}  />
                ))
            }
        </ul>
    );
};

export default VideoList;