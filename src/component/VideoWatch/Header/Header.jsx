import React from 'react';
import './Header.css'

const VideoWatch_Header = ({data}) => {
    return (
        <div className="videoHeader">
            <div className="leftVideoInfo">
                <span className="Title">
                   {data.title}
                </span>
                <span className="categoryText">
                    {data.category1}
                </span>
                <span className="categoryText">
                    {data.category2}
                </span>
            </div>
            <div className="rightHeaderInfo">
                <span className="createAt">
                    {data.created_at}
                </span>
            </div>
        </div>
    );
};

export default VideoWatch_Header;