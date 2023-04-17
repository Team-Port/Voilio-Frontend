import React from "react";
import Sidebar from "../component/Sidebar";
import InfoList from "../component/InfoList";
import Board from "../component/Board/Board";

const BoardPage = () =>{
    return(
        <div className='home-wrap'>
            <div className='left-sidebar-box'>
                <Sidebar></Sidebar>
            </div>
            <div className='Board'>
                <Board></Board>
            </div>
            <div className='right-sidebar-box'>
                <InfoList></InfoList>
            </div>
        </div>
    );
};

export default BoardPage;