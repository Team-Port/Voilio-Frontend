import React from "react";
import { BsChatRightHeart, BsSuitHeart, BsPersonCircle, BsSearch, BsCloudPlus } from "react-icons/bs";
import { SlLogin } from "react-icons/sl";
import { Link } from "react-router-dom";
import { useState, useEffect, useCallback, useRef } from "react";
import jwt_decode from "jwt-decode";

import "./header.css";

const Header = ({ loggedIn, setLoggedIn }) => {
  const [isOpen, setMenu] = useState(false);  // 메뉴의 초기값을 false로 설정
  const [isMakingOpen, setMakingMenu] = useState(false);  // 메뉴의 초기값을 false로 설정
  const menuRef = useRef(document.createElement("div")); // 초기값 할당
  const makingMenuRef = useRef(document.createElement("div")); // 초기값 할당

  const handleLoginChange = useCallback(() => {
      const token = localStorage.getItem('jwtAuthToken');
      if (token) {
        const decodedToken = jwt_decode(token);
        const expirationTime = decodedToken.exp * 1000; // 토큰 만료 시간(ms)
        if (expirationTime < Date.now()) {
          localStorage.removeItem("jwtAuthToken"); // 만료된 토큰 삭제
          setLoggedIn(false);
        }
        else setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    }, []);


  const logout = () => {
    localStorage.removeItem("jwtAuthToken");
    setLoggedIn(false);
  }

  const toggleMenu = () => {
    setMenu(!isOpen);  // 기존 isOpen 값의 반대값으로
  } 

  const toggleMakingMenu = ()=> {
    setMakingMenu(!isMakingOpen);
  }

  const handleClickOutside = useCallback(
    (event) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        setMenu(false); // 메뉴 영역 외부를 클릭하면 메뉴를 닫음
      }

      if (isMakingOpen && makingMenuRef.current && !makingMenuRef.current.contains(event.target)) {
        setMakingMenu(false); // 새로운 메뉴 영역 외부를 클릭하면 새로운 메뉴를 닫음
      }
    },
    [isOpen, isMakingOpen, menuRef, makingMenuRef]
  );
  
  /*
    useEffect에서 이벤트 리스너를 추가하고, 해당 이벤트 리스너를 삭제하는 것이 중요하다.
    이것을 제대로 처리하지 않으면, 메모리 누수와 같은 문제가 발생할 수 있다.
  */
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside, toggleMenu, toggleMakingMenu]);

  return (
    <div className="header">
      <Link to={"/"}>
        <div className="logoArea">
          <img className="headerLogo" src={"asset/voilio.png"}></img>
        </div>
      </Link>
      <div className="search-InputArea">
        <input type="search" placeholder="검색" className="searchInput" />
        <div className="searchBtn-box">
          <BsSearch className="topIcon-search" size="1.2rem"></BsSearch>
        </div>
      </div>
      <div className="topMenuArea">
        {localStorage.getItem("jwtAuthToken") ? (
        <div className="private-btn-container">
            <div className="right-header-btn">
                <BsCloudPlus className="topIcon" size="1.65rem" onClick={toggleMakingMenu}></BsCloudPlus>
                <BsSuitHeart className="topIcon" size="1.5rem"></BsSuitHeart>
                <BsChatRightHeart className="topIcon" size="1.5rem"></BsChatRightHeart>
                <BsPersonCircle className="topIcon" size="1.5rem" onClick={toggleMenu}></BsPersonCircle>
            </div>

            <div className="private-toggle-menu">
              <ul className={isOpen ? "show-menu personal" : "hide-menu"}>
                <li>
                  <Link to={"/profile"}>MyPage</Link>
                </li>
                <li onClick={logout}>Logout</li>
              </ul>
            </div>

            <div className="private-toggle-menu">
              <ul className={isMakingOpen ? "show-menu making" : "hide-menu"}>
                <li>동영상 업로드</li>
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