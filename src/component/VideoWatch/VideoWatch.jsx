import React from 'react';
import './VideoWatch.css';
import VHeader from './Header/VHeader';
import Video from './Video/Video';
import VideoWatch_Comment from './Comment/Comment';
import axios from "axios";
import {useEffect, useState} from 'react';

const VideoWatch = ({selectedWatch}) => {
    const [videoItem, setVideoItem] = useState(null);

    // 비디오데이터
    const oneVideoData = () => {
        axios
            .get(`http://localhost:8080/api/v1/boards/${selectedWatch}`)
            .then((response) => {
            setVideoItem(response.data.data);
            console.log(response.data)
        })
            .catch((error) => {
            console.log(error);
        });
    }

    // 비디오는 한 번만 불러질 수 있도록 useEffect사용. useEffect안에서 videoData function을 바로 넣을 순 없다
    useEffect (()=> {
        oneVideoData();
    }, [] )

    return (
       <div className='videoWatch'>
             {videoItem ? (
            <>
                <VHeader videoItem={videoItem}/>
                <Video videoItem={videoItem}/>
                <VideoWatch_Comment/>
            </>
             ) : (
            <div>Loading...</div>
             )};
        </div>
    );
};

export default VideoWatch;