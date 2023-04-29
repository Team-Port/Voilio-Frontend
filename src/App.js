import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Login from './page/Login';
import Join from './page/Join';
import Profile from './page/Profile';
import Header from './component/Header';
import './App.css';
import {useEffect, useState, useCallback} from 'react';
import Watch from './page/Watch';
import axios from "axios";
import UploadVideo from './page/UploadVideo';


let defaultVideos = JSON.parse(sessionStorage.getItem('defaultVideos')) || null;
let selectWatch = JSON.parse(sessionStorage.getItem('selectWatch')) || null;

function App() {
    const [videoItems, setVideoItems] = useState([]);
    const [videoItemsByKW,setVideoItemByKW] = useState([]);
    const [loggedIn, setLoggedIn] = useState(false);
    const [selectedWatch, setSelectedWatch] = useState(null);

    const videoData = useCallback(() => {
        axios.get("http://www.voilio.site:8080/api/v1/boards/lists")
          .then((response) => {
            setVideoItems(response.data.data._embedded.boardResponseList);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);
    
    useEffect(() => {
        videoData();
    }, [videoData]);
    
    const updateVideoData = () => {
        videoData();
    };
    
    const handleSetVideo = (data) =>{
        setVideoItems(data);
    }

    useEffect (() => {
        sessionStorage.setItem('defaultVideos', JSON.stringify(defaultVideos));
        sessionStorage.setItem('selectWatch', JSON.stringify(selectWatch));
      }, [selectedWatch])

     // 다른 페이지에서 로고눌렀을 때 home으로 오는데, 30개 동영상 리스트는 session에서 가져올 수 있도록
    const clickLogo=() => {
        setVideoItems(defaultVideos);
    }

    const handleSelectVideo = (videoId) => {
        setSelectedWatch(videoId);
        window.scrollTo({
          top:0,
          behavior:'smooth'
        });
      }
    
    return(     // videoItems가 있어야 실행
        videoItems && <div className="App">
            <BrowserRouter>
                <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} clickLogo={clickLogo} handleSetVideo={setVideoItemByKW} />
                    <Routes>
                        <Route path="/" element={<Home videoItems={videoItems} handleSelectVideo={handleSelectVideo}/> }/>
                        <Route path="/login" element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
                        <Route path="/join" element={<Join/>} />
                        <Route path="/watch/:id" element={<Watch handleSelectVideo={handleSelectVideo} selectedWatch={selectedWatch}/>}/>
                        <Route path="/profile/:nickname" element={<Profile loggedIn={loggedIn} setLoggedIn={setLoggedIn} handleSelectVideo={handleSelectVideo} selectedWatch={selectedWatch}/>} />
                        <Route path="/search/:keyword" element={<Home videoItems={videoItemsByKW} handleSelectVideo={handleSelectVideo} selectVideoItem={selectWatch}/>}/>
                        <Route path="/upload" element={<UploadVideo updateVideoData={updateVideoData}/>}/>
                    </Routes>
            </BrowserRouter>
        </div>
    );
  
}

export default App;