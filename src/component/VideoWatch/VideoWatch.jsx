import React, { useState, useEffect, useCallback } from 'react';
import './VideoWatch.css';
import VHeader from './Header/VHeader';
import Video from './Video/Video';
import CommentList from './Comment/CommentList';
import axios from "axios";

const VideoWatch = ({ selectedWatch }) => {
  const [videoItem, setVideoItem] = useState({});
  const [comments, setComments] = useState({});
  const [watchId, setWatchId] = useState(selectedWatch);

  const oneVideoData = useCallback(() => {
    axios
      .get(`http://localhost:8080/api/v1/boards/${watchId}`)
      .then((response) => {
        setVideoItem(response.data.data);
        sessionStorage.setItem(watchId, JSON.stringify(response.data.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const commentsData = useCallback(() => {
    axios
      .get(`http://localhost:8080/api/v1/comments/${watchId}/list`)
      .then((response) => {
        if (response.data.status === "304") {
          console.log(response.data.data)
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (selectedWatch !== null) {
      setWatchId(selectedWatch);
    }
  }, [selectedWatch]);

  useEffect(() => {
    if (watchId !== null) {
      oneVideoData();
      commentsData();
    }
  }, [watchId, oneVideoData, commentsData]);

  return (
    <div className='videoWatch'>
      {Object.keys(videoItem).length !== 0 ? (
        <>
          <VHeader videoItem={videoItem} />
          <Video videoItem={videoItem} />
          <CommentList comments={comments} />
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default VideoWatch;
