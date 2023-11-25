import React, { useState } from "react";

const Filter = ({ onFilterChange }) => {
  const [activeFilter, setActiveFilter] = useState("전체");

  const handleFilterClick = (filter) => {
    // setActiveFilter((prevFilter) => (prevFilter === filter ? null : filter));
    // onFilterChange && onFilterChange(filter);

    setActiveFilter(filter);
    onFilterChange(filter);
  };

  return (
    <div className="w-full flex flex-col gap-[15px] pl-4 bg-[#F5F5F7] pt-[25px]">
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
