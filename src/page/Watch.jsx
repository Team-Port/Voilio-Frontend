import React, { useEffect, useState } from "react";
import "./css/watch.css";
import Sidebar from "../component/Sidebar";
import InfoList from "../component/InfoList";
import VideoWatch from "../component/VideoWatch/VideoWatch";
import axios from "axios";

const Watch = () =>{
    const [data, setData] = useState("");

    useEffect(() => {
        axios.get(
            "http://localhost:8080/api/v1/boards/1"
        ).then((response) => {
            console.log(JSON.stringify(response.data));
            setData(response.data.data);
        }).catch((e) => {
            console.log(e);
        });
      }, []);

    return(
        <div className='home-wrap'>
            <div className='left-sidebar-box'>
                <Sidebar/>
            </div>
            <div className='watch'>
                <VideoWatch data = {data}/>
            </div>
            <div className='right-sidebar-box'>
                <InfoList/>
            </div>
        </div>
    );
};

export default Watch;