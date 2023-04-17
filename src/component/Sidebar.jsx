import React from 'react';
import './sidebar.css'

const Sidebar = () => {
    return (
        <div className='sidebarMenu-box'>
            <div className='pageMenu-box'>
                <div><img src={'asset/home.png'}/> <p>Home</p> </div>
                <div><img src={'asset/highlight.png'}/> <p>보관</p></div>
                <div><img src={'asset/target.png'}/> <p>구독</p> </div>
                <div><img src={'asset/chart.png'}/> <p>통계</p></div>
            </div>
            <div className='categoryMenu-box'>
                <div><img src={'asset/IT.png'}/> <p>IT</p> </div>
                <div><img src={'asset/violin.png'}/> <p>Music</p></div>
                <div><img src={'asset/beauty.png'}/> <p>Beauty</p></div>
                <div><img src={'asset/dance.png'}/><p>Dance</p></div>
                <div><img src={'asset/language.png'}/><p>Language</p></div>
                <div><img src={'asset/exercise.png'}/><p>Exercise</p></div>
                <div><img src={'asset/exercise.png'}/><p>Anything</p></div>
            </div>
        </div>
    );
};

export default Sidebar;