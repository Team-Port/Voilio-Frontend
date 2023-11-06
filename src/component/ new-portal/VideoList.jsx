import React, { useState, useEffect } from "react";
import VideoItem from "./VideoItem";
import axios from "axios";
import { HOST_URL } from "../../lib/HostUrl";

const VideoList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const jwtToken = sessionStorage.getItem("jwtAuthToken");

    if (jwtToken) {
      axios
        .get(`${HOST_URL}/api/v1/boards/lists`, {
          headers: { Authorization: `Bearer ${jwtToken}` },
        })
        .then((response) => {
          if (response.status === 200) {
            setItems(response.data.data.content);
          }
        })
        .catch((error) => {
          console.log("게시글을 불러오는데 실패했습니다.");
        });
    }
  }, []);

  return (
    <div className="w-full h-full">
      <div className="grid grid-cols-3 grid-rows-3 gap-4 pl-[20px] pr-[55px]">
        {items.map((item) => (
          <VideoItem item={item} key={item.id} />
        ))}
      </div>
    </div>
    // <VideoList></VideoList>
  );
};

export default VideoList;
