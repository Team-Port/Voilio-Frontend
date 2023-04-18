import React, { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import axios from 'axios';

const UploadVideo = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [videoFileName, setVideoFileName] = useState('');
  const [videoFileExtension, setVideoFileExtension] = useState('');
  const [videoDuration, setVideoDuration] = useState('');
  const [editorValue, setEditorValue] = useState('');

  const handleVideoFileChange = (e) => {
    const file = e.target.files[0];
    setVideoFile(file);
    setVideoFileName(file.name);
    setVideoFileExtension(file.name.split('.').pop());
    setVideoDuration(''); // 영상 길이 초기화
  };

  const handleEditorChange = (value) => {
    setEditorValue(value);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append('videoFile', videoFile);
    formData.append('editorValue', editorValue);

    axios.post('/api/upload-video', formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <input type="file" accept="video/*" onChange={handleVideoFileChange} />
      {videoFile && (
        <div>
          <p>파일 이름: {videoFileName}</p>
          <p>파일 확장자: {videoFileExtension}</p>
          <p>영상 길이: {videoDuration}</p>
        </div>
      )}
      <MDEditor value={editorValue} onChange={handleEditorChange} />
      <button onClick={handleSubmit}>글과 영상 업로드</button>
    </div>
  );
};

export default UploadVideo;
