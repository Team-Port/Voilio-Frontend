import React from "react";
import { BsChatRightHeart, BsSuitHeart, BsPersonCircle, BsSearch } from "react-icons/bs";
import { SlLogin } from "react-icons/sl";
import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import jwt_decode from "jwt-decode";
import { handleLoginChange } from "./../lib/Auth"; // auth.js에서 handleLoginChange 함수를 불러옴

import "./header.css";

const Header = ({ loggedIn, setLoggedIn }) => {

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
          <Link to={"/profile"}>
            <BsSuitHeart className="topIcon" size="1.5rem"></BsSuitHeart>
            <BsChatRightHeart className="topIcon" size="1.5rem"></BsChatRightHeart>
            <BsPersonCircle className="topIcon" size="1.5rem"></BsPersonCircle>
          </Link>
        ) : (
          <Link to={"/login"}>
            <SlLogin className="topIcon" size="1.5rem"></SlLogin>
          </Link>
        )}
      </div>
    </div>
  );
};