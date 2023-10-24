import React from "react";
import "../../src/styles/tailwind.css";
import "../../src/styles/globalStyles.css";
import Home from "./Home";
import Header from "../component/ new-portal/Header";
// import { relative } from "path";

const Landing = () => {
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
            className="z-10 w-[100%] h-auto absolute"
          />
          <img
            src="/asset/arrow.png"
            alt="arrow"
            className="z-20 w-[30%] h-auto absolute m-0 left-0 top"
          />
          <img
            src="/asset/start.png"
            alt="start service"
            className="z-20 w-[11%] h-auto absolute bottom-[20px]"
          />
          <img
            src="/asset/downarrow.png"
            alt="downarrow"
            className="z-20 w-[5%] h-auto absolute bottom-[65px]"
          />
          <img
            src="/asset/clip.png"
            alt="clip"
            className="z-20 w-[8%] h-auto absolute right-[15px] bottom-[360px]"
          />
          <img
            src="/asset/title1.png"
            alt="영상기반 포토폴리오 서비스"
            className="z-20 w-[30%] h-auto absolute right-[100px] bottom-[425px]"
          />
          <img
            src="/asset/title2.png"
            alt="voilio"
            className="z-20 w-[30%] h-auto absolute right-[50px] bottom-[230px]"
          />
        </div>
      </div>
      <Home />
    </div>
  );
};

export default Landing;
