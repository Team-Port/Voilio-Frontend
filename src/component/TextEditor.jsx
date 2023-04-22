import React, { useState } from 'react';
import Editor from '@uiw/react-md-editor';
import './textEditor.css';

const TextEditor = () => {
  const [title, setTitle] = useState('');
  const [context, setContext] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContextChange = (value) => {
    setContext(value);
  };

  return (
    <div className='editor-container'>
        <div className='title-input-box'>
            <label htmlFor="title" />
            <input
                id="title"
                type="text"
                value={title}
                placeholder="게시글의 제목을 입력해주세요 🤟🏻"
                onChange={handleTitleChange}
            />
            <div className='category-box'>
                <select>
                    <option>기타</option>
                    <option>IT</option>
                    <option>Dance</option>
                </select>
                <select>
                    <option>기타</option>
                    <option>IT</option>
                    <option>Dance</option>
                </select>
            </div>
        </div>

        <div className='content-input-box'>
            <label htmlFor="context"/>
            <Editor
                className="editor"
                id="context"
                value={context}
                onChange={handleContextChange}
            />
      </div>
    </div>
  );
};

export default TextEditor;
