import React from "react";

const Profile = ({ nickname }) => {
  return (
    <div className="flex h-[250px] gap-[50px]">
      <div className="flex items-center ml-[20px] mt-[20px]">
        <img
          className="w-[220px] h-[220px] rounded-full object-cover m-0"
          src="https://voilio.s3.ap-northeast-2.amazonaws.com/thumbnail/test8.png"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-[10px] justify-center">
        <div className="text-4xl font-bold">{nickname || "Loading..."}</div>
        <div className="flex gap-[30px] text-xl text-zinc-500 mt-[5px]">
          <div className="">팔로워</div>
          <div className="">동영상</div>
          <div className="">게시글</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
