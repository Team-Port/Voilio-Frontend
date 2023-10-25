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

const TextEditor = () => {
  return (
    <div className="flex flex-col z-10 mt-[30px] mx-[0px] xl:mx-[70px] gap-[30px]">
      <input
        className="outline-none border-b-[1px] bg-white bg-opacity-0 border-[#CCCCCC] px-[10px] py-[10px]"
        placeholder="제목"
      />
      <ReactQuill className="h-[500px]" value={null} modules={modules} />
      <div className="flex justify-end mt-[40px] mb-[30px]">
        <button className="px-[14px] py-[5px] rounded-[10px] border-[1px] flex justify-center border-black z-10 bg-white">
          등록
        </button>
      </div>
    </div>
  );
};

export default TextEditor;
