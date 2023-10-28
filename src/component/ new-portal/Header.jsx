import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

function useOutSideRef() {
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
      }
    }
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  return ref;
}

const SearchBar = () => {
  return (
    <div className="relative h-full py-[15px] left-[235px] flex-shrink-0">
      <div className="flex h-full w-full items-center px-[18px] rounded-[63px] border-[0.5px] border-[#6E6E6E]">
        <img
          className="w-[25px]"
          src="/asset/Icon_magnifier.svg"
          alt="Icon_magnifier"
        />
        <div className="w-full">
          <input
            className="text-[20px] w-[95%] ml-[11px] mr-[150px] outline-none"
            type="text"
            placeholder="Search anything ..."
          />
        </div>
        <img
          className="hover:cursor-pointer"
          src="/asset/Icon_option.svg"
          alt="Icon_option"
        />
      </div>
    </div>
  );
};

const UploadModal = ({ navigate, showModal, setShowModal }) => {
  const modalRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleClickOutside = (event) => {
    if (modalRef && !modalRef.current.contains(event.target)) {
      setShowModal(false);
    } else {
      setShowModal(true);
    }
  };

  return (
    <div
      ref={modalRef}
      className="absolute px-[13px] z-30 py-[8px] mt-[10px] border-gray-300 border-[1px] bg-white rounded-[8px]"
    >
      <button
        className="hover:cursor-pointer"
        onClick={() => {
          setShowModal(false);
          navigate("/new-portal/upload-video");
        }}
      >
        동영상 업로드하기
      </button>
      <div className="bg-gray-300 h-[1px] my-[5px]" />
      <button
        className="hover:cursor-pointer"
        onClick={() => {
          setShowModal(false);
          navigate("/new-portal/upload-post");
        }}
      >
        게시글 업로드하기
      </button>
    </div>
  );
};

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();
  const outsideRef = useOutSideRef();

  return (
    <div
      className="fixed w-full h-[85px] bg-white flex flex-row z-20"
      ref={outsideRef}
    >
      <div className="flex flex-row">
        <img
          className="absolute left-0 m-0"
          src="/asset/bg-header-rounded.svg"
          alt="bg-header-rounded"
        />
        <img
          className="absolute left-[25px] top-[20px] m-0 w-[150px] hover:cursor-pointer"
          src="/asset/new-logo.svg"
          alt="new-logo"
          onClick={() => navigate("/new-portal")}
        />
      </div>
      <SearchBar />
      <div className="w-full flex flex-row justify-end items-center gap-[25px] pr-[25px]">
        <div>
          <img
            className="hover:cursor-pointer"
            src="/asset/Icon_upload.svg"
            alt="Icon_upload"
            onClick={() => setShowModal(true)}
          />
          {showModal && (
            <UploadModal
              navigate={navigate}
              showModal={showModal}
              setShowModal={setShowModal}
            />
          )}
        </div>
        <img
          className="hover:cursor-pointer"
          src="/asset/Icon_chat.svg"
          alt="Icon_chat"
          onClick={() => navigate("/new-portal/chatRooms")}
        />
        <img
          className="hover:cursor-pointer"
          src="/asset/Icon_mypage.svg"
          alt="Icon_mypage"
          onClick={() => navigate("/new-portal/mypage")}
        />
      </div>
    </div>
  );
};

export default Header;
