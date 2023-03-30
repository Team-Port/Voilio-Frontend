import React from 'react';
import './Comment.css'

const VideoWatch_Comment = () => {
    return (
        <div className="commentBox">
            <span>댓글</span>
            <div className="commentInput">
                <span className="user">user</span>
                <span className="\-">댓글 달기</span>
            </div>
            <div className="Frame-9">
                <div className="userImg"></div>
                <span className="user">user</span>
                <span className="\-">댓글이에요하핳</span>
                <div className="Vector"></div>
            </div>
        </div>
    );
};

export default VideoWatch_Comment;