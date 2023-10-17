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
    <div className="w-[182.04px] h-[490px] left-[20px] relative">
      <div className="w-[182.04px] h-[490px] left-0 top-0 absolute">
        <div
          className={`w-[182.04px] h-[33px] left-0 top-[200px] absolute transition-transform ${
            selectedCategory === "Following" ? "translate-y-48" : ""
          }`}
        >
          <div className="w-[182.04px] h-[200px] left-0 top-0 absolute text-center text-neutral-700 text-3xl font-normal font-['Titillium Web']">
            Following
          </div>
        </div>
        <div
          className={`w-[182.04px] h-[33px] left-0 top-[100px] absolute transition-transform ${
            selectedCategory === "Library" ? "translate-y-44" : ""
          }`}
        >
          <div className="w-[182.04px] h-[33px] left-0 top-0 absolute text-center text-neutral-700 text-3xl font-normal font-['Titillium Web']">
            Library
          </div>
        </div>
        <div
          className="w-[182.04px] h-[33px] left-0 top-0 absolute cursor-pointer"
          onClick={() =>
            setSelectedCategory(
              selectedCategory === "Category" ? null : "Category"
            )
          }
        >
          <div
            className={`w-[182.04px] h-[33px] left-0 top-0 absolute text-center text-neutral-700 text-3xl font-bold font-['Titillium Web'] ${
              selectedCategory === "Category" ? "font-bold" : ""
            }`}
          >
            <div className="mt-2 border-b-2 border-neutral-300 ">Category</div>
          </div>
          {selectedCategory === "Category" && (
            <div className="flex flex-col gap-2 absolute top-[33px] left-12 bg-white shadow-lg p-2 rounded">
              <div
                onClick={() => setSelectedCategory("All")}
                className={`cursor-pointer ${
                  selectedCategory === "All" ? "font-bold" : ""
                }`}
              >
                All
              </div>
              <div
                onClick={() => setSelectedCategory("IT")}
                className={`cursor-pointer ${
                  selectedCategory === "IT" ? "font-bold" : ""
                }`}
              >
                IT
              </div>
              <div
                onClick={() => setSelectedCategory("Design")}
                className={`cursor-pointer ${
                  selectedCategory === "Design" ? "font-bold" : ""
                }`}
              >
                Design
              </div>
              <div
                onClick={() => setSelectedCategory("Dance")}
                className={`cursor-pointer ${
                  selectedCategory === "Dance" ? "font-bold" : ""
                }`}
              >
                Dance
              </div>
              <div
                onClick={() => setSelectedCategory("Exercise")}
                className={`cursor-pointer ${
                  selectedCategory === "Exercise" ? "font-bold" : ""
                }`}
              >
                Exercise
              </div>
              <div
                onClick={() => setSelectedCategory("Language")}
                className={`cursor-pointer ${
                  selectedCategory === "Language" ? "font-bold" : ""
                }`}
              >
                Language
              </div>
              <div
                onClick={() => setSelectedCategory("Sales")}
                className={`cursor-pointer ${
                  selectedCategory === "Sales" ? "font-bold" : ""
                }`}
              >
                Sales
              </div>
            </div>
          )}
        </div>
      </div>
      {selectedCategory && (
        <div className="w-[182.04px] h-[33px] left-0 top-0 absolute text-center text-neutral-700 text-3xl font-bold font-['Titillium Web']">
          Selected Category: {selectedCategory}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
