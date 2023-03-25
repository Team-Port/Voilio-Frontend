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
                    <div className='channelImg-box'>
                        <img className='channelImg'src ={'asset/test_thum.jpeg'} alt="channelImg-thum"/>
                    </div>
                    <div className='infoText-box'>
                        <span className='infoText'>
                            <p className='title'>video Title</p>
                            <span>
                                <p className='category'>category</p>
                                <p className='category'>category</p>
                            </span>
                        </span>
                        <span className='infoText'>
                            <p className='channel'>channel Name</p>
                            <p className='publishDate'>published Date</p>
                        </span>
                    </div>
                </div>
            </div>
            <div className='item'>
                <div className='thumnail'>
                    <img src={'asset/test_img.jpeg'} alt="videoThumnail" />
                </div>
                <div className='metaData'>
                    <div className='channelImg-box'>
                        <img className='channelImg'src ={'asset/test_thum.jpeg'} alt="channelImg-thum"/>
                    </div>
                    <div className='infoText-box'>
                        <span className='infoText'>
                            <p className='title'>video Title</p>
                            <span>
                                <p className='category'>category</p>
                                <p className='category'>category</p>
                            </span>
                        </span>
                        <span className='infoText'>
                            <p className='channel'>channel Name</p>
                            <p className='publishDate'>published Date</p>
                        </span>
                    </div>
                </div>
            </div>
            <div className='item'>
                <div className='thumnail'>
                    <img src={'asset/test_img.jpeg'} alt="videoThumnail" />
                </div>
                <div className='metaData'>
                    <div className='channelImg-box'>
                        <img className='channelImg'src ={'asset/test_thum.jpeg'} alt="channelImg-thum"/>
                    </div>
                    <div className='infoText-box'>
                        <span className='infoText'>
                            <p className='title'>video Title</p>
                            <span>
                                <p className='category'>category</p>
                                <p className='category'>category</p>
                            </span>
                        </span>
                        <span className='infoText'>
                            <p className='channel'>channel Name</p>
                            <p className='publishDate'>published Date</p>
                        </span>
                    </div>
                </div>
            </div>
            <div className='item'>
                <div className='thumnail'>
                    <img src={'asset/test_img.jpeg'} alt="videoThumnail" />
                </div>
                <div className='metaData'>
                    <div className='channelImg-box'>
                        <img className='channelImg'src ={'asset/test_thum.jpeg'} alt="channelImg-thum"/>
                    </div>
                    <div className='infoText-box'>
                        <span className='infoText'>
                            <p className='title'>video Title</p>
                            <span>
                                <p className='category'>category</p>
                                <p className='category'>category</p>
                            </span>
                        </span>
                        <span className='infoText'>
                            <p className='channel'>channel Name</p>
                            <p className='publishDate'>published Date</p>
                        </span>
                    </div>
                </div>
            </div>
            
            
            
        </li>
    );
};

export default VideoItem;