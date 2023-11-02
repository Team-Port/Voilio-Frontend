import React, { useState, useEffect } from "react";
import "../../../src/styles/tailwind.css";
import axios from "axios";
import { HOST_URL } from "../../lib/HostUrl";
import Category from "../../component/ new-portal/Category";

const VideoItem = ({
  title,
  content,
  category1,
  category2,
  createDate,
  imageUrl,
  thumbnailUrl,
}) => {
  // const [data, setData] = useState(null);
  // const [title, setTitle] = useState(null);
  // const [content, setContent] = useState(null);
  // const [category1, setCategory1] = useState(null);
  // const [category2, setCategory2] = useState(null);
  // const [createDate, setCreateDate] = useState(null);
  // const [imageUrl, setimageUrl] = useState(null);
  // const [thumbnailUrl, setThumbnailUrl] = useState(null);

  // useEffect(() => {
  //   const jwtToken = sessionStorage.getItem("jwtAuthToken"); // 세션 스토리지에서 토큰 가져오기
  //   const boardId = item.id;
  //   if (jwtToken && boardId) {
  //     axios
  //       .get(`${HOST_URL}/api/v1/boards/${boardId}`, {
  //         headers: { Authorization: `Bearer ${jwtToken}` },
  //       })
  //       .then((response) => {
  //         setData(response.data);
  //         if (response.status === 200) {
  //           setTitle(response.data.data.title);
  //           setContent(response.data.data.content);
  //           setCategory1(response.data.data.category1);
  //           setCategory2(response.data.data.category2);
  //           const createAt = new Date(response.data.data.createAt);
  //           const month = createAt.getMonth() + 1; // getMonth()는 0부터 시작하므로 1을 더해줍니다.
  //           const day = createAt.getDate();
  //           setCreateDate(`${month}월 ${day}일`);
  //           setThumbnailUrl(response.data.data.thumbnailUrl);
  //           console.log(response.data);
  //         }
  //       })
  //       .catch((error) => {
  //         console.log("게시글을 불러오는데 실패했습니다.");
  //       });
  //   }
  // }, [item]);
  // useEffect(() => {
  //   const jwtToken = sessionStorage.getItem("jwtAuthToken"); // 세션 스토리지에서 토큰 가져오기
  //   const user_id = item.id;
  //   if (jwtToken && user_id) {
  //     axios
  //       .get(`${HOST_URL}/api/v1/users/${user_id}`, {
  //         headers: { Authorization: `Bearer ${jwtToken}` },
  //       })
  //       .then((response) => {
  //         setData(response.data);
  //         if (response.status === 200) {
  //           setimageUrl(response.data.data.imageUrl);
  //           console.log(response.data);
  //         }
  //       })
  //       .catch((error) => {
  //         console.log("프로필을 불러오는데 실패했습니다.");
  //       });
  //   }
  // }, [item.id]);

  return (
    <div className="w-full h-full flex px-3">
      <div className="w-full h-full ">
        <div className="flex flex-col bg-white bg-opacity-75 rounded-[10px] gap-[10px]">
          <div className="flex justify-between items-center px-[10px] mt-[10px]">
            <div className="flex justify-center">
              <Category category={category1} />
              <Category category={category2} />
            </div>
            <div className="flex justify-between items-center gap-[10px]">
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
          <div className="flex justify-center">
            <img
              className="mx-[40px] rounded-[10px] h-full w-[95%]"
              // src="https://voilio.s3.ap-northeast-2.amazonaws.com/thumbnail/test8.png"
              src={thumbnailUrl}
            />
          </div>
          <div className="flex items-center pl-[20px] pb-[10px]">
            <img
              className="w-[60px] h-[60px] rounded-full m-0 object-cover"
              // src="/asset/sample.png"
              src={imageUrl}
              alt="profile"
            />
            <div className="flex flex-col ml-[15px] justify-center">
              <div className="text-black text-[20px] font-semibol">
                {title && title.length > 15
                  ? `${title.slice(0, 15)}...`
                  : title || "Loading..."}
              </div>
              <div className="text-neutral-700 text-[17px] font-normal ">
                {content && content.length > 20
                  ? `${content.slice(0, 20)}...`
                  : content || "Loading..."}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
