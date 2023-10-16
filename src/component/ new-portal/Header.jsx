const Header = () => {
  return (
    <div className="fixed w-full h-[85px] bg-white flex flex-row">
      <div className="flex flex-row">
        <img
          className="absolute left-0 m-0"
          src="/asset/bg-header-rounded.svg"
          alt="bg-header-rounded"
        />
        <img
          className="absolute left-[25px] top-[20px] m-0 w-[150px]"
          src="/asset/new-logo.svg"
          alt="new-logo"
        />
      </div>
      <div className="relative h-full py-[15px] left-[235px] flex-shrink-0">
        <div className="flex h-full items-center px-[18px] rounded-[63px] border-[0.5px] border-[#6E6E6E]">
          <img
            className="w-[25px]"
            src="/asset/Icon_magnifier.svg"
            alt="Icon_magnifier"
          />
          <input
            className="text-[20px] ml-[11px] mr-[150px] w-full outline-none"
            type="text"
            placeholder="Search anything ..."
          />
          <img className="" src="/asset/Icon_option.svg" alt="Icon_option" />
        </div>
      </div>
      <div className="w-full flex flex-row justify-end items-center gap-[25px] pr-[25px]">
        <img src="/asset/Icon_upload.svg" alt="Icon_upload" />
        <img src="/asset/Icon_chat.svg" alt="Icon_chat" />
        <img src="/asset/Icon_mypage.svg" alt="Icon_mypage" />
      </div>
    </div>
  );
};

export default Header;
