import React from 'react';
import './videoItem.css'
import { Link } from 'react-router-dom';

const VideoItem = ({videoItem, display}) => {
    return (
        <li className={`videoItem ${display}`}>
            <Link to="/watch">
            <div className='item'>
                <div className='thumnail'>
                    <img className='thumnail-img' src={videoItem.thumbnail_url} alt="videoThumnail" />
                </div>
                <div className='metaData'>
                    <div className='channelImg-box'>
                        <img className='channelImg'src ={videoItem.thumbnail_url} alt="channelImg-thum"/>
                    </div>
                    <div className='infoText-box'>
                        <span className='infoText'>
                            <p className='title'>{videoItem.title}</p>
                            <span>
                                <p className='category'>category</p>
                                <p className='category'>category</p>
                            </span>
                        </span>
                        <span className='infoText'>
                            <p className='channel'>{videoItem.updated_at}</p>
                            <p className='publishDate'>{videoItem.updated_at}</p>
                        </span>
                    </div>
                </div>
            </div>
            </Link>
        </li>
    );
};

export default VideoItem;