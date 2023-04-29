import React, { useState, useEffect, useCallback } from 'react';
import './VideoWatch.css';
import VHeader from './Header/VHeader';
import Video from './Video/Video';
import CommentList from './Comment/CommentList';
import axios from "axios";
import Loading from '../../lib/Loading';
import jwt_decode from "jwt-decode";

const VideoWatch = ({ selectedWatch }) => {
    const [videoItem, setVideoItem] = useState({});
    const [comments, setComments] = useState({});
    
    if(selectedWatch != null){
        sessionStorage.setItem('watchId', selectedWatch)
    }
    const watchId = sessionStorage.getItem('watchId');

    const [content, setContent] = useState('');
    var boardId = selectedWatch;

    const token = localStorage.getItem('jwtAuthToken');
    let userId;
    if (token) {
        try {
        const decodedToken = jwt_decode(token);
        userId = decodedToken.sub;
        } catch (error) {
        console.error('Error decoding token', error);
        }
    }

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
    }, [watchId]);

    const commentsData = useCallback(() => {
        axios
        .get(`http://localhost:8080/api/v1/comments/${watchId}/list`)
        .then((response) => {
            if (response.data.status === "304") {
                setComments(response.data.data.reverse());
            }
        })
        .catch((error) => {
            console.log(error);
        });
    }, [watchId]);

    useEffect(() => {
        if (watchId !== null) {
        oneVideoData();
        commentsData();
        }
    }, [watchId, oneVideoData, commentsData]);

  

    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    const handleSubmit = (e) => {
        // if (!content || content.trim() === '') {
        //     alert("댓글에 값을 입력해주세요")
        // } else {
            e.preventDefault(); // 기본 동작 취소
            axios.post('http://localhost:8080/api/v1/comments', {
                userId,
                boardId,
                content,
            }).then((response) => {
                if (response.data.status === "301") {
                    setContent(''); 
                    commentsData();
                }
            }).catch((error) => {
                console.log(error);
            });
        // }
    };

    console.log(comments)


  return (
    <div className='videoWatch'>
      {Object.keys(videoItem).length !== 0 ? (
        <>
          <VHeader videoItem={videoItem} />
          <Video videoItem={videoItem} />
          <div className="commentBox">
            <h2>Comments</h2>
                {userId ? ( 
                <form onSubmit={handleSubmit}> {/* form 태그 등록 */}
                    <div className="commentInput-box">
                        <div>
                            <img src={process.env.PUBLIC_URL + '/asset/tmpProfile.png'}></img>
                            <p className="nowuser"> {videoItem.nickname} </p>
                        </div>
                        <input 
                            type='text'
                            placeholder="댓글 달기"
                            className="commentInput"
                            value={content} // input 요소에 content 값을 binding
                            onChange={handleContentChange} />

                        <input className='commentSubmit' disabled={!content}  type="submit" value="전송" /> 
                    </div>
                </form>
            ) : null }
            </div>
          <CommentList comments={comments} watchId={watchId} userId={userId} />
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default VideoWatch;
