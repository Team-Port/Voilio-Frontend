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
    <div className="flex mb-4">
      <div className="flex-1 p-4 mr-4 w-auto h-auto relative">
        <div className="w-[490.14px] h-[386px] left-[928px] top-[830px] absolute">
          <div className="w-[435px] h-[386px] left-0 top-0 absolute bg-white bg-opacity-75 rounded-[10px]" />
          <img
            className="w-[391.98px] h-[249.47px] left-[21.99px] top-[44.21px] absolute rounded-[10px]"
            src="/asset/tumbnail.png"
          />
          <div className="w-[69.35px] h-[29px] left-[22.18px] top-[8.37px] absolute">
            <div className="w-[69.35px] h-[22.46px] left-0 top-[2.90px] absolute bg-slate-400 rounded-[20px]" />
            <div className="w-14 h-[29px] left-[6.70px] top-0 absolute text-center text-white text-[13px] font-semibold font-['Nanum Gothic']">
              카테고리
            </div>
          </div>
          <div className="w-[69.35px] h-[29px] left-[97.18px] top-[8.37px] absolute">
            <div className="w-[69.35px] h-[22.46px] left-0 top-[2.90px] absolute bg-red-300 rounded-[20px]" />
            <div className="w-14 h-[29px] left-[6.70px] top-0 absolute text-center text-white text-[13px] font-semibold font-['Nanum Gothic']">
              카테고리
            </div>
          </div>
          <div className="w-[391.05px] h-[58.70px] left-[99.09px] top-[312px] absolute">
            <div className="w-[391.05px] h-[28.99px] left-0 top-[29.71px] absolute text-neutral-700 text-[21px] font-normal font-['Titillium Web'] leading-relaxed">
              노마드코더
            </div>
            <div className="w-[299.24px] h-[24.21px] left-[0.85px] top-0 absolute text-black text-[27px] font-semibold font-['Titillium Web']">
              Title이 길면 slicing을 ...
            </div>
          </div>
          <div className="w-[41.11px] h-[35.79px] left-[380.66px] top-[8px] absolute text-neutral-400 text-lg font-normal font-['Titillium Web']">
            3.4k
          </div>
          <div className="w-[61.19px] h-[35.79px] left-[308px] top-[9.11px] absolute text-neutral-400 text-lg font-normal font-['Titillium Web']">
            1달 전
          </div>
          <img
            className="w-[70px] h-[70px] left-[22px] top-[304px] absolute rounded-full"
            src="/asset/tumbnail.png"
          />
          <div className="w-[14.34px] h-[13.35px] left-[361.54px] top-[16.42px] absolute"></div>
        </div>
        <div className="flex-1 p-4 mr-4 w-[490.14px] h-[386px] left-[464px] top-[830px] absolute">
          <div className="w-[435px] h-[386px] left-0 top-0 absolute bg-white bg-opacity-75 rounded-[10px]" />
          <img
            className="w-[391.98px] h-[249.47px] left-[21.99px] top-[44.21px] absolute rounded-[10px]"
            src="/asset/tumbnail.png"
          />
          <div className="w-[69.35px] h-[29px] left-[22.18px] top-[8.37px] absolute">
            <div className="w-[69.35px] h-[22.46px] left-0 top-[2.90px] absolute bg-slate-400 rounded-[20px]" />
            <div className="w-14 h-[29px] left-[6.70px] top-0 absolute text-center text-white text-[13px] font-semibold font-['Nanum Gothic']">
              카테고리
            </div>
          </div>
          <div className="w-[391.05px] h-[58.70px] left-[99.09px] top-[312px] absolute">
            <div className="w-[391.05px] h-[28.99px] left-0 top-[29.71px] absolute text-neutral-700 text-[21px] font-normal font-['Titillium Web'] leading-relaxed">
              Sea Pearl
            </div>
            <div className="w-[299.24px] h-[24.21px] left-[0.85px] top-0 absolute text-black text-[27px] font-semibold font-['Titillium Web']">
              Title
            </div>
          </div>
          <div className="w-[41.11px] h-[35.79px] left-[380.66px] top-[8px] absolute text-neutral-400 text-lg font-normal font-['Titillium Web']">
            3.4k
          </div>
          <div className="w-[61.19px] h-[35.79px] left-[308px] top-[9.11px] absolute text-neutral-400 text-lg font-normal font-['Titillium Web']">
            1달 전
          </div>
          <img
            className="w-[70px] h-[70px] left-[22px] top-[304px] absolute rounded-full"
            src="/asset/tumbnail.png"
          />
          <div className="w-[14.34px] h-[13.35px] left-[361.54px] top-[16.42px] absolute"></div>
        </div>
        <div className="flex-1 p-4 mr-4 w-[490.14px] h-[386px] left-0 top-[830px] absolute">
          <div className="w-[435px] h-[386px] left-0 top-0 absolute bg-white bg-opacity-75 rounded-[10px]" />
          <img
            className="w-[391.98px] h-[249.47px] left-[21.99px] top-[44.21px] absolute rounded-[10px]"
            src="/asset/tumbnail.png"
          />
          <div className="w-[69.35px] h-[29px] left-[22.18px] top-[8.37px] absolute">
            <div className="w-[69.35px] h-[22.46px] left-0 top-[2.90px] absolute bg-rose-200 rounded-[20px]" />
            <div className="w-14 h-[29px] left-[6.70px] top-0 absolute text-center text-white text-[13px] font-semibold font-['Nanum Gothic']">
              카테고리
            </div>
          </div>
          <div className="w-[391.05px] h-[58.70px] left-[99.09px] top-[312px] absolute">
            <div className="w-[391.05px] h-[28.99px] left-0 top-[29.71px] absolute text-neutral-700 text-[21px] font-normal font-['Titillium Web'] leading-relaxed">
              노마드코더
            </div>
            <div className="w-[299.24px] h-[24.21px] left-[0.85px] top-0 absolute text-black text-[27px] font-semibold font-['Titillium Web']">
              Title이 길면 slicing을 ...
            </div>
          </div>
          <div className="w-[41.11px] h-[35.79px] left-[380.66px] top-[8px] absolute text-neutral-400 text-lg font-normal font-['Titillium Web']">
            3.4k
          </div>
          <div className="w-[61.19px] h-[35.79px] left-[308px] top-[9.11px] absolute text-neutral-400 text-lg font-normal font-['Titillium Web']">
            1달 전
          </div>
          <img
            className="w-[70px] h-[70px] left-[22px] top-[304px] absolute rounded-full"
            src="/asset/tumbnail.png"
          />
          <div className="w-[14.34px] h-[13.35px] left-[361.54px] top-[16.42px] absolute"></div>
        </div>
      </div>
      {/* <div className="w-[490.14px] h-[386px] left-[928px] top-[417px] absolute">
        <div className="w-[435px] h-[386px] left-0 top-0 absolute bg-white bg-opacity-75 rounded-[10px]" />
        <img
          className="w-[391.98px] h-[249.47px] left-[21.99px] top-[44.21px] absolute rounded-[10px]"
          src="/asset/tumbnail.png"
        />
        <div className="w-[69.35px] h-[29px] left-[22.18px] top-[8.37px] absolute">
          <div className="w-[69.35px] h-[22.46px] left-0 top-[2.90px] absolute bg-rose-200 rounded-[20px]" />
          <div className="w-14 h-[29px] left-[6.70px] top-0 absolute text-center text-white text-[13px] font-semibold font-['Nanum Gothic']">
            카테고리
          </div>
        </div>
        <div className="w-[391.05px] h-[58.70px] left-[99.09px] top-[312px] absolute">
          <div className="w-[391.05px] h-[28.99px] left-0 top-[29.71px] absolute text-neutral-700 text-[21px] font-normal font-['Titillium Web'] leading-relaxed">
            노마드코더
          </div>
          <div className="w-[299.24px] h-[24.21px] left-[0.85px] top-0 absolute text-black text-[27px] font-semibold font-['Titillium Web']">
            Title
          </div>
        </div>
        <div className="w-[41.11px] h-[35.79px] left-[380.66px] top-[8px] absolute text-neutral-400 text-lg font-normal font-['Titillium Web']">
          3.4k
        </div>
        <div className="w-[61.19px] h-[35.79px] left-[308px] top-[9.11px] absolute text-neutral-400 text-lg font-normal font-['Titillium Web']">
          1달 전
        </div>
        <img
          className="w-[70px] h-[70px] left-[22px] top-[304px] absolute rounded-full"
          src="/asset/tumbnail.png"
        />
        <div className="w-[14.34px] h-[13.35px] left-[361.54px] top-[16.42px] absolute"></div>
      </div>
      <div className="w-[490.14px] h-[386px] left-[464px] top-[417px] absolute">
        <div className="w-[435px] h-[386px] left-0 top-0 absolute bg-white bg-opacity-75 rounded-[10px]" />
        <img
          className="w-[391.98px] h-[249.47px] left-[21.99px] top-[44.21px] absolute rounded-[10px]"
          src="/asset/tumbnail.png"
        />
        <div className="w-[69.35px] h-[29px] left-[22.18px] top-[8.37px] absolute">
          <div className="w-[69.35px] h-[22.46px] left-0 top-[2.90px] absolute bg-emerald-200 rounded-[20px]" />
          <div className="w-14 h-[29px] left-[6.70px] top-0 absolute text-center text-white text-[13px] font-semibold font-['Nanum Gothic']">
            카테고리
          </div>
        </div>
        <div className="w-[391.05px] h-[58.70px] left-[99.09px] top-[312px] absolute">
          <div className="w-[391.05px] h-[28.99px] left-0 top-[29.71px] absolute text-neutral-700 text-[21px] font-normal font-['Titillium Web'] leading-relaxed">
            노마드코더
          </div>
          <div className="w-[299.24px] h-[24.21px] left-[0.85px] top-0 absolute text-black text-[27px] font-semibold font-['Titillium Web']">
            Title
          </div>
        </div>
        <div className="w-[41.11px] h-[35.79px] left-[380.66px] top-[8px] absolute text-neutral-400 text-lg font-normal font-['Titillium Web']">
          3.4k
        </div>
        <div className="w-[61.19px] h-[35.79px] left-[308px] top-[9.11px] absolute text-neutral-400 text-lg font-normal font-['Titillium Web']">
          1달 전
        </div>
        <img
          className="w-[70px] h-[70px] left-[22px] top-[304px] absolute rounded-full"
          src="/asset/tumbnail.png"
        />
        <div className="w-[14.34px] h-[13.35px] left-[361.54px] top-[16.42px] absolute"></div>
      </div>
      <div className="w-[490.14px] h-[386px] left-0 top-[417px] absolute">
        <div className="w-[435px] h-[386px] left-0 top-0 absolute bg-white bg-opacity-75 rounded-[10px]" />
        <img
          className="w-[391.98px] h-[249.47px] left-[21.99px] top-[44.21px] absolute rounded-[10px]"
          src="/asset/tumbnail.png"
        />
        <div className="w-[69.35px] h-[29px] left-[22.18px] top-[8.37px] absolute">
          <div className="w-[69.35px] h-[22.46px] left-0 top-[2.90px] absolute bg-red-300 rounded-[20px]" />
          <div className="w-14 h-[29px] left-[6.70px] top-0 absolute text-center text-white text-[13px] font-semibold font-['Nanum Gothic']">
            카테고리
          </div>
        </div>
        <div className="w-[391.05px] h-[58.70px] left-[99.09px] top-[312px] absolute">
          <div className="w-[391.05px] h-[28.99px] left-0 top-[29.71px] absolute text-neutral-700 text-[21px] font-normal font-['Titillium Web'] leading-relaxed">
            코딩애플
          </div>
          <div className="w-[299.24px] h-[24.21px] left-[0.85px] top-0 absolute text-black text-[27px] font-semibold font-['Titillium Web']">
            Title
          </div>
        </div>
        <div className="w-[41.11px] h-[35.79px] left-[380.66px] top-[8px] absolute text-neutral-400 text-lg font-normal font-['Titillium Web']">
          3.4k
        </div>
        <div className="w-[61.19px] h-[35.79px] left-[308px] top-[9.11px] absolute text-neutral-400 text-lg font-normal font-['Titillium Web']">
          1달 전
        </div>
        <img
          className="w-[70px] h-[70px] left-[22px] top-[304px] absolute rounded-full"
          src="/asset/tumbnail.png"
        />
        <div className="w-[14.34px] h-[13.35px] left-[361.54px] top-[16.42px] absolute"></div>
      </div>
      <div className="w-[490.14px] h-[386px] left-[928px] top-0 absolute">
        <div className="w-[435px] h-[386px] left-0 top-0 absolute bg-white bg-opacity-75 rounded-[10px]" />
        <img
          className="w-[391.98px] h-[249.47px] left-[21.99px] top-[44.21px] absolute rounded-[10px]"
          src="/asset/tumbnail.png"
        />
        <div className="w-[69.35px] h-[29px] left-[22.18px] top-[8.37px] absolute">
          <div className="w-[69.35px] h-[22.46px] left-0 top-[2.90px] absolute bg-slate-400 rounded-[20px]" />
          <div className="w-14 h-[29px] left-[6.70px] top-0 absolute text-center text-white text-[13px] font-semibold font-['Nanum Gothic']">
            카테고리
          </div>
        </div>
        <div className="w-[69.35px] h-[29px] left-[97.18px] top-[8.37px] absolute">
          <div className="w-[69.35px] h-[22.46px] left-0 top-[2.90px] absolute bg-red-300 rounded-[20px]" />
          <div className="w-14 h-[29px] left-[6.70px] top-0 absolute text-center text-white text-[13px] font-semibold font-['Nanum Gothic']">
            카테고리
          </div>
        </div>
        <div className="w-[391.05px] h-[58.70px] left-[99.09px] top-[312px] absolute">
          <div className="w-[391.05px] h-[28.99px] left-0 top-[29.71px] absolute text-neutral-700 text-[21px] font-normal font-['Titillium Web'] leading-relaxed">
            T1
          </div>
          <div className="w-[299.24px] h-[24.21px] left-[0.85px] top-0 absolute">
            <span style="text-black text-[27px] font-semibold font-['Titillium Web'] underline">
              🥇국대가 돌아왔다🥇 |{" "}
            </span>
            <span style="text-black text-[27px] font-semibold font-['Titillium Web']">
              ...
            </span>
          </div>
        </div>
        <div className="w-[41.11px] h-[35.79px] left-[375.66px] top-[8px] absolute text-neutral-400 text-lg font-normal font-['Titillium Web']">
          3.4M
        </div>
        <div className="w-[61.19px] h-[35.79px] left-[303px] top-[9.11px] absolute text-neutral-400 text-lg font-normal font-['Titillium Web']">
          1일 전
        </div>
        <img
          className="w-[70px] h-[70px] left-[22px] top-[304px] absolute rounded-full"
          src="/asset/tumbnail.png"
        />
        <div className="w-10 h-[22.46px] left-[366px] top-[262px] absolute bg-black bg-opacity-20 rounded-md" />
        <div className="w-[31px] h-[21px] left-[371px] top-[263.10px] absolute text-center text-white text-[13px] font-semibold font-['Nanum Gothic']">
          3:17
        </div>
        <div className="w-[14.34px] h-[13.35px] left-[356.54px] top-[16.42px] absolute"></div>
      </div>
      <div className="w-[490.14px] h-[386px] left-[464px] top-0 absolute">
        <div className="w-[435px] h-[386px] left-0 top-0 absolute bg-white bg-opacity-75 rounded-[10px]" />
        <img
          className="w-[391.98px] h-[249.47px] left-[21.99px] top-[44.21px] absolute rounded-[10px]"
          src="/asset/tumbnail.png"
        />
        <div className="w-[69.35px] h-[29px] left-[22.18px] top-[8.37px] absolute">
          <div className="w-[69.35px] h-[22.46px] left-0 top-[2.90px] absolute bg-slate-400 rounded-[20px]" />
          <div className="w-14 h-[29px] left-[6.70px] top-0 absolute text-center text-white text-[13px] font-semibold font-['Nanum Gothic']">
            카테고리
          </div>
        </div>
        <div className="w-[391.05px] h-[58.70px] left-[99.09px] top-[312px] absolute">
          <div className="w-[391.05px] h-[28.99px] left-0 top-[29.71px] absolute text-neutral-700 text-[21px] font-normal font-['Titillium Web'] leading-relaxed">
            Sea Pearl
          </div>
          <div className="w-[299.24px] h-[24.21px] left-[0.85px] top-0 absolute text-black text-[27px] font-semibold font-['Titillium Web']">
            Title
          </div>
        </div>
        <div className="w-[41.11px] h-[35.79px] left-[380.66px] top-[8px] absolute text-neutral-400 text-lg font-normal font-['Titillium Web']">
          3.4k
        </div>
        <div className="w-[61.19px] h-[35.79px] left-[308px] top-[9.11px] absolute text-neutral-400 text-lg font-normal font-['Titillium Web']">
          1달 전
        </div>
        <img
          className="w-[70px] h-[70px] left-[22px] top-[304px] absolute rounded-full"
          src="/asset/tumbnail.png"
        />
        <div className="w-10 h-[22.46px] left-[366px] top-[264px] absolute bg-black bg-opacity-20 rounded-md" />
        <div className="w-[31px] h-[21px] left-[371px] top-[265.10px] absolute text-center text-white text-[13px] font-semibold font-['Nanum Gothic']">
          3:17
        </div>
        <div className="w-[14.34px] h-[13.35px] left-[361.54px] top-[16.42px] absolute"></div>
      </div>
      <div className="w-[490.14px] h-[386px] left-0 top-0 absolute">
        <div className="w-[435px] h-[386px] left-0 top-0 absolute bg-white bg-opacity-75 rounded-[10px]" />
        <img
          className="w-[391.98px] h-[249.47px] left-[21.99px] top-[44.21px] absolute rounded-[10px]"
          src="/asset/tumbnail.png"
        />
        <div className="w-[69.35px] h-[29px] left-[22.18px] top-[8.37px] absolute">
          <div className="w-[69.35px] h-[22.46px] left-0 top-[2.90px] absolute bg-rose-200 rounded-[20px]" />
          <div className="w-14 h-[29px] left-[6.70px] top-0 absolute text-center text-white text-[13px] font-semibold font-['Nanum Gothic']">
            카테고리
          </div>
        </div>
        <div className="w-10 h-[22.46px] left-[367px] top-[263.90px] absolute bg-black bg-opacity-20 rounded-md" />
        <div className="w-[391.05px] h-[58.70px] left-[99.09px] top-[312px] absolute">
          <div className="w-[391.05px] h-[28.99px] left-0 top-[29.71px] absolute text-neutral-700 text-[21px] font-normal font-['Titillium Web'] leading-relaxed">
            노마드코더
          </div>
          <div className="w-[299.24px] h-[24.21px] left-[0.85px] top-0 absolute text-black text-[27px] font-semibold font-['Titillium Web']">
            Title이 길면 slicing을 ...
          </div>
        </div>
        <div className="w-[41.11px] h-[35.79px] left-[380.66px] top-[8px] absolute text-neutral-400 text-lg font-normal font-['Titillium Web']">
          3.4k
        </div>
        <div className="w-[61.19px] h-[35.79px] left-[308px] top-[9.11px] absolute text-neutral-400 text-lg font-normal font-['Titillium Web']">
          1달 전
        </div>
        <img
          className="w-[70px] h-[70px] left-[22px] top-[304px] absolute rounded-full"
          src="/asset/tumbnail.png  "
        />
        <div className="w-[14.34px] h-[13.35px] left-[361.54px] top-[16.42px] absolute"></div>
      </div> */}
    </div>
  );
};

export default VideoItem;
