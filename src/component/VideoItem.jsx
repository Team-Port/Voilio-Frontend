import React from 'react';
import './videoItem.css'

const VideoItem = () => {
    return (
        <li className='videoItem'>
            <div className='item'>
                <div className='thumnail'>
                    <img src={'asset/test_img.jpeg'} alt="videoThumnail" />
                </div>
                <div className='metaData'>
                    <div className='channelImg'>
                        <img src ={'asset/test_thum.jpeg'} alt="channelImg-thum"/>
                    </div>
                    <div className='infoText'>
                        <p className='title'>video Title</p>
                        <p className='channel'>channel Name</p>
                        <p className='publishDate'>published Date</p>
                    </div>
                </div>
            </div>
            <div className='item'>
                <div className='thumnail'>
                    <img src={'asset/test_img.jpeg'} alt="videoThumnail" />
                </div>
                <div className='metaData'>
                    <div className='channelImg'>
                        <img src ={'asset/test_thum.jpeg'} alt="channelImg-thum"/>
                    </div>
                    <div className='infoText'>
                        <p className='title'>video Title</p>
                        <p className='channel'>channel Name</p>
                        <p className='publishDate'>published Date</p>
                    </div>
                </div>
            </div>
            <div className='item'>
                <div className='thumnail'>
                    <img src={'asset/test_img.jpeg'} alt="videoThumnail" />
                </div>
                <div className='metaData'>
                    <div className='channelImg'>
                        <img src ={'asset/test_thum.jpeg'} alt="channelImg-thum"/>
                    </div>
                    <div className='infoText'>
                        <p className='title'>video Title</p>
                        <p className='channel'>channel Name</p>
                        <p className='publishDate'>published Date</p>
                    </div>
                </div>
            </div>
            <div className='item'>
                <div className='thumnail'>
                    <img src={'asset/test_img.jpeg'} alt="videoThumnail" />
                </div>
                <div className='metaData'>
                    <div className='channelImg'>
                        <img src ={'asset/test_thum.jpeg'} alt="channelImg-thum"/>
                    </div>
                    <div className='infoText'>
                        <p className='title'>video Title</p>
                        <p className='channel'>channel Name</p>
                        <p className='publishDate'>published Date</p>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default VideoItem;