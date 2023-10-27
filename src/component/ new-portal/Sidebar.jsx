import { useState } from "react";

const menues = [
  // {
  //   id: 1,
  //   name: "Category",
  //   value: "category",
  // },
  {
    id: 2,
    name: "All",
    value: "all",
  },
  {
    id: 3,
    name: "IT",
    value: "all",
  },
  {
    id: 4,
    name: "Design",
    value: "design",
  },
  {
    id: 5,
    name: "Dance",
    value: "dance",
  },
  {
    id: 6,
    name: "Exercise",
    value: "exercise",
  },
  {
    id: 7,
    name: "Language",
    value: "language",
  },
  {
    id: 8,
    name: "Sales",
    value: "sales",
  },
  {
    id: 9,
    name: "Library",
    value: "library",
  },
  {
    id: 10,
    name: "Following",
    value: "following",
  },
];

const Menu = () => {
  const [activeMenu, setActiveMenu] = useState(1);
  const [activeCategory, setActiveCategory] = useState(1);
  const [showDropdown, setShowDropdown] = useState(false);

  const makeMenus = () => {
    if (!menues || menues.length === 0) return [];
    return (
      <div className="flex flex-col gap-[20px]">
        <div className="flex gap-[15px] w-full flex-col">
          <div className="flex justify-center w-full text-2xl">Category</div>
          <div className="w-[140px] h-[1px] bg-black" />
        </div>
        {menues.map((menu) => {
          const isActive = menu.id === activeMenu;
          return (
            <button
              className="flex gap-[15px] w-full flex-col"
              onClick={() => {
                setActiveMenu(menu.id);
                menu.id !== 1 && setActiveCategory(null);
                if (menu.value === "following") {
                  setShowDropdown(!showDropdown);
                } else {
                  setShowDropdown(false); // Following이 아닌 다른 메뉴 클릭 시 dropdown 닫기
                }
              }}
              key={menu.id}
            >
              <div
                className={`flex justify-center w-full ${
                  menu.id === 9 || menu.id === 10 ? "text-2xl" : "text-xl"
                } ${isActive ? "font-bold" : ""}`}
              >
                {menu.name}
              </div>
              {menu.value === "library" && (
                <div className="w-[140px] h-[1px] bg-black mt-[8px]" />
              )}
              {menu.value === "sales" && (
                <div className="w-[140px] h-[1px] bg-black" />
              )}
            </button>
          );
        })}
        {showDropdown && (
          <div className="relative flex w-[134px] text-center">
            <div className="right-0 z-10  w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div
                className="py-1 text-center"
                role="none"
                style={{ maxHeight: "150px", overflowY: "auto" }}
              >
                <div className="text-gray-700 block px-4 py-2 text-sm text-center">
                  User 1
                </div>
                <div className="text-gray-700 block px-4 py-2 text-sm text-center">
                  User 2
                </div>
                <div className="text-gray-700 block px-4 py-2 text-sm text-center">
                  User 3
                </div>
                <div className="text-gray-700 block px-4 py-2 text-sm text-center">
                  User 4
                </div>
                <div className="text-gray-700 block px-4 py-2 text-sm text-center">
                  User 5
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return makeMenus();
};

const Sidebar = () => {
  return (
    <div className="fixed flex justify-center items-center mt-[110px] ml-[10px] w-[180px] z-20">
      <div className="flex items-center justify-center">
        <Menu />
      </div>
    </div>
  );
};

export default Sidebar;
