import React from 'react';
import './VideoWatch.css';
import VHeader from './Header/VHeader';
import Video from './Video/Video';
import Comment from './Comment/Comment';
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

    useEffect(() => {
        const storedVideoItem = sessionStorage.getItem(selectedWatch);
        if (storedVideoItem) {
        setVideoItem(JSON.parse(storedVideoItem));
        } else {
        axios
            .get(`http://localhost:8080/api/v1/boards/${selectedWatch}`)
            .then((response) => {
            setVideoItem(response.data.data);
            sessionStorage.setItem(selectedWatch, JSON.stringify(response.data.data));
            })
            .catch((error) => {
            console.log(error);
            });
        }
    }, [selectedWatch]);


    return (
       <div className='videoWatch'>
             {videoItem ? (
            <>
                <VHeader videoItem={videoItem}/>
                <Video videoItem={videoItem}/>
                <Comment/>
            </>
             ) : (
            <div>Loading...</div>
             )};
        </div>
    );
};

export default VideoWatch;