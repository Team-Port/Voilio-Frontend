import React from "react";
import "./videoItem.css";
import { Link } from "react-router-dom";
import * as common from "./../lib/common";

const VideoItem = ({ videoItem }) => {
  //   const handleSelectItem = () => {
  //     handleSelectVideo(videoItem.id);
  //   };

  return (
    <li className={`videoItem `}>
      <Link to={`/watch/${videoItem.id}`}>
        <div className="item">
          <div className="thumnail">
            <img
              className="thumnail-img"
              src={videoItem.thumbnail_url}
              alt="videoThumnail"
            />
          </div>
          <div className="metaData">
            <div className="channelImg-box">
              <img
                className="channelImg"
                src={videoItem.thumbnail_url}
                alt="channelImg-thum"
              />
            </div>
            <div className="infoText-box">
              <span className="infoText">
                <p className="title">{videoItem.title}</p>
                <span>
                  <p className="category">{videoItem.category1}</p>
                  <p className="category">{videoItem.category2}</p>
                </span>
              </span>
              <span className="infoText">
                <p className="channel">{videoItem.nickname}</p>
                <p className="publishDate">
                  {common.publishedDate(videoItem.created_at)}
                </p>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default VideoItem;
