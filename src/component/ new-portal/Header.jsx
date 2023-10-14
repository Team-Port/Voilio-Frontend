const Header = () => {
  return (
    <div className="bg-white">
      <div className="relative flex flex-row w-full h-[76px]">
        <img className="absolute top-[-16px]" src="/asset/bg-header.svg" />
        <img
          className="absolute left-[20px] w-[130px]"
          src="/asset/new-logo.svg"
          alt="voilio-logo"
        />
        <div className="flex items-center w-auto px-[18px] absolute flex-shrink-0 mt-[10px] left-[210px] rounded-[63px] border-[0.5px] border-[#6E6E6E] h-[55px]">
          <img className="w-[31px]" src="/asset/Icon_magnifier.svg" />
          <input
            className="text-[22px] ml-[11px] w-full outline-none"
            type="text"
            placeholder="Search anything ..."
          />
          <img className="ml-[270px]" src="/asset/Icon_option.svg" />
        </div>
        <div className="w-full flex flex-shrink-0 justify-end items-center gap-[25px] pr-[25px]">
          <img src="/asset/Icon_upload.svg" />
          <img src="/asset/Icon_chat.svg" />
          <img src="/asset/Icon_mypage.svg" />
        </div>
      </div>
      <div className="bg-[#F5F5F7] h-[100vh]" />
    </div>
  );
};

export default Header;
