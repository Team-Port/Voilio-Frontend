import React from 'react';
import './commentList.css'
import jwt_decode from "jwt-decode";
import CommentItem from './CommentItem';

const CommentList = ({selectedWatch, comments}) => {
    console.log(comments)
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
                    <div className="user">{userId} </div>
                    <div className="user-commentInput"> 
                        <input type='text'></input> 
                        <button type='submit'> 전송</button>
                    </div>
                </div>
            ) : null }
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