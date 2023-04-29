import React from 'react';
import './commentList.css'
import jwt_decode from "jwt-decode";
import CommentItem from './CommentItem';

const CommentList = ({ comments }) => {

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
                <div className="commentInput-box">
                    <div>
                        <img src={process.env.PUBLIC_URL + '/asset/tmpProfile.png'}></img>
                        <p className="nowuser"> {userId} </p>
                    </div>
                    <input 
                        type='text'
                        placeholder="댓글 달기"
                        className="commentInput" />

                    <button type='submit'> 전송</button>
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