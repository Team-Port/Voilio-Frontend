import React, { useState } from "react";
import "../../../src/styles/tailwind.css";
import Category from "./Category";
import { Button } from "@mui/material";

const Myitem = ({
  title,
  summary,
  category1,
  category2,
  createAt,
  thumbnailUrl,
  view,
  hide,
  handleHidePost,
  boardId,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const handleIconClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleHidePostClick = () => {
    setIsHidden(true);
    setShowDropdown(false); // 게시글 숨김을 선택하면 드롭다운을 닫습니다.

    handleHidePost(boardId);
  };

  return (
    <div>
      <div className="flex flex-col w-full h-full px-3 bg-white bg-opacity-75 rounded-[10px] gap-[10px]">
        <div className="flex justify-between items-center px-[10px] mt-[10px]">
          <div className="flex justify-center">
            <Category category={category1} />
            <Category category={category2} />
          </div>
          <div className="flex justify-between items-center gap-[10px]">
            <div className="flex justify-center text-center text-neutral-400 text-[15px] font-normal">
              {createAt}
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
        <div className="flex justify-between items-center">
          <div className="flex pl-[13px] pb-[13px]">
            <div className="flex flex-col justify-center">
              <div className="text-black text-[20px] font-semibold line-clamp-1">
                {title || "Loading..."}
              </div>
              <div
                className="text-neutral-700 line-clamp-1 text-[17px] font-normal "
                dangerouslySetInnerHTML={{ __html: summary }}
              />
            </div>
          </div>
          {/* <img
          className="flex items-center w-[30px] h-[30px] mr-[5px] mb-[10px]"
          src="/asset/Icon_kebab.svg"
          alt=""
          // onClick={handleIconClick}
          onClick={
            // setShowDropdown(!showDropdown);
            handleIconClick
          }
        /> */}
          <button
            className="relative flex items-center w-[30px] h-[30px] mr-[5px] mb-[10px]"
            onClick={handleIconClick}
          >
            <img src="/asset/Icon_kebab.svg" alt="" />
          </button>
        </div>
        {showDropdown && (
          <div className="absolute ml-[300px] mt-[350px] border-[2px] flex justify-center w-[100px] text-center z-10 origin-top-right rounded-md bg-gray-100 shadow-lg focus:outline-none">
            <div className="w-[100px] h-[40px] overflow-y-auto flex flex-col gap-[5px] text-gray-700 text-base text-center">
              <button
                // onClick={() => handleHidePostClick(boardId)}
                onClick={handleHidePostClick}
                className="w-full py-[8px] hover:bg-gray-300"
              >
                {/* {hide} */}
                {/* {handleHidePost} */}
                게시글 숨김
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Myitem;
