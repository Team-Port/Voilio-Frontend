import React from "react";
import "../../src/styles/tailwind.css";
import "../../src/styles/globalStyles.css";
// import { relative } from "path";

const Landing = () => {
  return (
    <div className="body" style={{ position: "relative" }}>
      <div className="flex flex-col bg-white relative z-0">
        <div className="z-10 flex justify-between text-neutral-500 text-[40px] font-almendra font-bold top-10 left-8 absolute w-[95%]">
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
            className="z-10 w-[90%] h-auto absolute"
          />
          <img
            src="/asset/arrow.png"
            alt="arrow"
            className="z-20 w-[28%] h-auto absolute m-0 left-0 top"
          />
          <img
            src="/asset/start.png"
            ㅊ
            alt="start service"
            className="z-20 w-[11%] h-auto absolute bottom-[40px]"
          />
          <img
            src="/asset/downarrow.png"
            alt="downarrow"
            className="z-20 w-[5%] h-auto absolute bottom-[85px]"
          />
          <img
            src="/asset/clip.png"
            alt="clip"
            className="z-20 w-[7%] h-auto absolute right-[70px] bottom-[370px]"
          />
          <img
            src="/asset/title1.png"
            alt="영상기반 포토폴리오 서비스"
            className="z-20 w-[30%] h-auto absolute right-[155px] bottom-[430px]"
          />
          <img
            src="/asset/title2.png"
            alt="voilio"
            className="z-20 w-[30%] h-auto absolute right-[90px] bottom-[230px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
