import React, { useState } from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <div className="">
      <div className="relative z-0 flex flex-col bg-white">
        <div className="z-10 flex justify-between text-neutral-500 text-[40px] font-almendra font-bold my-7 px-20 absolute w-[100%]">
          <div className="">video</div>
          <div className="">portfolio</div>
          <div className="">service</div>
        </div>
        <div className="flex items-center justify-center">
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
          <img
            src="/asset/start.svg"
            alt="start service"
            onClick={() => {
              handleClick();
              window.location.href = "/new-portal";
            }}
            className="z-40 w-[11%] ml-[170px] h-auto absolute bottom-[20px] hover:cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
