import { useState } from "react";

const menus = [
  {
    id: 1,
    name: "Category",
    value: "category",
  },
  {
    id: 2,
    name: "Library",
    value: "library",
  },
  {
    id: 3,
    name: "Following",
    value: "following",
  },
];

const categories = [
  {
    id: 1,
    name: "All",
    value: "all",
  },
  {
    id: 2,
    name: "IT",
    value: "all",
  },
  {
    id: 3,
    name: "Design",
    value: "design",
  },
  {
    id: 4,
    name: "Dance",
    value: "dance",
  },
  {
    id: 5,
    name: "Exercise",
    value: "exercise",
  },
  {
    id: 6,
    name: "Language",
    value: "language",
  },
  {
    id: 7,
    name: "Sales",
    value: "sales",
  },
];

const Menu = () => {
  const [activeMenu, setActiveMenu] = useState(1);
  const [activeCategory, setActiveCategory] = useState(1);

  const makeMenus = () => {
    if (!menus || menus.length === 0) return [];
    return (
      <div className="flex flex-col gap-[30px]">
        {menus.map((menu) => {
          const isActive = menu.id === activeMenu;
          return (
            <button
              className="flex gap-[15px] w-full flex-col"
              onClick={() => {
                setActiveMenu(menu.id);
                activeMenu !== 1 && setActiveCategory(null);
              }}
              key={menu.id}
            >
              <div
                className={`flex justify-center w-full text-2xl ${
                  isActive ? "font-bold" : ""
                }`}
              >
                {menu.name}
              </div>
              {menu.value === "category" && (
                <>
                  <div className="w-[140px] h-[1px] bg-black" />
                  <Category
                    activeCategory={activeCategory}
                    setActiveCategory={setActiveCategory}
                  />
                </>
              )}
            </button>
          );
        })}
      </div>
    );
  };

  return makeMenus();
};

const Category = ({ activeCategory, setActiveCategory }) => {
  const makeCategories = () => {
    if (!categories || categories.length === 0) return [];
    return (
      <div className="flex flex-col w-full gap-[12px]">
        {categories.map((category) => {
          const isActive = category.id === activeCategory;
          return (
            <button
              onClick={() => setActiveCategory(category.id)}
              key={category.id}
            >
              <div
                className={`flex w-full justify-center text-xl ${
                  isActive ? "font-bold" : ""
                }`}
              >
                {category.name}
              </div>
            </button>
          );
        })}
      </div>
    );
  };

  return makeCategories();
};

const Sidebar = () => {
  return (
    <div className="fixed flex justify-center items-center mt-[100px] ml-[10px] w-[180px]">
      <div className="flex items-center justify-center">
        <Menu />
      </div>
    </div>
  );
};

export default Sidebar;
