import React, { useState, useEffect } from "react";
import VideoItem from "./VideoItem";
import axios from "axios";
import { HOST_URL } from "../../lib/HostUrl";

const VideoList = ({ user_id }) => {
  const [imageUrl, setimageUrl] = useState(null);
  const [data, setData] = useState(null);
  const [items, setItems] = useState([]);
  const [createAt, setCreateAt] = useState(null);

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
            const createAt = new Date(response.data.data.createAt);
            const month = createAt.getMonth() + 1; // getMonth()는 0부터 시작하므로 1을 더해줍니다.
            const day = createAt.getDate();
            setCreateAt(`${month}월 ${day}일`);
            console.log("게시글을 정상적으로 불러왔습니다.");
          }
        })
        .catch((error) => {
          console.log("게시글을 불러오는데 실패했습니다.");
        });
    }
  }, []);

  useEffect(() => {
    const jwtToken = sessionStorage.getItem("jwtAuthToken");

    if (jwtToken) {
      axios
        .get(`${HOST_URL}/api/v1/auth/me`, {
          headers: { Authorization: `Bearer ${jwtToken}` },
        })
        .then((response) => {
          setData(response.data);
          if (response.status === 200) {
            setimageUrl(response.data.data.imageUrl);
            console.log("프로필을 정상적으로 불러왔습니다.");
          }
        })
        .catch((error) => {
          console.log("프로필을 불러오는데 실패했습니다.");
        });
    }
  }, []);

  return (
    <div className="w-full h-full">
      <div className="grid grid-cols-3 grid-rows-3 gap-4 pl-[20px] pr-[70px]">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white bg-opacity-75 rounded-[10px] gap-[10px]"
          >
            <VideoItem
              title={item.title}
              content={item.content}
              category1={item.category1}
              category2={item.category2}
              createAt={item.createAt}
              imageUrl={imageUrl}
              thumbnailUrl={item.thumbnailUrl}
              user_id={item.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoList;
