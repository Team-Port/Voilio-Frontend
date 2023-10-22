import { fullscreen } from "@uiw/react-md-editor";
import ReactQuill from "react-quill";

const modules = {
  toolbar: {
    container: [
      [{ header: [1, 2, 3, false] }],
      [{ align: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }, "link"],
      [
        {
          color: [
            "#000000",
            "#e60000",
            "#ff9900",
            "#ffff00",
            "#008a00",
            "#0066cc",
            "#9933ff",
            "#ffffff",
            "#facccc",
            "#ffebcc",
            "#ffffcc",
            "#cce8cc",
            "#cce0f5",
            "#ebd6ff",
            "#bbbbbb",
            "#f06666",
            "#ffc266",
            "#ffff66",
            "#66b966",
            "#66a3e0",
            "#c285ff",
            "#888888",
            "#a10000",
            "#b26b00",
            "#b2b200",
            "#006100",
            "#0047b2",
            "#6b24b2",
            "#444444",
            "#5c0000",
            "#663d00",
            "#666600",
            "#003700",
            "#002966",
            "#3d1466",
          ],
        },
        { background: [] },
      ],
      ["code-block"],
      ["image"],
    ],
  },
};

const UploadVideo = () => {
  return (
    <div className="relative flex justify-center flex-1">
      <img
        className="lg:mx-[70px] w-[450px] my-0 flex-1"
        src="/asset/folder-gray.svg"
        alt="folder-gray"
      />
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
        <div className="absolute bottom-0 flex-shrink-0 md:bottom-10">
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
        className="lg:mx-[70px] w-[450px] my-0 flex-1"
        src="/asset/folder-pink.svg"
        alt="folder-pink"
      />
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
        <div className="absolute bottom-0 flex-shrink-0 md:bottom-10">
          Drag & Drop 또는 클릭해서 파일을 업로드하세요.
        </div>
      </div>
    </div>
  );
};

const UploadVideoNew = () => {
  return (
    <div className="pl-[250px] pr-[30px] pt-[115px]">
      <div className="flex flex-col">
        <div className="flex flex-row gap-[30px]">
          <UploadVideo />
          <UploadThumbnail />
        </div>
        <div className="z-10 mt-[50px] mx-[0px] xl:mx-[70px]">
          <ReactQuill
            className="h-[500px] rounded-[10px]"
            value={null}
            modules={modules}
            placeholder="내용을 입력하세요."
          />
          <div className="flex justify-end mt-[70px] mb-[30px]">
            <button className="px-[14px] py-[5px] rounded-[10px] border-[1px] flex justify-center border-black z-10 bg-white">
              등록
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadVideoNew;
