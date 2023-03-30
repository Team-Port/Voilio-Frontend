import React from 'react';
import './WatchHeader.css'

const WatchHeader = () => {
    return (
        <div class="videoHeader">
            <div class="leftVideoInfo">
                <span class="Title">
                    Title
                </span>
                <span class="category">
                    category
                </span>
            </div>
            <div class="rightHeaderInfo">
                <span class="createAt">
                    createAt
                </span>
            </div>
        </div>
    );
};

export default WatchHeader;