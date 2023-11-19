import React from "react";
import "../../../src/styles/tailwind.css";
import Category from "../../component/ new-portal/Category";
import { formatDistanceToNow } from "date-fns";
import { ko } from "date-fns/locale";

const VideoItem = ({
  title,
  // summary,
  category1,
  category2,
  createAt,
  // imageUrl,
  division,
  thumbnailUrl,
  view,
  userSimpleDto,
}) => {
  const formatDate = formatDistanceToNow(new Date(createAt), {
    addSuffix: true,
    locale: ko,
  });
  const { nickname, imageUrl } = userSimpleDto;

  return (
    <div className="px-[15px] flex flex-col gap-[10px] py-[10px] rounded-[10px] h-[330px] bg-white shadow-sm">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-[5px]">
          <Category category={category1} />
          <Category category={category2} />
        </div>
        <div className="flex flex-row items-center">
          <div className="text-sm mr-[8px]">{formatDate}</div>
          <img
            className="m-0 mr-[4px]"
            src="/asset/Icon_eye.svg"
            alt="eye icon"
          />
          <div className="text-sm pb-[1px]">{view}</div>
        </div>
      </div>
      {thumbnailUrl ? (
        <img
          className="h-full rounded-[10px] object-cover overflow-hidden"
          src={thumbnailUrl}
          alt="thumbnail"
        />
      ) : (
        <div className="bg-gray-50 rounded-[10px] h-full" />
      )}
      <div className="flex flex-row gap-[10px] items-center">
        <img
          className="m-0 w-[60px] h-[60px] object-cover rounded-full"
          src={imageUrl}
          alt="user profile"
        />
        <div className="flex flex-col">
          <div className="text-lg font-semibold line-clamp-2">{title}</div>
          <div className="text-sm">{nickname}</div>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
