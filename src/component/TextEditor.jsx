import React, { useState } from 'react';
import Editor from '@uiw/react-md-editor';
import './textEditor.css';


function TextEditor (props) {
  const {
    title,
    setTitle,
    content,
    setContent,
    category1,
    setCategory1,
    category2,
    setCategory2
  } = props;

  const handleInputChange = (event) => {
    const { name, value } = event.target || { name: '', value: '' };
    switch (name) {
      case 'title':
        setTitle(value);
        break;
      case 'content':
        setContent(value);
        break;
      case 'category1':
        setCategory1(value);
        break;
      case 'category2':
        setCategory2(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className='editor-container'>
      <div className='title-input-box'>
        <label htmlFor='title' />
        <input
          id='title'
          type='text'
          value={title}
          placeholder='게시글의 제목을 입력해주세요 🤟🏻'
          onChange={handleInputChange}
          name='title'
        />
        <div className='category-box'>
          <select
            name='category1'
            value={category1}
            onChange={handleInputChange}
          >
            <option>기타</option>
            <option>IT</option>
            <option>Dance</option>
          </select>
          <select
            name='category2'
            value={category2}
            onChange={handleInputChange}
          >
            <option>기타</option>
            <option>IT</option>
            <option>Dance</option>
          </select>
        </div>
      </div>

      <div className='content-input-box'>
        <label htmlFor='context' />
        <Editor
          className='editor'
          id='context'
          value={content}
          onChange={(value) => setContent(value)}
          name='content'
        />
      </div>
    </div>
  );
}

export default TextEditor;