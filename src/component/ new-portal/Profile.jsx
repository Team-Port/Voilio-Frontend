import React from "react";

const Profile = ({ nickname, imageUrl, following }) => {
  return (
    <div className="flex h-[250px] gap-[50px]">
      <div className="flex items-center ml-[20px] mt-[20px]">
        <img
          className="w-[220px] h-[220px] rounded-full object-cover m-0"
          src={
            imageUrl ||
            "/Users/a82108/Desktop/Voilio/Voilio-Frontend/public/asset/sample.png"
          }
          alt=""
        />
      </div>
      <div className="flex flex-col gap-[10px] justify-center">
        <div className="text-4xl font-bold">{nickname || "Loading..."}</div>
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
