import React from 'react';
import './VideoWatch.css';
import VHeader from './Header/VHeader';
import Video from './Video/Video';
import VideoWatch_Comment from './Comment/Comment';
import axios from "axios";
import {useEffect, useState} from 'react';

const VideoWatch = ({selectedWatch}) => {
    const [videoItem, setVideoItem] = useState({});

    // 비디오데이터
    const oneVideoData = () => {
        axios
            .get(`http://localhost:8080/api/v1/boards/${selectedWatch}`)
            .then((response) => {
                sessionStorage.setItem("videoItem", JSON.stringify(response.data.data));
                setVideoItem(response.data.data);
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect (()=> {
        const videoItemData = sessionStorage.getItem("videoItem");
        if (videoItemData) {
            setVideoItem(JSON.parse(videoItemData));
        } else {
            oneVideoData();
        }
    }, [selectedWatch, videoItem])
    

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