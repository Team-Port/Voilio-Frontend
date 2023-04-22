import React from 'react';
import './vHeader.css';
import * as common from '../../../lib/common';


const VHeader = ({videoItem}) => {
    if (!videoItem) {
        return <div>Loading...</div>;
    }

    return (
        <div className="videoHeader-container">
            <div className="videoHeader-title">
                <h2>{videoItem.title}</h2>
            </div>
            <div className='videoHeader-info'>
                <div className='category-box'>
                    <p>{videoItem.category1}</p>
                    <p>{videoItem.category2}</p>
                </div>
                <div className="createAt">
                    <p>{common.publishedDate(videoItem.created_at)}</p>
                </div>
            </div>
        </div>
    );
};

export default VHeader;