import React, { useState } from "react";
import "../../src/styles/tailwind.css";
import "./videoItem.css";
import { Link, useNavigate } from "react-router-dom";
import * as common from "./../lib/common";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PublicIcon from "@mui/icons-material/Public";
import PublicOffIcon from "@mui/icons-material/PublicOff";
import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import axios from "axios";
import { HOST_URL } from "../lib/HostUrl";

// const ITEM_HEIGHT = 48;
// const options = ["숨김", "수정", "삭제"];

const VideoItem = () => {
  // const [anchorEl, setAnchorEl] = useState(null);
  // const open = Boolean(anchorEl);
  // const navigate = useNavigate();

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  // const clickOption = (option, boardId) => {
  //   if (option.target.innerText === "삭제") {
  //     axios.delete(`${HOST_URL}/api/v1/boards/${boardId}`).then((respone) => {
  //       if (respone.status === 200) {
  //         window.location.reload();
  //       }
  //     });
  //   } else if (option.target.innerText === "숨김") {
  //     axios
  //       .patch(`${HOST_URL}/api/v1/boards/${boardId}/hide`)
  //       .then((response) => {
  //         if (response.status === 200) {
  //           window.location.reload();
  //         }
  //       });
  //   } else {
  //     navigate(`/manage/${boardId}`);
  //   }
  // };

  return (
    <div className="w-[100%] h-[1000px] grid grid-cols-3 grid-row-3 gap-4 px-3">
      <div className="w-[100%] h-[100%] relative">
        <div className="w-[100%] h-[100%] absolute bg-white bg-opacity-75 rounded-[10px]">
          <div className="w-[100%] h-[25px] flex justify-between items-center px-[23px] mt-3 mb-2">
            <div className="flex justify-between">
              <div className="w-[69.35px] h-[23px] mr-1">
                <div className="w-[69.35px] h-[22.46px] bg-slate-400 rounded-[20px]">
                  <div className="leading-[23px] text-center text-white text-[13px] font-semibold font-['Nanum Gothic']">
                    카테고리
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="flex justify-center w-[61.19px] text-center text-neutral-400 text-lg font-normal font-['Titillium Web']">
                1달 전
              </div>
              <img
                className="w-[17px] h-[17px] m-1 justify-center"
                src="/asset/eyeicon.png"
                alt="eyeicon"
              />
              <div className="flex justify-center w-[41.11px] text-center text-neutral-400 text-lg font-normal font-['Titillium Web']">
                3.4k
              </div>
            </div>
          </div>
          <div class="w-[100%] h-[60%] overflow-hidden">
            <img
              className=" px-[20px] m-0 object-cover rounded-[10px]"
              src="/asset/thumbnail.png"
              alt="tumbnail1"
            />
          </div>
          <div className="flex justify-between items-center w-[100%] h-[70px] mt-1 px-[20px]">
            <img
              className="w-[60px] h-[60px] rounded-full m-0"
              src="/asset/sample.png"
              alt="sample"
            />
            <div className="flex flex-col w-[100%] ml-[15px]">
              <div className="text-black text-[20px] font-semibold font-['Titillium Web']">
                Title이 길면 slicing을 ...
              </div>
              <div className="text-neutral-700 text-[17px] font-normal font-['Titillium Web']">
                노마드코더
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[100%] relative">
        <div className="w-[100%] h-[100%] absolute bg-white bg-opacity-75 rounded-[10px]">
          <div className="w-[100%] h-[25px] flex justify-between items-center px-[23px] mt-3 mb-2">
            <div className="flex justify-between">
              <div className="w-[69.35px] h-[23px] mr-1">
                <div className="w-[69.35px] h-[22.46px] bg-slate-400 rounded-[20px]">
                  <div className="leading-[23px] text-center text-white text-[13px] font-semibold font-['Nanum Gothic']">
                    카테고리
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="flex justify-center w-[61.19px] text-center text-neutral-400 text-lg font-normal font-['Titillium Web']">
                1달 전
              </div>
              <img
                className="w-[17px] h-[17px] m-1 justify-center"
                src="/asset/eyeicon.png"
                alt="eyeicon"
              />
              <div className="flex justify-center w-[41.11px] text-center text-neutral-400 text-lg font-normal font-['Titillium Web']">
                3.4k
              </div>
            </div>
          </div>
          <div class="w-[100%] h-[60%] overflow-hidden">
            <img
              className=" px-[20px] m-0 object-cover rounded-[10px]"
              src="/asset/thumbnail.png"
              alt="tumbnail1"
            />
          </div>
          <div className="flex justify-between items-center w-[100%] h-[70px] mt-1 px-[20px]">
            <img
              className="w-[60px] h-[60px] rounded-full m-0"
              src="/asset/sample.png"
              alt="sample"
            />
            <div className="flex flex-col w-[100%] ml-[15px]">
              <div className="text-black text-[20px] font-semibold font-['Titillium Web']">
                Title이 길면 slicing을 ...
              </div>
              <div className="text-neutral-700 text-[17px] font-normal font-['Titillium Web']">
                노마드코더
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[100%] relative">
        <div className="w-[100%] h-[100%] absolute bg-white bg-opacity-75 rounded-[10px]">
          <div className="w-[100%] h-[25px] flex justify-between items-center px-[23px] mt-3 mb-2">
            <div className="flex justify-between">
              <div className="w-[69.35px] h-[23px] mr-1">
                <div className="w-[69.35px] h-[22.46px] bg-slate-400 rounded-[20px]">
                  <div className="leading-[23px] text-center text-white text-[13px] font-semibold font-['Nanum Gothic']">
                    카테고리
                  </div>
                </div>
              </div>
              <div className="w-[69.35px] h-[23px]">
                <div className="w-[69.35px] h-[22.46px] bg-red-300 rounded-[20px]">
                  <div className="leading-[23px] text-center text-white text-[13px] font-semibold font-['Nanum Gothic']">
                    카테고리
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="flex justify-center w-[61.19px] text-center text-neutral-400 text-lg font-normal font-['Titillium Web']">
                1달 전
              </div>
              <img
                className="w-[17px] h-[17px] m-1 justify-center"
                src="/asset/eyeicon.png"
                alt="eyeicon"
              />
              <div className="flex justify-center w-[41.11px] text-center text-neutral-400 text-lg font-normal font-['Titillium Web']">
                3.4k
              </div>
            </div>
          </div>
          <div class="w-[100%] h-[60%] overflow-hidden">
            <img
              className=" px-[20px] m-0 object-cover rounded-[10px]"
              src="/asset/thumbnail.png"
              alt="tumbnail1"
            />
          </div>
          <div className="flex justify-between items-center w-[100%] h-[70px] mt-1 px-[20px]">
            <img
              className="w-[60px] h-[60px] rounded-full m-0"
              src="/asset/sample.png"
              alt="sample"
            />
            <div className="flex flex-col w-[100%] ml-[15px]">
              <div className="text-black text-[20px] font-semibold font-['Titillium Web']">
                Title이 길면 slicing을 ...
              </div>
              <div className="text-neutral-700 text-[17px] font-normal font-['Titillium Web']">
                노마드코더
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[100%] relative">
        <div className="w-[100%] h-[100%] absolute bg-white bg-opacity-75 rounded-[10px]">
          <div className="w-[100%] h-[25px] flex justify-between items-center px-[23px] mt-3 mb-2">
            <div className="flex justify-between">
              <div className="w-[69.35px] h-[23px] mr-1">
                <div className="w-[69.35px] h-[22.46px] bg-emerald-200 rounded-[20px]">
                  <div className="leading-[23px] text-center text-white text-[13px] font-semibold font-['Nanum Gothic']">
                    카테고리
                  </div>
                </div>
              </div>
              <div className="w-[69.35px] h-[23px]">
                <div className="w-[69.35px] h-[22.46px] bg-red-300 rounded-[20px]">
                  <div className="leading-[23px] text-center text-white text-[13px] font-semibold font-['Nanum Gothic']">
                    카테고리
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="flex justify-center w-[61.19px] text-center text-neutral-400 text-lg font-normal font-['Titillium Web']">
                1달 전
              </div>
              <img
                className="w-[17px] h-[17px] m-1 justify-center"
                src="/asset/eyeicon.png"
                alt="eyeicon"
              />
              <div className="flex justify-center w-[41.11px] text-center text-neutral-400 text-lg font-normal font-['Titillium Web']">
                3.4k
              </div>
            </div>
          </div>
          <div class="w-[100%] h-[60%] overflow-hidden">
            <img
              className=" px-[20px] m-0 object-cover rounded-[10px]"
              src="/asset/thumbnail.png"
              alt="tumbnail1"
            />
          </div>
          <div className="flex justify-between items-center w-[100%] h-[70px] mt-1 px-[20px]">
            <img
              className="w-[60px] h-[60px] rounded-full m-0"
              src="/asset/sample.png"
              alt="sample"
            />
            <div className="flex flex-col w-[100%] ml-[15px]">
              <div className="text-black text-[20px] font-semibold font-['Titillium Web']">
                Title이 길면 slicing을 ...
              </div>
              <div className="text-neutral-700 text-[17px] font-normal font-['Titillium Web']">
                노마드코더
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[100%] relative">
        <div className="w-[100%] h-[100%] absolute bg-white bg-opacity-75 rounded-[10px]">
          <div className="w-[100%] h-[25px] flex justify-between items-center px-[23px] mt-3 mb-2">
            <div className="flex justify-between">
              <div className="w-[69.35px] h-[23px] mr-1">
                <div className="w-[69.35px] h-[22.46px] bg-slate-400 rounded-[20px]">
                  <div className="leading-[23px] text-center text-white text-[13px] font-semibold font-['Nanum Gothic']">
                    카테고리
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="flex justify-center w-[61.19px] text-center text-neutral-400 text-lg font-normal font-['Titillium Web']">
                1달 전
              </div>
              <img
                className="w-[17px] h-[17px] m-1 justify-center"
                src="/asset/eyeicon.png"
                alt="eyeicon"
              />
              <div className="flex justify-center w-[41.11px] text-center text-neutral-400 text-lg font-normal font-['Titillium Web']">
                3.4k
              </div>
            </div>
          </div>
          <div class="w-[100%] h-[60%] overflow-hidden">
            <img
              className=" px-[20px] m-0 object-cover rounded-[10px]"
              src="/asset/thumbnail.png"
              alt="tumbnail1"
            />
          </div>
          <div className="flex justify-between items-center w-[100%] h-[70px] mt-1 px-[20px]">
            <img
              className="w-[60px] h-[60px] rounded-full m-0"
              src="/asset/sample.png"
              alt="sample"
            />
            <div className="flex flex-col w-[100%] ml-[15px]">
              <div className="text-black text-[20px] font-semibold font-['Titillium Web']">
                Title이 길면 slicing을 ...
              </div>
              <div className="text-neutral-700 text-[17px] font-normal font-['Titillium Web']">
                노마드코더
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[100%] relative">
        <div className="w-[100%] h-[100%] absolute bg-white bg-opacity-75 rounded-[10px]">
          <div className="w-[100%] h-[25px] flex justify-between items-center px-[23px] mt-3 mb-2">
            <div className="flex justify-between">
              <div className="w-[69.35px] h-[23px] mr-1">
                <div className="w-[69.35px] h-[22.46px] bg-slate-400 rounded-[20px]">
                  <div className="leading-[23px] text-center text-white text-[13px] font-semibold font-['Nanum Gothic']">
                    카테고리
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="flex justify-center w-[61.19px] text-center text-neutral-400 text-lg font-normal font-['Titillium Web']">
                1달 전
              </div>
              <img
                className="w-[17px] h-[17px] m-1 justify-center"
                src="/asset/eyeicon.png"
                alt="eyeicon"
              />
              <div className="flex justify-center w-[41.11px] text-center text-neutral-400 text-lg font-normal font-['Titillium Web']">
                3.4k
              </div>
            </div>
          </div>
          <div class="w-[100%] h-[60%] overflow-hidden">
            <img
              className=" px-[20px] m-0 object-cover rounded-[10px]"
              src="/asset/thumbnail.png"
              alt="tumbnail1"
            />
          </div>
          <div className="flex justify-between items-center w-[100%] h-[70px] mt-1 px-[20px]">
            <img
              className="w-[60px] h-[60px] rounded-full m-0"
              src="/asset/sample.png"
              alt="sample"
            />
            <div className="flex flex-col w-[100%] ml-[15px]">
              <div className="text-black text-[20px] font-semibold font-['Titillium Web']">
                Title이 길면 slicing을 ...
              </div>
              <div className="text-neutral-700 text-[17px] font-normal font-['Titillium Web']">
                노마드코더
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[100%] relative">
        <div className="w-[100%] h-[100%] absolute bg-white bg-opacity-75 rounded-[10px]">
          <div className="w-[100%] h-[25px] flex justify-between items-center px-[23px] mt-3 mb-2">
            <div className="flex justify-between">
              <div className="w-[69.35px] h-[23px] mr-1">
                <div className="w-[69.35px] h-[22.46px] bg-slate-400 rounded-[20px]">
                  <div className="leading-[23px] text-center text-white text-[13px] font-semibold font-['Nanum Gothic']">
                    카테고리
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="flex justify-center w-[61.19px] text-center text-neutral-400 text-lg font-normal font-['Titillium Web']">
                1달 전
              </div>
              <img
                className="w-[17px] h-[17px] m-1 justify-center"
                src="/asset/eyeicon.png"
                alt="eyeicon"
              />
              <div className="flex justify-center w-[41.11px] text-center text-neutral-400 text-lg font-normal font-['Titillium Web']">
                3.4k
              </div>
            </div>
          </div>
          <div class="w-[100%] h-[60%] overflow-hidden">
            <img
              className=" px-[20px] m-0 object-cover rounded-[10px]"
              src="/asset/thumbnail.png"
              alt="tumbnail1"
            />
          </div>
          <div className="flex justify-between items-center w-[100%] h-[70px] mt-1 px-[20px]">
            <img
              className="w-[60px] h-[60px] rounded-full m-0"
              src="/asset/sample.png"
              alt="sample"
            />
            <div className="flex flex-col w-[100%] ml-[15px]">
              <div className="text-black text-[20px] font-semibold font-['Titillium Web']">
                Title이 길면 slicing을 ...
              </div>
              <div className="text-neutral-700 text-[17px] font-normal font-['Titillium Web']">
                노마드코더
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[100%] relative">
        <div className="w-[100%] h-[100%] absolute bg-white bg-opacity-75 rounded-[10px]">
          <div className="w-[100%] h-[25px] flex justify-between items-center px-[23px] mt-3 mb-2">
            <div className="flex justify-between">
              <div className="w-[69.35px] h-[23px] mr-1">
                <div className="w-[69.35px] h-[22.46px] bg-slate-400 rounded-[20px]">
                  <div className="leading-[23px] text-center text-white text-[13px] font-semibold font-['Nanum Gothic']">
                    카테고리
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="flex justify-center w-[61.19px] text-center text-neutral-400 text-lg font-normal font-['Titillium Web']">
                1달 전
              </div>
              <img
                className="w-[17px] h-[17px] m-1 justify-center"
                src="/asset/eyeicon.png"
                alt="eyeicon"
              />
              <div className="flex justify-center w-[41.11px] text-center text-neutral-400 text-lg font-normal font-['Titillium Web']">
                3.4k
              </div>
            </div>
          </div>
          <div class="w-[100%] h-[60%] overflow-hidden">
            <img
              className=" px-[20px] m-0 object-cover rounded-[10px]"
              src="/asset/thumbnail.png"
              alt="tumbnail1"
            />
          </div>
          <div className="flex justify-between items-center w-[100%] h-[70px] mt-1 px-[20px]">
            <img
              className="w-[60px] h-[60px] rounded-full m-0"
              src="/asset/sample.png"
              alt="sample"
            />
            <div className="flex flex-col w-[100%] ml-[15px]">
              <div className="text-black text-[20px] font-semibold font-['Titillium Web']">
                Title이 길면 slicing을 ...
              </div>
              <div className="text-neutral-700 text-[17px] font-normal font-['Titillium Web']">
                노마드코더
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[100%] relative">
        <div className="w-[100%] h-[100%] absolute bg-white bg-opacity-75 rounded-[10px]">
          <div className="w-[100%] h-[25px] flex justify-between items-center px-[23px] mt-3 mb-2">
            <div className="flex justify-between">
              <div className="w-[69.35px] h-[23px] mr-1">
                <div className="w-[69.35px] h-[22.46px] bg-slate-400 rounded-[20px]">
                  <div className="leading-[23px] text-center text-white text-[13px] font-semibold font-['Nanum Gothic']">
                    카테고리
                  </div>
                </div>
              </div>
              <div className="w-[69.35px] h-[23px] mr-1">
                <div className="w-[69.35px] h-[22.46px] bg-red-300 rounded-[20px]">
                  <div className="leading-[23px] text-center text-white text-[13px] font-semibold font-['Nanum Gothic']">
                    카테고리
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="flex justify-center w-[61.19px] text-center text-neutral-400 text-lg font-normal font-['Titillium Web']">
                1달 전
              </div>
              <img
                className="w-[17px] h-[17px] m-1 justify-center"
                src="/asset/eyeicon.png"
                alt="eyeicon"
              />
              <div className="flex justify-center w-[41.11px] text-center text-neutral-400 text-lg font-normal font-['Titillium Web']">
                3.4k
              </div>
            </div>
          </div>
          <div class="w-[100%] h-[60%] overflow-hidden">
            <img
              className=" px-[20px] m-0 object-cover rounded-[10px]"
              src="/asset/thumbnail.png"
              alt="tumbnail1"
            />
          </div>
          <div className="flex justify-between items-center w-[100%] h-[70px] mt-1 px-[20px]">
            <img
              className="w-[60px] h-[60px] rounded-full m-0"
              src="/asset/sample.png"
              alt="sample"
            />
            <div className="flex flex-col w-[100%] ml-[15px]">
              <div className="text-black text-[20px] font-semibold font-['Titillium Web']">
                Title이 길면 slicing을 ...
              </div>
              <div className="text-neutral-700 text-[17px] font-normal font-['Titillium Web']">
                노마드코더
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
