import React from "react";
import "./videoList.css";
import VideoItem from "./VideoItem";

const VideoList = ({ videoItems, auth }) => {
  return (
    <ul className="videoList">
      {
        // videoItem이 불러와지면 화면에 뿌린다.
        videoItems &&
          Object.values(videoItems).map((videoItem) => (
            <VideoItem videoItem={videoItem} key={videoItem.id} auth={auth} />
          ))
      }
    </ul>
  );
};

export default VideoList;
