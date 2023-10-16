import React from "react";
import "./sidebar.css";
import axios from "axios";
import { useNavigate } from "react-router";
import { HOST_URL } from "../lib/HostUrl";
import { Button } from "@mui/material";
import { useRecoilState } from "recoil";
import { isVideoItems } from "../store/video/isVideoItems";

const Sidebar = ({ handleSetVideo }) => {
  const [videoItems, setVideoItems] = useRecoilState(isVideoItems);

  const navigate = useNavigate();

  const onClickCateogry = (value) => {
    axios
      .get(`${HOST_URL}/api/v1/boards/lists/category?category=${value}`)
      .then((response) => {
        setVideoItems(response.data.data._embedded.boardResponseList);
        navigate(`/category/${value}`);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="sidebarMenu-box">
      <div className="pageMenu-box">
        <div>
          <img src={`${process.env.PUBLIC_URL}/asset/home.png`} />
          <p>Home</p>
        </div>
        <div>
          <img src={`${process.env.PUBLIC_URL}/asset/highlight.png`} />
          <p>보관</p>
        </div>
        <div>
          <img src={`${process.env.PUBLIC_URL}/asset/target.png`} />
          <p>구독</p>
        </div>
        <div>
          <img src={`${process.env.PUBLIC_URL}/asset/chart.png`} />
          <p>통계</p>
        </div>
      </div>
      <div className="categoryMenu-box">
        <div onClick={() => onClickCateogry("IT")}>
          <img src={`${process.env.PUBLIC_URL}/asset/IT.png`} />
          <p>IT</p>
        </div>
        <div onClick={() => onClickCateogry("BACKEND")}>
          <img src={`${process.env.PUBLIC_URL}/asset/violin.png`} />
          <p>Backend</p>
        </div>
        <div onClick={() => onClickCateogry("FRONTEND")}>
          <img src={`${process.env.PUBLIC_URL}/asset/beauty.png`} />
          <p>Frontend</p>
        </div>
        <div onClick={() => onClickCateogry("DANCE")}>
          <img src={`${process.env.PUBLIC_URL}/asset/dance.png`} />
          <p>Dance</p>
        </div>
        <div onClick={() => onClickCateogry("LANGUAGE")}>
          <img src={`${process.env.PUBLIC_URL}/asset/language.png`} />
          <p>Language</p>
        </div>
        <div onClick={() => onClickCateogry("PYTHON")}>
          <img src={`${process.env.PUBLIC_URL}/asset/exercise.png`} />
          <p>Python</p>
        </div>
        <div onClick={() => onClickCateogry("JAVA")}>
          <img src={`${process.env.PUBLIC_URL}/asset/exercise.png`} />
          <p>Java</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
