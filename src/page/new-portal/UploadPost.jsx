import { useState, useRef } from "react";

import TextEditor from "../../component/ new-portal/TextEditor";
import { useSubmitBoard } from "../../modules/apis/upload";

const UploadPost = () => {
  const [title, setTitle] = useState("");
  const [categories, setCategories] = useState([]);
  const [summary, setSummary] = useState("");
  const [editorHtml, setEditorHtml] = useState("");
  const [plainText, setPlainText] = useState("");

  const quillRef = useRef();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleCategoryChange = (selected) => {
    if (selected.length <= 2) {
      setCategories(selected);
    }
  };

  const handleSummaryChange = (e) => {
    if (e.target.value !== null) {
      setSummary(e.target.value);
    }
  };

  const handleEditorChange = (html) => {
    setEditorHtml(html);
  };

  const handleGetEditorText = (quillRef) => {
    if (quillRef.current) {
      const quill = quillRef.current.getEditor();
      const plainText = quill.getText();

      setPlainText(plainText);
    }
  };

  const { mutate: submitPost } = useSubmitBoard();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const boardData = {
      title: title,
      content: editorHtml,
      summary: summary,
      category1: categories[0].value,
      category2: categories[1].value,
      videoUrl: "",
      thumbnailUrl: "",
      isPublic: "Y",
      division: "NORMAL",
      boardImageUrls: [],
    };

    if (summary === "") {
      boardData.summary = plainText;
    }

    console.log(boardData.summary);
    submitPost(boardData);
  };

  return (
    <div className="pl-[220px] pr-[30px] pt-[84px]">
      <div className="flex flex-col">
        <TextEditor
          quillRef={quillRef}
          categories={categories}
          editorHtml={editorHtml}
          handleTitleChange={handleTitleChange}
          handleCategoryChange={handleCategoryChange}
          handleSummaryChange={handleSummaryChange}
          handleEditorChange={handleEditorChange}
          handleGetEditorText={handleGetEditorText}
        />
        <div className="flex justify-end mt-[70px] mr-[0px] xl:mr-[70px] mb-[30px]">
          <button
            className="px-[14px] py-[5px] rounded-[10px] border-[1px] flex justify-center border-black z-10 bg-white"
            onClick={handleFormSubmit}
          >
            등록
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadPost;
