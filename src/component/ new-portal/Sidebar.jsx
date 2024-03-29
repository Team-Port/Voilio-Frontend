import React, { useState, useEffect } from "react";
import axios from "axios";
import { HOST_URL } from "../../lib/HostUrl";

const menues = [
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
  const [data, setData] = useState(null);
  const [id, setId] = useState("");
  const [userId, setUserId] = useState("2");
  const [nicknames, setNicknames] = useState([]);

  useEffect(() => {
    const jwtToken = sessionStorage.getItem("jwtAuthToken");

    if (jwtToken) {
      axios
        .get(`${HOST_URL}/api/v1/Follows/list?fromUserid=${"2"}`, {
          headers: { Authorization: `Bearer ${jwtToken}` },
          params: { fromUserid: userId },
        })
        .then((response) => {
          setData(response.data.data);

          if (response.status === 200) {
            console.log(response.data.data);
            const subscriptions = response.data.data;

            const tempNicknames = subscriptions
              .map((subscription) => subscription.toUser?.nickname)
              .filter(Boolean);

            setNicknames(tempNicknames); // 여기서 받아온 =닉네임 목록을 상태로 설정해주세요
            subscriptions.forEach((subscription) => {
              const nickname = subscription.toUser?.nickname;
              if (nickname) {
                console.log("구독한 회원의 닉네임:", nickname);
              }
            });
          }
        })
        .catch((error) => {
          console.log("구독자를 불러오는데 실패했습니다.");
          console.log(error);
        });
    }
  }, [userId]);

  const handleFollowingClick = () => {
    setShowDropdown(!showDropdown);
  };
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
                  handleFollowingClick();
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
          <div>
            <div className="flex justify-center w-[135px] text-center z-10 origin-top-right rounded-md bg-white shadow-lg focus:outline-none">
              <div className="w-full max-h-32 overflow-y-auto flex flex-col gap-[5px] text-gray-700 py-2 text-base text-center">
                {nicknames &&
                  nicknames.map((name, index) => (
                    <button className="hover:bg-slate-200" key={index}>
                      {name}
                    </button>
                  ))}
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
