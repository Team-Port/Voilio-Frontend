import React from "react";
import "../../../src/styles/tailwind.css";
import Category from "../../component/ new-portal/Category";
import { useNavigate } from "react-router-dom";

const VideoItem = ({
  title,
  // summary,
  category1,
  category2,
  createAt,
  // imageUrl,
  division,
  thumbnailUrl,
  view,
  userSimpleDto,
}) => {
  const createDate = new Date(createAt);
  const month = createDate.getMonth() + 1; // getMonth()는 0부터 시작하므로 1을 더해줍니다.
  const day = createDate.getDate();
  const { nickname, imageUrl } = userSimpleDto;

  const navigate = useNavigate();

  return (
    <div className="flex w-full h-full px-3 hover:cursor-pointer">
      <div className="w-full h-full ">
        <div className="flex flex-col bg-white bg-opacity-75 rounded-[10px] gap-[10px]">
          <div className="flex justify-between items-center px-[10px] mt-[10px]">
            <div className="flex justify-center">
              <Category category={category1} />
              <Category category={category2} />
            </div>
            <div className="flex justify-between items-center gap-[10px]">
              <div className="flex justify-center text-center text-neutral-400 text-[15px] font-normal">
                {/* {createAt || "Loading..."} */}
                {`${month}월 ${day}일`}
              </div>
              <div className="flex justify-center text-center text-neutral-400 text-[15px] font-normal">
                <img
                  className="w-[16px] h-[16px] justify-center m-1"
                  src="/asset/icon_eye.svg"
                  alt="eyeicon"
                />
                {view}
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              className="mx-[40px] rounded-[10px] h-full w-[95%]"
              src={thumbnailUrl}
              alt="thumbnail"
            />
          </div>
          <div className="flex items-center pl-[10px] pb-[10px]">
            <img
              className="w-[60px] h-[60px] rounded-full m-0 object-cover"
              src={imageUrl}
              alt="profile"
            />
            <div className="flex flex-col ml-[15px] justify-center">
              <div className="text-black text-[20px] font-semibold line-clamp-1">
                {title || "Loading..."}
              </div>
              <div
                className="text-neutral-700 line-clamp-1 text-[17px]
                font-normal"
              >
                {nickname || "Loading..."}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
