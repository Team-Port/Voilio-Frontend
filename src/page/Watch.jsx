import React from "react";
import "./css/watch.css";
import Sidebar from "../component/Sidebar";
import InfoList from "../component/InfoList";
import VideoWatch from "../component/VideoWatch/VideoWatch";

const Watch = ({selectedWatch, handleSelectVideo}) =>{

    return(
        <div className='home-wrap'>
            <div className='left-sidebar-box'>
                <Sidebar/>
            </div>
            <div className='watch'>
                <VideoWatch selectedWatch={selectedWatch} handleSelectVideo={handleSelectVideo}/>
            </div>
            <div className='right-sidebar-box'>
                <InfoList/>
            </div>
        </div>
    );
};

export default Watch;