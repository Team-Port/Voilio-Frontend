import React from 'react';
import './sidebar.css'

const Sidebar = () => {
    return (
        <div className='sidebarMenu-box'>
            <div className='pageMenu-box'>
                <div><img src={'asset/home.png'}/>Home</div>
                <div><img src={'asset/highlight.png'}/>보관</div>
                <div><img src={'asset/target.png'}/>구독</div>
                <div><img src={'asset/chart.png'}/>통계</div>
            </div>
            <div className='categoryMenu-box'>
                <div><img src={'asset/IT.png'}/>IT</div>
                <div><img src={'asset/violin.png'}/>Music</div>
                <div><img src={'asset/beauty.png'}/>Beauty</div>
                <div><img src={'asset/dance.png'}/>Dance</div>
                <div><img src={'asset/language.png'}/>Language</div>
                <div><img src={'asset/exercise.png'}/>Exercise</div>
            </div>
        </div>
    );
};

export default Sidebar;