const UploadVideo = () => {
  return (
    <div className="relative flex justify-center flex-1">
      <img
        className="mx-[70px] w-[450px] my-0 flex-1"
        src="/asset/folder-gray.svg"
        alt="folder-gray"
      />
      <div className="absolute left-0 top-2 w-[40%] justify-center flex flex-shrink text-2xl">
        영상 업로드
      </div>
      <div className="absolute w-full justify-center items-center flex flex-col h-full gap-[20px]">
        <img
          className="m-0 flex-shrink w-[70px]"
          src="/asset/upload-video.svg"
          alt="upload-video"
        />
        <div className="flex flex-row gap-[10px]">
          <button className="border-[1px] px-[22px] py-[7px] rounded-[10px] border-black bg-white">
            파일 선택
          </button>
          <div className="flex items-center">선택한 파일 없음</div>
        </div>
        <div className="absolute flex-shrink-0 bottom-10">
          Drag & Drop 또는 클릭해서 파일을 업로드하세요.
        </div>
      </div>
    </div>
  );
};

const UploadThumbnail = () => {
  return (
    <div className="relative flex justify-center flex-1">
      <img
        className="mx-[70px] w-[450px] my-0 flex-1"
        src="/asset/folder-pink.svg"
        alt="folder-pink"
      />
      <div className="absolute left-0 top-2 w-[45%] justify-center flex flex-shrink text-2xl">
        썸네일 업로드
      </div>
      <div className="absolute w-full justify-center items-center flex flex-col h-full gap-[20px]">
        <img
          className="m-0 flex-shrink w-[70px]"
          src="/asset/upload-thumbnail.svg"
          alt="upload-thumbnail"
        />
        <div className="flex flex-row gap-[10px]">
          <button className="border-[1px] px-[22px] py-[7px] rounded-[10px] border-black bg-white">
            파일 선택
          </button>
          <div className="flex items-center">선택한 파일 없음</div>
        </div>
        <div className="absolute flex-shrink-0 bottom-10">
          Drag & Drop 또는 클릭해서 파일을 업로드하세요.
        </div>
      </div>
    </div>
  );
};

const UploadVideoNew = () => {
  return (
    <div className="pl-[250px] pr-[20px] pt-[150px]">
      <div className="flex flex-row gap-[30px]">
        <UploadVideo />
        <UploadThumbnail />
      </div>
    </div>
  );
};

export default UploadVideoNew;
