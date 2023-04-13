import React from 'react';
import './Header.css'

const VideoWatch_Header = () => {
    return (
        <div className="videoHeader">
            <div className="leftVideoInfo">
                <span className="Title">
                    Title
                </span>
                <div>
                    <span className="categoryText">
                        category
                    </span>
                </div>
            </div>
            <div className="rightHeaderInfo">
                <span className="createAt">
                    createAt
                </span>
            </div>
        </div>
    );
};

export default VideoWatch_Header;