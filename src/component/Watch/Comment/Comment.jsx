import React from 'react';
import './Comment.css'

const Comment = () => {
    return (
        <div class="commentBox">
            <span>댓글</span>
            <div class="commentInput">
                <span class="user">user</span>
                <span class="\-">댓글 달기</span>
            </div>
            <div class="Frame-9">
                <div class="userImg"></div>
                <span class="user">user</span>
                <span class="\-">댓글이에요하핳</span>
                <div class="Vector"></div>
            </div>
        </div>
    );
};

export default Comment;