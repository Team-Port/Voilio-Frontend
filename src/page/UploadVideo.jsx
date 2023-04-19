import { useState } from 'react';
import Dropzone from 'react-dropzone';
import './css/uploadVideo.css';
import TextEditor from '../component/TextEditor'

const UploadVideo = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [videoFileName, setVideoFileName] = useState('');
  const [videoFileExtension, setVideoFileExtension] = useState('');
  const [videoDuration, setVideoDuration] = useState('');
  const [editorValue, setEditorValue] = useState('');

  const [imageFile, setImageFile] = useState(null);
  const [imageFileName, setImageFileName] = useState('');
  const [imageFileExtension, setImageFileExtension] = useState('');
  const [bothFilesUploaded, setBothFilesUploaded] = useState(false);

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

  return (
    <div className='upload-wrap'>
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
        <TextEditor/>
        <div className='upload-summit-btn'>
          <input className='join-btn' type="button" value="Upload"></input>
        </div>
        </>
      )}
    </div>
  );
};

export default UploadVideo;