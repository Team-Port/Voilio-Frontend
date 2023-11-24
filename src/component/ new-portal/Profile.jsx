import React from "react";

const Profile = ({
  nickname,
  imageUrl,
  videoCount,
  followerCount,
  normalCount,
}) => {
  return (
    <div className="fixed flex w-full h-[200px] gap-[50px] z-30">
      <div className="flex items-center ml-[20px] ">
        <img
          className="w-[150px] h-[150px] rounded-full object-cover m-0"
          src={imageUrl}
          alt=""
        />
      </div>
      <div className="flex flex-col gap-[10px] justify-center">
        <div className="flex gap-[15px]">
          <div className="text-4xl font-bold">{nickname || "Loading..."}</div>
          <img
            className="w-[25px] h-[25px] mt-[6px]"
            src="/asset/icon_edit.svg"
          ></img>
        </div>
        <div className="flex gap-[30px] text-xl text-zinc-500 mt-[5px]">
          <div className="">팔로워 {followerCount}</div>
          <div className="">동영상 {videoCount}</div>
          <div className="">게시글 {normalCount}</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
