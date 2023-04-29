import React from 'react';
import './commentItem.css';
import * as common from './../../../lib/common'

const CommentItem = ({comment, userId}) => {
    console.log(comment)
    return (
        <div className="comments-container">
            <div className='comments-userBox'>
                <span className="user">
                    <img src={process.env.PUBLIC_URL + '/asset/tmpProfile.png'}></img>
                    <p className='nickname'>{comment.nickname}</p>
                </span>
                <p className='pubishedComment'>{common.publishedDate(comment.localDateTime)}</p>
            </div>
            <div className="comments-context"> 
                {comment.content}
            </div>
        </div>
    );
};

export default CommentItem;