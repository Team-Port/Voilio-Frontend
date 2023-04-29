import React from 'react';
import './VideoWatch.css';
import VHeader from './Header/VHeader';
import Video from './Video/Video';
import CommentList from './Comment/CommentList';
import axios from "axios";
import {useEffect, useState} from 'react';

const VideoWatch = ({selectedWatch}) => {
    const [videoItem, setVideoItem] = useState({});
    const [comments, setComments] = useState({});

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
    
        axios
            .get(`http://localhost:8080/api/v1/comments/${selectedWatch}/list`)
            .then((response) => {
                if(response.data.status === "304"){
                    setComments(response.data.data)
                    console.log(response.data.data)
                }
            })
            .catch((error) => {
                console.log(error);
            });

    }, [selectedWatch]);


    return (
       <div className='videoWatch'>
             {videoItem ? (
            <>
                <VHeader videoItem={videoItem}/>
                <Video videoItem={videoItem}/>
                <CommentList selectedWatch={selectedWatch} comments={comments}/>
            </>
             ) : (
            <div>Loading...</div>
            )}
        </div>
    );
};

export default VideoWatch;