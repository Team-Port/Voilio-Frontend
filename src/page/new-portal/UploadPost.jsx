import { useState } from "react";
import axios from "axios";

import { HOST_URL } from "../../lib/HostUrl";
import jwt_decode from "jwt-decode";

import TextEditor from "../../component/ new-portal/TextEditor";

const UploadPost = () => {
  const [title, setTitle] = useState("");
  const [categories, setCategories] = useState([]);
  const [editorHtml, setEditorHtml] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const handleCategoryChange = (selected) => {
    if (selected.length <= 2) {
      setCategories(selected);
    }
  };

  const handleEditorChange = (html) => {
    setEditorHtml(html);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("category1", categories[0].value);
    formData.append("category2", categories[1].value);
    formData.append("content", editorHtml);

    const token = sessionStorage.getItem("jwtAuthToken");
    const decodedToken = jwt_decode(token);
    const userId = decodedToken.sub;
    formData.append("user_id", userId);

    const timestamp = Date.now();

    try {
      let response;
      response = await axios.post(
        `${HOST_URL}/api/v1/boards/create`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("jwtAuthToken")}`,
          },
        }
      );
      console.log(response.data);
      if (response.data.status === "201") {
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
      if (error.response.status === 401) {
        alert("해당 게시물의 권한이 없습니다.");
      } else {
        alert(
          "서버 오류로 생성이 정상적으로 되지 않았습니다. 다시 부탁드릴게요😭"
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pl-[220px] pr-[30px] pt-[84px]">
      <div className="flex flex-col">
        <TextEditor
          categories={categories}
          editorHtml={editorHtml}
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
