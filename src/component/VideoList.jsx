import React from "react";
import "./videoList.css";
import VideoItem from "./VideoItem";

const VideoList = () => {
  const videoItems = Array.from({ length: 9 }, (_, index) => (
    <VideoItem key={index} /> // 각각의 VideoItem에 key를 부여합니다.
  ));
  return (
    // <div className="">
    //   {/* <ul className="videoList">
    //     {
    //       // videoItem이 불러와지면 화면에 뿌린다.
    //       videoItems &&
    //         Object.values(videoItems).map((videoItem) => (
    //           <VideoItem videoItem={videoItem} key={videoItem.id} />
    //         ))
    //     }
    //   </ul> */}
    //   {videoItems}
    // </div>
    <div className="w-full h-full">
      <div className="grid grid-cols-3 grid-rows-3 gap-4 gap-4 pl-[20px] pr-[40px]">
        {Array(9)
          .fill()
          .map((_, index) => (
            <div key={index} className="bg-white bg-opacity-75 rounded-[10px]">
              <VideoItem />
            </div>
          ))}
      </div>
    </div>
    // <VideoList></VideoList>
  );
};

export default VideoList;
