import React from "react";
import "../../../src/styles/tailwind.css";
import Category from "../../component/ new-portal/Category";

const VideoItem = ({
  title,
  content,
  category1,
  category2,
  createAt,
  imageUrl,
  thumbnailUrl,
}) => {
  const createDate = new Date(createAt);
  const month = createDate.getMonth() + 1; // getMonth()는 0부터 시작하므로 1을 더해줍니다.
  const day = createDate.getDate();

  return (
    <div className="flex w-full h-full px-3">
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
                조회수
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
          <div className="flex items-center pl-[20px] pb-[10px]">
            <img
              className="w-[60px] h-[60px] rounded-full m-0 object-cover"
              src={imageUrl}
              alt="profile"
            />
            <div className="flex flex-col ml-[15px] justify-center">
              <div className="text-black text-[20px] font-semibol truncate overflow-ellipsis max-w-[45%]">
                {title || "Loading..."}
              </div>
              <div className="text-neutral-700 text-[17px] font-normal truncate overflow-ellipsis max-w-[53%]">
                {content || "Loading..."}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
