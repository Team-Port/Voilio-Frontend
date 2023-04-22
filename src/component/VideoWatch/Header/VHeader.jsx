import React from 'react';
import './vHeader.css'

const VHeader = ({videoItem}) => {
    if (!videoItem) {
        return <div>Loading...</div>;
    }

    return (
        <div className="videoHeader">
            <div className="leftVideoInfo">
                <span className="Title">
                    {videoItem.title}
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

export default VHeader;