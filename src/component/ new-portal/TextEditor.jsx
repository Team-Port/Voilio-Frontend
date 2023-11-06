import ReactQuill from "react-quill";
import ReactSelect from "react-select";
import { components } from "react-select";

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

const TextEditor = ({
  categories,
  editorHtml,
  handleTitleChange,
  handleCategoryChange,
  handleEditorChange,
}) => {
  const Option = (props) => {
    return (
      <div>
        <components.Option {...props}>
          <input
            type="checkbox"
            checked={props.isSelected}
            onChange={() => null}
          />{" "}
          <label>{props.label}</label>
        </components.Option>
      </div>
    );
  };
  
  const categoryOld = [
    { value: "IT", label: "IT" },
    { value: "BACKEND", label: "Backend" },
    { value: "JAVA", label: "Java" },
    { value: "PYTHON", label: "Python" },
    { value: "REACT", label: "React" },
    { value: "DANCE", label: "Dance" },
    { value: "LANGUAGE", label: "language" },
  ]

  const category = [
    { value: "IT", label: "IT" },
    { value: "design", label: "Design" },
    { value: "dance", label: "Dance" },
    { value: "exercise", label: "Exercise" },
    { value: "language", label: "Language" },
    { value: "sales", label: "Sales" },
  ];

  return (
    <div className="flex flex-col z-10 mt-[30px] mx-[0px] xl:mx-[70px] gap-[30px]">
      <div className="flex flex-row gap-[10px] items-center">
        <input
          type="text"
          className="flex-grow outline-none border-b-[1px] bg-white bg-opacity-0 border-[#CCCCCC] px-[10px] py-[10px]"
          placeholder="제목"
          onChange={handleTitleChange}
        />
        <ReactSelect
          className="w-[35%] lg:w-[30%] xl:w-[26%] outline-none"
          placeholder="카테고리를 선택하세요."
          options={categoryOld}
          isMulti
          closeMenuOnSelect={true}
          hideSelectedOptions={false}
          components={{
            Option,
          }}
          onChange={handleCategoryChange}
          allowSelectAll={true}
          value={categories}
        />
      </div>
      <ReactQuill
        className="h-[500px]"
        value={editorHtml}
        modules={modules}
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default TextEditor;
