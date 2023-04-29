import React from 'react';
import './Comment.css'
import jwt_decode from "jwt-decode";

const Comment = () => {

    // get user_id from token in local storage
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

    return (
        <div className="commentBox">
            <h2>Comments</h2>
            {userId ? ( 
                <div className="commentInput">
                    <span className="user">user</span>
                    <span className="\-">댓글 달기</span>
                </div>
            ) : null }
            <div className="Frame-9">
                <div className="userImg"></div>
                <span className="user">user</span>
                <span className="\-">댓글이에요하핳</span>
                <div className="Vector"></div>
            </div>
        </div>
    );
};

export default Comment;