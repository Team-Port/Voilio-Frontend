import { useState } from 'react';
import Dropzone from 'react-dropzone';
import './css/uploadVideo.css';
import TextEditor from '../component/TextEditor'
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../lib/Loading';



const UploadVideo = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [videoFileName, setVideoFileName] = useState('');
  const [videoFileExtension, setVideoFileExtension] = useState('');
  const [videoDuration, setVideoDuration] = useState('');

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
    setVideoFileExtension(file.name.split('.').pop());
    setVideoDuration(''); // 영상 길이 초기화
    if (imageFile) setBothFilesUploaded(true);
  };

  const handleImageFileChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    setImageFileName(file.name);
    setImageFileExtension(file.name.split('.').pop());
    if (videoFile) setBothFilesUploaded(true);
  };

  const handleVideoDrop = (files) => {
    setVideoFile(files[0]);
    setVideoFileName(files[0].name);
    setVideoFileExtension(files[0].name.split('.').pop());
    setVideoDuration(''); // 영상 길이 초기화
    if (imageFile) setBothFilesUploaded(true);
  };

  const handleImageDrop = (files) => {
    setImageFile(files[0]);
    setImageFileName(files[0].name);
    setImageFileExtension(files[0].name.split('.').pop());
    if (videoFile) setBothFilesUploaded(true);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);   // 요청이 시작됨을 나타내는 변수 변경

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('category1', category1);
    formData.append('category2', category2);
    formData.append('video', videoFile);
    formData.append('thumbnail', imageFile);

    // get user_id from token in local storage
    const token = localStorage.getItem('jwtAuthToken');
    const decodedToken = jwt_decode(token);
    const userId = decodedToken.sub;
    
    formData.append('user_id', userId);

    try {
      const response = await axios.post('http://localhost:8080/api/v1/boards/create', formData);
      console.log(response.data);
      if(response.data.status === '201'){
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
              {videoFile && (
                <div>
                  <video src={URL.createObjectURL(videoFile)} controls width="550"></video>
                  <div>
                    <p>파일 이름: {videoFileName}</p>
                    <p>파일 확장자: {videoFileExtension}</p>
                    <p>영상 길이: {videoDuration}</p>
                  </div>
                </div>
              )}
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
                  <img className='tmp-thumb-img' src={URL.createObjectURL(imageFile)} alt={imageFileName} width="550" />
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