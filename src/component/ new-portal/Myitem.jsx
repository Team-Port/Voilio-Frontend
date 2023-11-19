import React from "react";
import "../../../src/styles/tailwind.css";
import Category from "./Category";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { ko } from "date-fns/locale";

const Myitem = (item) => {
  const data = item.item;
  const formatDate = formatDistanceToNow(new Date(data.createAt), {
    addSuffix: true,
    locale: ko,
  });

  return (
    <div className="px-[15px] flex flex-col gap-[10px] py-[10px] rounded-[10px] h-[330px] bg-white shadow-sm">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-[5px]">
          <Category category={data.category1} />
          <Category category={data.category2} />
        </div>
        <div className="flex flex-row items-center">
          <div className="text-sm mr-[8px]">{formatDate}</div>
          <img
            className="m-0 mr-[4px]"
            src="/asset/Icon_eye.svg"
            alt="eye icon"
          />
          <div className="text-sm pb-[1px]">{data.view}</div>
        </div>
      </div>
      {data.thumbnailUrl ? (
        <img
          className="h-full rounded-[10px] object-cover overflow-hidden"
          src={data.thumbnailUrl}
          alt="thumbnail"
        />
      ) : (
        <div className="bg-gray-50 rounded-[10px] h-full" />
      )}
      <div className="flex flex-row gap-[10px] items-center">
        <div className="flex flex-col">
          <div className="text-lg font-semibold line-clamp-2">{data.title}</div>
          <div className="text-sm">{data.content}</div>
        </div>
      </div>
    </div>
  );
};

export default Myitem;
