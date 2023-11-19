import React, { useState, useEffect } from "react";

const Filter = ({ onFilterChange }) => {
  const [activeFilter, setActiveFilter] = useState("전체");

  const handleFilterClick = (filter) => {
    // setActiveFilter((prevFilter) => (prevFilter === filter ? null : filter));
    // onFilterChange && onFilterChange(filter);

    setActiveFilter(filter);
    onFilterChange(filter);
  };

  return (
    <div className="sticky w-full top-[85px] flex flex-col gap-[15px] pl-4 z-20 bg-[#F5F5F7] pt-[25px]">
      <div className="flex justify-start items-center ml-[10px]">
        <button className="flex gap-[55px]">
          <div
            className={`flex justify-center text-black text-2xl ${
              activeFilter === "전체" ? "font-bold" : ""
            }`}
            onClick={() => handleFilterClick("전체")}
          >
            전체
          </div>
          <div
            className={`flex justify-center text-black text-2xl ${
              activeFilter === "동영상" ? "font-bold" : ""
            }`}
            onClick={() => handleFilterClick("동영상")}
          >
            동영상
          </div>
          <div
            className={`flex justify-center text-black text-2xl ${
              activeFilter === "게시글" ? "font-bold" : ""
            }`}
            onClick={() => handleFilterClick("게시글")}
          >
            게시글
          </div>
        </button>
      </div>
      <div className="h-[1px] bg-black" />
    </div>
  );
};

export default Filter;
