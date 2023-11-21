import { useState } from "react";

import TextEditor from "../../component/ new-portal/TextEditor";
import { useSubmitBoard } from "../../modules/apis/upload";

const UploadPost = () => {
  const [title, setTitle] = useState("");
  const [categories, setCategories] = useState([]);
  const [editorHtml, setEditorHtml] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleCategoryChange = (selected) => {
    if (selected.length <= 2) {
      setCategories(selected);
    }
  };

  const handleEditorChange = (html) => {
    setEditorHtml(html);
  };

  const { mutate: submitPost } = useSubmitBoard();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const boardData = {
      title: title,
      content: editorHtml,
      summary: "",
      category1: categories[0].value,
      category2: categories[1].value,
      videoUrl: "",
      thumbnailUrl: "",
      isPublic: "Y",
      division: "NORMAL",
      boardImageUrls: [],
    };

    submitPost(boardData);
  };

  return (
    <div className="pl-[220px] pr-[30px] pt-[84px]">
      <div className="flex flex-col">
        <TextEditor
          categories={categories}
          editorHtml={editorHtml}
          handleTitleChange={handleTitleChange}
          handleCategoryChange={handleCategoryChange}
          handleEditorChange={handleEditorChange}
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
