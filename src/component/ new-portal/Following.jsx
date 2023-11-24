import React from "react";

const Following = ({ nicknames }) => {
  return (
    <div className="flex justify-center w-[135px] pl-[8px] text-center z-10 origin-top-right rounded-md bg-white shadow-lg focus:outline-none">
      <div className="w-full max-h-32 overflow-y-auto flex flex-col gap-[5px] text-gray-700 py-2 text-base text-center">
        {nicknames &&
          nicknames.map((name, index) => (
            <button className="hover:bg-slate-200" key={index}>
              {name}
            </button>
          ))}
      </div>
    </div>
  );
};

export default Following;
