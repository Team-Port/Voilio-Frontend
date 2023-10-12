import React from "react";
import "../../src/styles/tailwind.css";

const Landing = () => {
  return (
    <div className="bg-white relative z-0">
      <div className="flex justify-center items-center">
        <img
          src="/asset/gradient.png"
          alt="gradient"
          className="w-full h-auto m-0"
        />
        <img
          src="/asset/landing.png"
          alt="landing"
          className="z-10 w-[78%] h-auto absolute"
        />
        <img
          src="/asset/arrow.png"
          alt="arrow"
          className="z-20 w-[30%] h-auto absolute m-0 left-0 top"
        />
        <img
          src="/asset/start.png"
          alt="start service"
          className="z-20 w-[15%] h-auto absolute bottom-10"
        />
        <img
          src="/asset/downarrow.png"
          alt="downarrow"
          className="z-20 w-[8%] h-auto absolute bottom-20"
        />
        <img
          src="/asset/clip.png"
          alt="clip"
          className="z-20 w-[7%] h-auto absolute right-20 top-30"
        />
        <img
          src="/asset/title1.png"
          alt="영상기반 포토폴리오 서비스"
          className="z-20 w-[30%] h-auto absolute right-20 top"
        />
        <img
          src="/asset/title2.png"
          alt="voilio"
          className="z-20 w-[30%] h-auto absolute right-20 top-80"
        />
      </div>
    </div>
  );
};

export default Landing;
