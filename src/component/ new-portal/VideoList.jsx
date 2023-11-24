import React, { useState, useEffect } from "react";
import VideoItem from "./VideoItem";
import axios from "axios";
import { HOST_URL } from "../../lib/HostUrl";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import ko from "date-fns/locale/ko"; // 로케일 파일 불러오기
import { useNavigate } from "react-router-dom";

const VideoList = ({ division, filter }) => {
  // const [imageUrl, setimageUrl] = useState(null);
  const [data, setData] = useState(null);
  const [items, setItems] = useState([]);
  const [createAt, setCreateAt] = useState(null);
  // const [division, setDivision] = useState(null);
  const [videoItems, setVideoItems] = useState([]);
  const navigate = useNavigate();

  const onClickCategory = (category) => {
    const jwtToken = sessionStorage.getItem("jwtAuthToken");
    if (jwtToken) {
      axios
        .get(`${HOST_URL}/api/v1/boards/lists/category/${category}`, {
          headers: { Authorization: `Bearer ${jwtToken}` },
        })
        .then((response) => {
          if (response.status === 200) {
            console.log(response.data);
            navigate("/category/${category}");
          }
        })
        .catch((error) => {
          console.log("실패했습니다.");
          console.log(error);
        });
    }
  };

  useEffect(() => {
    const jwtToken = sessionStorage.getItem("jwtAuthToken");
    // console.log(division);
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
        .get(apiUrl, {
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

            console.log("필터를 정상적으로 불러왔습니다.");
            // setItems(response.data.data.content);
            console.log("게시글을 정상적으로 불러왔습니다.");
            // console.log(division);
          }
        })
        .catch((error) => {
          console.log("게시글을 불러오는데 실패했습니다.");
        });
    }
  }, [division, filter]);

  return (
    <div className="w-full h-full">
      <div className="grid grid-cols-3 grid-rows-3 gap-5 px-[25px]">
        {items.map((item) => (
          // <Link to={`/new-portal/boards/${item.id}`}>
          <Link key={item.id} to={`/new-portal/boards/${item.id}`}>
            <div
              // key={item.id}
              className="bg-white bg-opacity-75 rounded-[10px] gap-[10px]"
              onClick={() => onClickCategory(item.category1)}
            >
              <VideoItem
                title={item.title}
                summary={item.summary}
                category1={item.category1}
                category2={item.category2}
                createAt={formatDistanceToNow(new Date(item.createAt), {
                  locale: ko,
                  addSuffix: true,
                })}
                thumbnailUrl={item.thumbnailUrl}
                view={item.view}
                user_id={item.id}
                division={item.division}
                user={item.user}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VideoList;
