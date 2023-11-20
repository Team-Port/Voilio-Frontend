import React, { useState, useEffect } from "react";
import Myitem from "./Myitem";
import axios from "axios";
import { HOST_URL } from "../../lib/HostUrl";
import { Link } from "react-router-dom";

const Followinglist = ({ division, filter }) => {
  const [imageUrl, setimageUrl] = useState(null);
  const [data, setData] = useState(null);
  const [items, setItems] = useState([]);
  const [createAt, setCreateAt] = useState(null);
  const [userId, setUserId] = useState("2");
  const [videoItems, setVideoItems] = useState([]);

  useEffect(() => {
    const jwtToken = sessionStorage.getItem("jwtAuthToken");
    let apiUrl = `${HOST_URL}/api/v1/boards/lists`;

    if (division === "전체") {
      // 전체 클릭 시 division을 비워둠
      apiUrl += "?division=";
    } else if (division === "동영상") {
      apiUrl += "?division=VIDEO";
    } else if (division === "게시글") {
      apiUrl += "?division=NORMAL";
    }

    if (jwtToken) {
      axios
        .get(`${HOST_URL}/api/v1/Follows/list/board`, {
          headers: { Authorization: `Bearer ${jwtToken}` },
        })
        .then((response) => {
          if (response.status === 200) {
            let filteredItems = response.data.data.content;

            if (filter === "동영상") {
              filteredItems = filteredItems.filter(
                (item) => item.division === "VIDEO"
              );
            } else if (filter === "게시글") {
              filteredItems = filteredItems.filter(
                (item) => item.division === "NORMAL"
              );
            }

            setItems(filteredItems);
            setVideoItems(filteredItems);
            // setItems(response.data.data.content);
            const createAt = new Date(response.data.data.createAt);
            const month = createAt.getMonth() + 1; // getMonth()는 0부터 시작하므로 1을 더해줍니다.
            const day = createAt.getDate();
            setCreateAt(`${month}월 ${day}일`);
            console.log("게시글을 정상적으로 불러왔습니다.");
            console.log(response.data.data);
          }
        })
        .catch((error) => {
          console.log("게시글을 불러오는데 실패했습니다.");
          console.log(error);
        });
    }
  }, [division, filter, userId]);

  return (
    <div className="w-full h-full">
      <div className="grid grid-cols-3 grid-rows-3 gap-4 pt-[170px] pl-[20px] pr-[70px]">
        {items &&
          items.map((item) => (
            <div
              key={item.id}
              className="bg-white bg-opacity-75 rounded-[10px] gap-[10px]"
            >
              <Myitem
                title={item.title}
                summary={item.summary}
                category1={item.category1}
                category2={item.category2}
                createAt={item.createAt}
                imageUrl={imageUrl}
                thumbnailUrl={item.thumbnailUrl}
                view={item.view}
                user_id={item.id}
                division={item.division}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Followinglist;
