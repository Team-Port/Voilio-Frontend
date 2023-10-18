import React, { useState } from "react";
import "../../src/styles/tailwind.css";

const Sidebar = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory((prevCategory) =>
      prevCategory === category ? null : category
    );
  };

  return (
    <div className="w-[140px] h-[500px] relative">
      <div className="w-[140px] h-[33px] left-0 top-[457px] absolute mt-[10px]">
        <div className="w-[140px] h-[33px] left-0 top-0 absolute text-center text-neutral-700 text-2xl font-['Titillium Web']">
          Following
        </div>
      </div>
      <div className="w-[140px] h-[33px] left-0 top-[397px] absolute">
        <div className="w-[140px] h-[33px] left-0 top-0 absolute text-center text-neutral-700 text-2xl font-['Titillium Web']">
          Library
        </div>
      </div>
      <div className="w-[140px] h-[369.90px] left-0 top-0 absolute">
        <div className="w-[123.68px] h-[32.90px] top-[337px] absolute cursor-pointer">
          <div
            className={`w-[123.68px] h-[32.90px] left-0 top-0 absolute text-center text-zinc-500 text-xl font-['Titillium Web'] ${
              selectedCategory === "Sales" ? "bg-white rounded font-bold" : ""
            }`}
            onClick={() => handleCategoryClick("Sales")}
          >
            Sales
          </div>
        </div>
        <div className="w-[123.68px] h-[32.90px] top-[292px] absolute cursor-pointer">
          <div
            className={`w-[123.68px] h-[32.90px] left-0 top-0 absolute text-center text-zinc-500 text-xl font-['Titillium Web'] ${
              selectedCategory === "Language"
                ? "bg-white rounded font-bold"
                : ""
            }`}
            onClick={() => handleCategoryClick("Language")}
          >
            Language
          </div>
        </div>
        <div className="w-[123.68px] h-[32.90px] top-[247px] absolute cursor-pointer">
          <div
            className={`w-[123.68px] h-[32.90px] left-0 top-0 absolute text-center text-zinc-500 text-xl font-['Titillium Web'] ${
              selectedCategory === "Exercise"
                ? "bg-white rounded font-bold"
                : ""
            }`}
            onClick={() => handleCategoryClick("Exercise")}
          >
            Exercise
          </div>
        </div>
        <div className="w-[123.68px] h-[32.90px] top-[202px] absolute cursor-pointer">
          <div
            className={`w-[123.68px] h-[32.90px] left-0 top-0 absolute text-center text-zinc-500 text-xl font-['Titillium Web'] ${
              selectedCategory === "Dance" ? "bg-white rounded font-bold" : ""
            }`}
            onClick={() => handleCategoryClick("Dance")}
          >
            Dance
          </div>
        </div>
        <div className="w-[123.68px] h-[32.90px] top-[157px] absolute cursor-pointer">
          <div
            className={`w-[123.68px] h-[32.90px] left-0 top-0 absolute text-center text-zinc-500 text-xl font-['Titillium Web'] ${
              selectedCategory === "Design" ? "bg-white rounded font-bold" : ""
            }`}
            onClick={() => handleCategoryClick("Design")}
          >
            Design
          </div>
        </div>
        <div className="w-[123.68px] h-[32.90px] top-[112px] absolute cursor-pointer">
          <div
            className={`w-[123.68px] h-[32.90px] left-0 top-0 absolute text-center text-zinc-500 text-xl font-['Titillium Web'] ${
              selectedCategory === "IT" ? "bg-white rounded font-bold" : ""
            }`}
            onClick={() => handleCategoryClick("IT")}
          >
            IT
          </div>
        </div>
        <div className="w-[123.68px] h-[32.90px] top-[67px] absolute cursor-pointer">
          <div
            className={`w-[123.68px] h-[32.90px] left-0 top-0 absolute text-center text-neutral-500 text-xl font-['Titillium Web'] ${
              selectedCategory === "All" ? "bg-white rounded font-bold" : ""
            }`}
            onClick={() => handleCategoryClick("All")}
          >
            All
          </div>
        </div>
        <div className="w-[140px] h-[33px] left-0 top-0 absolute text-center text-neutral-700 text-2xl font-bold font-['Titillium Web']">
          Category
          <div className="w-[140px] h-[0px] mt-3 border border-neutral-700"></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
