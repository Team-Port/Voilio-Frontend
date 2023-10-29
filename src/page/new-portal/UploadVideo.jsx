import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import { HOST_URL } from "../../lib/HostUrl";
import jwt_decode from "jwt-decode";

import TextEditor from "../../component/ new-portal/TextEditor";

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
  const videoId = useParams().boardId;
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const [video, setVideo] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [videoBlobUrl, setVideoBlobUrl] = useState(null);
  const [title, setTitle] = useState("");
  const [categories, setCategories] = useState([]);
  const [editorHtml, setEditorHtml] = useState("");

  const [videoMargin, setVideoMargin] = useState(true);
  const [thumbnailMargin, setThumbnailMargin] = useState(true);

  useEffect(() => {
    if (!sessionStorage.getItem("jwtAuthToken")) {
      alert("로그인이 되어있지 않습니다. 로그인 후 이용해주시길 바랍니다.");
      navigate("/login");
      return;
    }

    if (video) {
      const blobUrl = URL.createObjectURL(video);
      setVideoBlobUrl(blobUrl);
    }

    if (videoId) {
      axios
        .get(`${HOST_URL}/api/v1/boards/${videoId}`, {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("jwtAuthToken")}`,
          },
        })
        .then((response) => {
          if (!response.data.data.auth) {
            alert("본 게시물의 권리가 없습니다.");
            navigate("/");
            return;
          }
          setVideoBlobUrl(response.data.data.video_url);
          setThumbnail(response.data.data.thumbnail_url);
          setTitle(response.data.data.title);
          setEditorHtml(response.data.data.content);
          setCategories[0](response.data.data.category1);
          setCategories[1](response.data.data.category2);
          console.log(response);
        })
        .catch((err) => {
          alert("로그인이 풀림.");
          navigate("/new-portal/login");
          return;
        });
    }
    return () => {
      if (videoBlobUrl) {
        URL.revokeObjectURL(videoBlobUrl);
      }
    };
  }, [video]);

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    setVideo(file);

    if (file) {
      if (file.name.length > 20) {
        setVideoMargin(false);
      }
    } else {
      return setVideoMargin(true);
    }
  };

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    setThumbnail(file);

    if (file) {
      if (file.name.length > 20) {
        setThumbnailMargin(false);
      }
    } else {
      return setThumbnailMargin(true);
    }
  };

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

    if (video) {
      let videoFileExtension = video.name.split(".").pop();
      if (videoFileExtension === "mov") videoFileExtension = "mp4";
      const newVideoName = userId + "_" + timestamp + "_v";

      const newVideoFile = new File(
        [video],
        newVideoName + "." + videoFileExtension,
        {
          type: video.type,
          lastModified: video.lastModified,
        }
      );

      try {
        let response;
        response = await axios.post(
          `${HOST_URL}/api/v1/boards/video`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("jwtAuthToken")}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(response.data);
        formData.append("videoUrl", response.data.videoUrl);
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
      const imgFileExtension = thumbnail.name.split(".").pop();
      const newImgName = userId + "_" + timestamp + "_v";

      const newImgFile = new File(
        [thumbnail],
        newImgName + "." + imgFileExtension,
        {
          type: thumbnail.type,
          lastModified: thumbnail.lastModified,
        }
      );

      try {
        let response;
        response = await axios.post(
          `${HOST_URL}/api/v1/boards/thumbnail`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("jwtAuthToken")}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        formData.append("thumbnailUrl", response.data.thumbnailUrl);
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

    try {
      let response;
      if (videoId) {
        response = await axios.put(
          `${HOST_URL}/api/v1/boards/update/${videoId}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("jwtAuthToken")}`,
            },
          }
        );
      } else {
        response = await axios.post(
          `${HOST_URL}/api/v1/boards/create`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("jwtAuthToken")}`,
            },
          }
        );
      }
      console.log(response.data);
      if (response.data.status === "201") {
        navigate("/"); // 추후 마이페이지로 이동
        window.location.reload();
      } else if (response.data.status === "200") {
        const nickname = sessionStorage.getItem("nickname");
        if (nickname) {
          navigate(`/profile/@${nickname}`);
        }
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

export default UploadVideo;
