import React, { useState } from 'react';
import './commentList.css'
import CommentItem from './CommentItem';

const CommentList = ({ comments, watchId, userId }) => {
    console.log(comments)
    return (
        <div className="commentBox">
            { comments && Object.values(comments).map(comment=> (
                <CommentItem 
                    comment={comment}
                    key={comments.commentId}
                    userId={userId} />
                )) 
            } 
        </div>
    );
};

export default CommentList;