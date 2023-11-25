import React, { useState, useEffect } from "react";
import Myitem from "./Myitem";
import axios from "axios";
import { HOST_URL } from "../../lib/HostUrl";
import { Link } from "react-router-dom";

const MyList = ({ division, filter }) => {
  const [imageUrl, setimageUrl] = useState(null);
  const [items, setItems] = useState([]);
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
        .get(`${HOST_URL}/api/v1/boards/${userId}/result`, {
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
            console.log("게시글을 정상적으로 불러왔습니다.");
          }
        })
        .catch((error) => {
          console.log("게시글을 불러오는데 실패했습니다.", error);
        });
    }
  }, [division, filter, userId]);

  return (
    <div className="w-full h-full">
      <div className="grid grid-cols-3 gap-4 xl:grid-cols-4">
        {items.map((item) => (
          <Link
            to={`/new-portal/boards/${item.id}`}
            key={item.id}
            className="z-10"
          >
            <Myitem item={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MyList;
