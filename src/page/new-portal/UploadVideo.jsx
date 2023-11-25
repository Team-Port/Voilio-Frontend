import { useState, useRef } from "react";
import axios from "axios";

import { HOST_URL } from "../../lib/HostUrl";
import jwt_decode from "jwt-decode";

import TextEditor from "../../component/ new-portal/TextEditor";
import { useSubmitBoard } from "../../modules/apis/upload";
import { getJwtToken } from "../../modules/Auth";

const VideoPicker = ({ handleVideoChange, showMargin }) => {
  return (
    <div className="relative flex justify-center flex-1">
      <img
        className="lg:mx-[70px] w-[450px] my-0 flex-1"
        src="/asset/folder-gray.svg"
        alt="folder-gray"
      />
      <div className="absolute w-full pt-[50px] justify-center items-center flex flex-col h-full gap-[20px]">
        <img
          className="m-0 flex-shrink w-[70px]"
          src="/asset/upload-video.svg"
          alt="upload-video"
        />
        <input
          className={showMargin ? "pl-[100px]" : ""}
          type="file"
          accept="video/*"
          onChange={handleVideoChange}
        />
      </div>
    </div>
  );
};

const ThumbnailPicker = ({ handleThumbnailChange, showMargin }) => {
  return (
    <div className="relative flex justify-center flex-1">
      <img
        className="lg:mx-[70px] w-[450px] my-0 flex-1"
        src="/asset/folder-pink.svg"
        alt="folder-pink"
      />
      <div className="absolute w-full pt-[50px] justify-center items-center flex flex-col h-full gap-[20px]">
        <img
          className="m-0 flex-shrink w-[70px]"
          src="/asset/upload-thumbnail.svg"
          alt="upload-thumbnail"
        />
        <input
          className={showMargin ? "pl-[100px]" : ""}
          type="file"
          accept="image/*"
          onChange={handleThumbnailChange}
        />
      </div>
    </div>
  );
};

const UploadVideo = () => {
  const [video, setVideo] = useState(null);
  const [videoFileName, setVideoFileName] = useState("");
  const [videoMargin, setVideoMargin] = useState(true);

  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailFileName, setThumbnailFileName] = useState("");
  const [thumbnailMargin, setThumbnailMargin] = useState(true);

  const [title, setTitle] = useState("");
  const [categories, setCategories] = useState([]);
  const [summary, setSummary] = useState("");
  const [editorHtml, setEditorHtml] = useState("");
  const [plainText, setPlainText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const quillRef = useRef();

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    setVideo(file);
    setVideoFileName(file.name);

    if (file) {
      if (file.name.length > 20) {
        setVideoMargin(false);
      }
    } else {
      return setVideoMargin(true);
    }
  };

  const handleThumbnailChange = (e) => {
    const file = e?.target.files[0];
    setThumbnail(file);
    setThumbnailFileName(file.name);

    if (file) {
      if (file.name.length > 20) {
        setThumbnailMargin(false);
      }
    } else {
      return setThumbnailMargin(true);
    }
  };

  const handleTitleChange = (e) => {
    setTitle(e?.target.value);
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

  const { mutate: submitVideo } = useSubmitBoard();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const token = getJwtToken();
    const decodedToken = jwt_decode(token);
    const userId = decodedToken.sub;

    const boardData = {
      title: title,
      content: editorHtml,
      summary: summary,
      category1: categories[0].value,
      category2: categories[1].value,
      videoUrl: "",
      thumbnailUrl: "",
      isPublic: "Y",
      division: "VIDEO",
      boardImageUrls: [],
    };

    if (video) {
      const videoFormData = new FormData();

      let videoFileExtension = video.name.split(".").pop();
      if (videoFileExtension === "mov") videoFileExtension = "mp4";
      const newVideoName = userId + "_" + Date.now() + "_v";

      const newVideo = new File(
        [video],
        newVideoName + "." + videoFileExtension,
        {
          type: video.type,
          lastModified: video.lastModified,
        }
      );

      videoFormData.append("video", newVideo);

      try {
        let response;
        response = await axios.post(
          `${HOST_URL}/api/v1/boards/video`,
          videoFormData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        boardData.videoUrl = response.data.data.videoUrl;
      } catch (error) {
        console.error(error);

        if (error.response.status === 401) {
          alert("해당 게시물의 권한이 없습니다.");
        } else {
          alert(
            "서버 오류로 등록에 실패했습니다. 다시 시도해 주시기 바랍니다."
          );
        }
      } finally {
        setIsLoading(false);
      }
    }

    if (thumbnail) {
      const thumbnailFormData = new FormData();
      thumbnailFormData.append("imageFile", thumbnail);

      try {
        let response;
        response = await axios.post(
          `${HOST_URL}/api/v1/boards/THUMBNAIL`,
          thumbnailFormData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        boardData.thumbnailUrl = response.data.data.thumbnailUrl;
      } catch (error) {
        console.error(error);

        if (error.response.status === 401) {
          alert("해당 게시물의 권한이 없습니다.");
        } else {
          alert(
            "서버 오류로 등록에 실패했습니다. 다시 시도해 주시기 바랍니다."
          );
        }
      } finally {
        setIsLoading(false);
      }
    }

    if (summary === "") {
      boardData.summary = plainText;
    }

    submitVideo(boardData);
  };

  return (
    <div className="pl-[250px] pr-[30px] pt-[115px]">
      <div className="flex flex-col">
        <div className="flex flex-row gap-[30px]">
          <VideoPicker
            handleVideoChange={handleVideoChange}
            showMargin={videoMargin}
          />
          <ThumbnailPicker
            handleThumbnailChange={handleThumbnailChange}
            showMargin={thumbnailMargin}
          />
        </div>
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

export default UploadVideo;
