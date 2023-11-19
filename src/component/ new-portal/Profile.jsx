import React from "react";

const Profile = ({ nickname, imageUrl, following }) => {
  return (
    <div className="fixed flex h-[200px] gap-[50px] w-full bg-[#F5F5F7] z-20">
      <div className="flex items-center ml-[20px] ">
        <img
          className="w-[150px] h-[150px] rounded-full object-cover m-0"
          // src={
          //   imageUrl ||
          //   "/Users/a82108/Desktop/Voilio/Voilio-Frontend/public/asset/sample.png"
          // }
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
          <div className="">팔로워 {following}</div>
          {following}
          <div className="">동영상</div>
          <div className="">게시글</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
