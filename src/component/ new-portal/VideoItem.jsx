import React, { useState, useEffect } from "react";
import "../../../src/styles/tailwind.css";
import axios from "axios";
import { HOST_URL } from "../../lib/HostUrl";

const VideoItem = ({ item }) => {
  const [data, setData] = useState(null);
  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null);
  const [category1, setCategory1] = useState(null);
  const [category2, setCategory2] = useState(null);
  const categoryColors = {
    IT: "#85AED3",
    Design: "#FACAD5",
    Dance: "#EAB191",
    Exercise: "#A9D8B6",
    Language: "#CFB8E1",
    Sales: "#E1DE89",
  };
  const category1Color = categoryColors[item.category1] || "#c7c7c7";
  const category2Color = categoryColors[item.category2] || "#c7c7c7";
  const [createDate, setCreateDate] = useState(null);

  useEffect(() => {
    const jwtToken = sessionStorage.getItem("jwtAuthToken"); // 세션 스토리지에서 토큰 가져오기
    const boardId = item.id;
    if (jwtToken && boardId) {
      axios
        .get(`${HOST_URL}/api/v1/boards/${boardId}`, {
          headers: { Authorization: `Bearer ${jwtToken}` },
        })
        .then((response) => {
          setData(response.data);
          if (response.status === 200) {
            setTitle(response.data.data.title);
            setContent(response.data.data.content);
            setCategory1(response.data.data.category1);
            setCategory2(response.data.data.category2);
            const createAt = new Date(response.data.data.createAt);
            const month = createAt.getMonth() + 1; // getMonth()는 0부터 시작하므로 1을 더해줍니다.
            const day = createAt.getDate();
            setCreateDate(`${month}월 ${day}일`);
            console.log(response.data);
          }
        })
        .catch((error) => {
          console.log("게시글을 불러오는데 실패했습니다.");
        });
    }
  }, [item]);

  return (
    <div className="w-full h-full flex px-3">
      <div className="w-full h-full ">
        <div className="flex flex-col bg-white bg-opacity-75 rounded-[10px] ">
          <div className="flex justify-between items-center px-[23px] my-[10px]">
            <div className="flex">
              <div className="w-[69px] h-[22px] bg-slate-400 rounded-[20px] mr-[3px]">
                <div className="leading-[23px] text-center text-white text-[13px] font-semibold">
                  {category1 || "Loading..."}
                </div>
              </div>
              <div className="w-[69px] h-[22px] bg-slate-400 rounded-[20px]">
                <div className="leading-[23px] text-center text-white text-[13px] font-semibold">
                  {category2 || "Loading..."}
                </div>
              </div>
            </div>
            <div className="flex justify-between gap-[10px]">
              <div className="flex justify-center text-center text-neutral-400 text-[15px] font-normal">
                {createDate || "Loading..."}
              </div>
              <div className="flex justify-center text-center text-neutral-400 text-[15px] font-normal">
                <img
                  className="w-[16px] h-[16px] justify-center m-1"
                  src="/asset/icon_eye.svg"
                  alt="eyeicon"
                />
                조회수
              </div>
            </div>
          </div>
          <div className="flex">
            <img
              className="px-[20px] m-0 rounded-[10px]"
              src="https://voilio.s3.ap-northeast-2.amazonaws.com/thumbnail/test8.png"
              alt="thumbnail"
            />
          </div>
          <div className="flex justify-start items-center px-[20px] py-[10px]">
            <img
              className="w-[60px] h-[60px] rounded-full m-0"
              src="/asset/sample.png"
              alt="profile"
            />
            <div className="flex flex-col ml-[15px]">
              <div className="text-black text-[20px] font-semibol">
                {title || "Loading..."}
              </div>
              <div className="text-neutral-700 text-[17px] font-normal ">
                {content && content.length > 15
                  ? `${content.slice(0, 15)}...`
                  : content || "Loading..."}
                {/* {content || "Loading..."} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
