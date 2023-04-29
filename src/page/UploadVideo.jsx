import { useState, useEffect } from 'react';
import Dropzone from 'react-dropzone';
import './css/uploadVideo.css';
import TextEditor from '../component/TextEditor'
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../lib/Loading';
import { useMemo } from 'react';


const UploadVideo = ({updateVideoData}) => {
  const [videoFile, setVideoFile] = useState(null);
  const [videoFileName, setVideoFileName] = useState('');
  const [videoBlobUrl, setVideoBlobUrl] = useState(null);

  const [imageFile, setImageFile] = useState(null);
  const [imageFileName, setImageFileName] = useState('');
  const [imageFileExtension, setImageFileExtension] = useState('');
  const [bothFilesUploaded, setBothFilesUploaded] = useState(false);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category1, setCategory1] = useState('');
  const [category2, setCategory2] = useState('');

  const [isLoading, setIsLoading] = useState(false); // 로딩 중임을 나타내는 변수


  const navigate = useNavigate();

  const handleVideoFileChange = (e) => {
    const file = e.target.files[0];
    setVideoFile(file);
    setVideoFileName(file.name);
    if (imageFile) setBothFilesUploaded(true);
  };

  useEffect(() => {
    if (videoFile) {
      const blobUrl = URL.createObjectURL(videoFile);
      setVideoBlobUrl(blobUrl);
    }
    return () => {
      if (videoBlobUrl) {
        URL.revokeObjectURL(videoBlobUrl);
      }
    }
  }, [videoFile]);

  const handleImageFileChange = (e) => {
    const file = e.target.files[0];
    cropImage(file);  // 이미지 자르기 함수 호출
    // setImageFile(file);
    setImageFileName(file.name);
    setImageFileExtension(file.name.split('.').pop());
    if (videoFile) setBothFilesUploaded(true);
  };

  const handleVideoDrop = (files) => {
    setVideoFile(files[0]);
    setVideoFileName(files[0].name);
    if (imageFile) setBothFilesUploaded(true);
  };

  const handleImageDrop = (files) => {
    setImageFile(files[0]);
    setImageFileName(files[0].name);
    setImageFileExtension(files[0].name.split('.').pop());
    if (videoFile) setBothFilesUploaded(true);
  };

  function cropImage(file) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
  
    const img = new Image();
    img.onload = function() {
      const width = img.width;
      const height = img.height;
      const aspectRatio = 16 / 9;
  
      let x, y, w, h;
  
      if (width / height > aspectRatio) {
        // 이미지의 가로 길이가 더 긴 경우
        h = height;
        w = h * aspectRatio;
        x = (width - w) / 2;
        y = 0;
      } else {
        // 이미지의 세로 길이가 더 긴 경우
        w = width;
        h = w / aspectRatio;
        x = 0;
        y = (height - h) / 2;
      }
  
      canvas.width = w;
      canvas.height = h;
  
      // 이미지를 canvas에 그림
      ctx.drawImage(img, x, y, w, h, 0, 0, w, h);
  
      // canvas를 이미지 파일로 변환
      canvas.toBlob(function(blob) {
        const croppedFile = new File([blob], file.name, {
          type: file.type,
          lastModified: file.lastModified
        });

        setImageFile(croppedFile);
      }, file.type, 1);
    };
  
    img.src = URL.createObjectURL(file);
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);   // 요청이 시작됨을 나타내는 변수 변경

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('category1', category1);
    formData.append('category2', category2);

    // get user_id from token in local storage
    const token = localStorage.getItem('jwtAuthToken');
    const decodedToken = jwt_decode(token);
    const userId = decodedToken.sub;
    formData.append('user_id', userId);


  const timestamp = Date.now();
  if(videoFile){
    var videoFileExtension = videoFile.name.split('.').pop();
    if(videoFileExtension === "mov") videoFileExtension = "mp4";
    const newVideoName = userId + "_" + timestamp + "_v";

    const newVideoFile = new File([videoFile], newVideoName + "." + videoFileExtension, {
      type: videoFile.type,
      lastModified: videoFile.lastModified,
    });

    formData.append('video', newVideoFile);
  }
    
    
  if(imageFile){

    const imgFileExtension = imageFile.name.split('.').pop();
    const newImgName = userId + "_" + timestamp + "_v";

    const newImgFile = new File([imageFile], newImgName + "." + imgFileExtension, {
      type: imageFile.type,
      lastModified: imageFile.lastModified,
    });

    formData.append('thumbnail', newImgFile);
  }
   

    try {
      const response = await axios.post('http://localhost:8080/api/v1/boards/create', formData);
      if(response.data.status === '201'){
        updateVideoData()
        navigate("/");    // 추후 마이페이지로 이동
      }
    } catch (error) {
      console.error(error);
      alert("서버 오류로 생성이 정상적으로 되지 않았습니다. 다시 부탁드릴게요😭")
    } finally {
      setIsLoading(false); // 요청이 끝남을 나타내는 변수 변경
    }
  };

  return (
    <div className='upload-wrap'>
      {isLoading && <Loading />}
        <div className='upload-container'>
          <div>
            <h2>영상 업로드</h2>
            <div className='input-container'>
              <input className='select-btn' type="file" accept="video/*" onChange={handleVideoFileChange} />
              <Dropzone onDrop={handleVideoDrop} accept="video/*" multiple={false}>
                {({getRootProps, getInputProps}) => (
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p>Drag & Drop 또는 클릭해서 파일을 업로드하세요.</p>
                  </div>
                )}
              </Dropzone>
                <div>            
                  {videoBlobUrl && (
                    <video className='tmp-preFile' src={videoBlobUrl} controls width="550" />
                  )}
                </div>
            </div>
          </div>

          <div>
            <h2>썸네일 이미지 업로드</h2>
              <div className='input-container'>
                <input className='select-btn' type="file" accept="image/*" onChange={handleImageFileChange} />
                <Dropzone onDrop={handleImageDrop} accept="image/*" multiple={false}>
                  {({getRootProps, getInputProps}) => (
                    <div {...getRootProps()}>
                    <input {...getInputProps()} />
                      <p>Drag & Drop 또는 클릭해서 파일을 업로드하세요.</p>
                    </div>
                  )}
                </Dropzone>
                {imageFile && ( <div>
                  <img className='tmp-preFile' src={URL.createObjectURL(imageFile)} alt={imageFileName} width="550" />
              </div>
            )}
            </div>
          </div>

        </div>
        {videoFile && imageFile && (
          <>
          <TextEditor
            title={title}
            setTitle={setTitle}
            content={content}
            setContent={setContent}
            category1={category1}
            setCategory1={setCategory1}
            category2={category2}
            setCategory2={setCategory2}
            />
          <div className='upload-summit-btn'>
            <input className='join-btn' type="button" value="Upload" onClick={handleFormSubmit}/>
          </div>
          </>
        )}

    </div>
  );
};

export default UploadVideo;