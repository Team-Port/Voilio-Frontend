import React from 'react';
import './videoItem.css'
import { Link } from 'react-router-dom';

const VideoItem = ({videoItem, display}) => {
    return (
        <li className={`videoItem ${display}`}>
            <Link to="/watch">
            <div className='item'>
                <div className='thumnail'>
                    <img className='thumnail-img' src={videoItem.snippet.thumbnails.medium.url} alt="videoThumnail" />
                </div>
                <div className='metaData'>
                    <div className='channelImg-box'>
                        <img className='channelImg'src ={videoItem.snippet.thumbnails.default.url} alt="channelImg-thum"/>
                    </div>
                    <div className='infoText-box'>
                        <span className='infoText'>
                            <p className='title'>{videoItem.snippet.title}</p>
                            <span>
                                <p className='category'>category</p>
                                <p className='category'>category</p>
                            </span>
                        </span>
                        <span className='infoText'>
                            <p className='channel'>{videoItem.snippet.channelTitle}</p>
                            <p className='publishDate'>{videoItem.snippet.publishedAt}</p>
                        </span>
                    </div>
                </div>
            </div>
            </Link>
        </li>
    );
};

export default VideoItem;