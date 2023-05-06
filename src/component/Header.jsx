import React from "react";
import {
  BsChatRightHeart,
  BsSuitHeart,
  BsPersonCircle,
  BsSearch,
  BsCloudPlus,
} from "react-icons/bs";
import { SlLogin } from "react-icons/sl";
import { Link } from "react-router-dom";
import { useState, useCallback } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./header.css";
import { HOST_URL } from "../lib/HostUrl";
import { useRecoilState } from "recoil";
import { isVideoItems } from "../store/video/isVideoItems";

const Header = () => {
  const [isOpen, setMenu] = useState(false); // 메뉴의 초기값을 false로 설정
  const [isMakingOpen, setMakingMenu] = useState(false); // 메뉴의 초기값을 false로 설정
  const [search, setSearch] = useState("");
  const [videoItems, setVideoItems] = useRecoilState(isVideoItems);
  const navigate = useNavigate();

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  const onSearch = () => {
    if (search === "" || search === " ") {
      alert("검색이 없는데용?");
      return;
    }

    axios
      .get(`${HOST_URL}/api/v1/boards?search=${search}`)
      .then((response) => {
        if (response.status === 200) {
          setVideoItems(response.data.data);
          navigate(`/search/${search}`);
        }
      })
      .catch((error) => {
        if (error.response.status === 400) {
          alert("검색어에 맞는 게시글이 없어용ㅜㅜ");
          return;
        }
        console.log(error);
      });
  };

  const onClickLogo = () => {
    axios
      .get(`${HOST_URL}/api/v1/boards/lists`)
      .then((response) => {
        setVideoItems(response.data.data._embedded.boardResponseList);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLoginChange = useCallback(() => {
    const token = localStorage.getItem("jwtAuthToken");
    if (token) {
      const decodedToken = jwt_decode(token);
      const expirationTime = decodedToken.exp * 1000; // 토큰 만료 시간(ms)
      if (expirationTime < Date.now()) {
        localStorage.removeItem("jwtAuthToken"); // 만료된 토큰 삭제
      }
      //     setLoggedIn(false);
      //   } else setLoggedIn(true);
      // } else {
      //   setLoggedIn(false);
      // }
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("jwtAuthToken");
  };

  const toggleMenu = () => {
    setMenu(!isOpen); // 기존 isOpen 값의 반대값으로
  };

  const toggleMakingMenu = () => {
    setMakingMenu(!isMakingOpen);
  };

  const closeMenu = () => {
    setMenu(false);
    setMakingMenu(false);
  };

  const nickname = sessionStorage.getItem("nickname");

  return (
    <div className="header">
      <div className="logoArea" onClick={onClickLogo}>
        <img
          className="headerLogo"
          src={process.env.PUBLIC_URL + "/asset/voilio.png"}
        />
      </div>

      <div className="search-InputArea">
        <input
          type="search"
          placeholder="검색"
          className="searchInput"
          onChange={onChangeSearch}
          onKeyDown={handleOnKeyPress}
        />
        <div className="searchBtn-box">
          <BsSearch
            className="topIcon-search"
            size="1.2rem"
            onClick={onSearch}
          ></BsSearch>
        </div>
      </div>
      <div className="topMenuArea">
        {localStorage.getItem("jwtAuthToken") ? (
          <div className="private-btn-container">
            <div className="right-header-btn">
              <BsCloudPlus
                className="topIcon dropdown"
                size="1.65rem"
                onMouseEnter={toggleMakingMenu}
              ></BsCloudPlus>
              <BsSuitHeart className="topIcon" size="1.5rem"></BsSuitHeart>
              <BsChatRightHeart
                className="topIcon"
                size="1.5rem"
              ></BsChatRightHeart>
              <BsPersonCircle
                className="topIcon"
                size="1.5rem"
                onMouseEnter={toggleMenu}
              ></BsPersonCircle>
            </div>

            <div className="private-toggle-menu">
              <ul
                className={isOpen ? "show-menu personal" : "hide-menu"}
                onMouseLeave={closeMenu}
              >
                <li>
                  <Link to={`/profile/@${nickname}`}> MyPage</Link>
                </li>
                <li onClick={logout}>Logout</li>
              </ul>
            </div>

            <div className="private-toggle-menu">
              <ul
                className={isMakingOpen ? "show-menu making" : "hide-menu"}
                onMouseLeave={closeMenu}
              >
                <li>
                  {" "}
                  <Link to={"/upload"}>동영상 업로드</Link>
                </li>
                <li>게시물 업로드</li>
              </ul>
            </div>
          </div>
        ) : (
          <Link to={"/login"}>
            <SlLogin className="topIcon" size="1.5rem"></SlLogin>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
