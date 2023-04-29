import React from 'react';
import './commentItem.css';

const CommentItem = ({comment, userId}) => {
    console.log(comment)
    return (
        <div className="comments-container">
            <div className='comments-userBox'>
                <span className="userImg"></span>
                <span className="user">{userId}</span>
            </div>
            <div className="comments-context"> 
                Comments test
            </div>
        </div>
    );
};

export default CommentItem;