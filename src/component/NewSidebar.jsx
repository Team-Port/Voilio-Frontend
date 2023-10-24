import React, { useState } from "react";

const NewSidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    "All",
    "IT",
    "Design",
    "Dance",
    "Language",
    "Exercise",
    "Sales",
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setIsMenuOpen(false);
  };

  return (
    <div className="w-[182.04px] h-[490px] relative">
      <div className="w-[182.04px] h-[490px] left-0 top-0 absolute">
        <div
          className="w-[182.04px] h-[33px] left-0 top-0 absolute text-center text-neutral-700 text-3xl font-bold font-['Titillium Web']"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          Category
        </div>
        {isMenuOpen && (
          <div className="w-[123.68px] left-[27.79px] absolute bg-white shadow-lg p-2 rounded">
            {categories.map((category, index) => (
              <div
                key={index}
                className="cursor-pointer"
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </div>
            ))}
          </div>
        )}
      </div>
      {selectedCategory && (
        <div className="w-[182.04px] h-[490px] left-0 top-0 absolute">
          <div className="w-[123.68px] h-[32.90px] left-[27.79px] top-[112px] absolute">
            <div className="w-[123.68px] h-[32.90px] left-0 top-0 absolute text-center text-zinc-500 text-xl font-normal font-['Titillium Web']">
              {selectedCategory}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default NewSidebar;
