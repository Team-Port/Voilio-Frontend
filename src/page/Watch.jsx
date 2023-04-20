import React from "react";
import "./css/watch.css";
import Sidebar from "../component/Sidebar";
import InfoList from "../component/InfoList";
import VideoWatch from "../component/VideoWatch/VideoWatch";

const Watch = () =>{
    return(
        <div className='home-wrap'>
            <div className='left-sidebar-box'>
                <Sidebar/>
            </div>
            <div className='watch'>
                <VideoWatch/>
            </div>
            <div className='right-sidebar-box'>
                <InfoList/>
            </div>
        </div>
    );
};

export default Watch;