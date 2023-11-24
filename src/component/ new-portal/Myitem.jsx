import React from "react";
import "../../../src/styles/tailwind.css";
import Category from "./Category";

const Myitem = ({
  title,
  summary,
  category1,
  category2,
  createAt,
  thumbnailUrl,
  view,
}) => {
  return (
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
      <div className="flex items-center pl-[20px] pb-[10px]">
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
    </div>
  );
};

export default Myitem;
