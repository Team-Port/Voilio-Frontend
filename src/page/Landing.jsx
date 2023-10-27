import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../src/styles/tailwind.css";
import "../../src/styles/globalStyles.css";
import Home from "./Home";
import Header from "../component/ new-portal/Header";
// import { relative } from "path";

const Landing = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <div className="">
      <div className="flex flex-col bg-white relative z-0">
        <div className="z-10 flex justify-between text-neutral-500 text-[40px] font-almendra font-bold my-7 px-20 absolute w-[100%]">
          <div className="">video</div>
          <div className="">portfolio</div>
          <div className="">service</div>
        </div>
        <div className="flex justify-center items-center">
          <img
            src="/asset/gradient.png"
            alt="gradient"
            className="w-full h-auto m-0"
          />
          <img
            src="/asset/landing.png"
            alt="landing"
            className="z-10 w-[95%] h-auto pt-[40px] absolute"
          />
          <img
            src="/asset/arrow.png"
            alt="arrow"
            className="z-20 w-[30%] h-auto absolute m-0 left-0 top"
          />
          <img
            src="/asset/downarrow.svg"
            alt="downarrow"
            className="z-40 w-[5%] h-auto absolute bottom-[60px]"
          />
          <img
            src="/asset/clip.png"
            alt="clip"
            className="z-20 w-[8%] h-auto absolute right-[40px] bottom-[340px]"
          />
          <img
            src="/asset/title1.svg"
            alt="영상기반 포토폴리오 서비스"
            className="z-20 w-[30%] h-auto absolute right-[130px] bottom-[410px]"
          />
          <img
            src="/asset/title2.svg"
            alt="voilio"
            className="z-20 w-[30%] h-auto absolute right-[60px] bottom-[220px]"
          />
        </div>
        <div className="flex justify-center pr-[165px]">
          <Link to={"/new-portal"}>
            <img
              src="/asset/start.svg"
              alt="start service"
              onClick={handleClick}
              className="z-40 w-[11%] h-auto absolute bottom-[20px] pointer-cursor"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
