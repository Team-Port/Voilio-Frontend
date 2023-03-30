import React from 'react';
import './Watch.css';
import WatchHeader from './WatchHeader/WatchHeader';
import WatchVideo from './WatchVideo/WatchVideo';
import Comment from './Comment/Comment';

const Watch = () => {
    return (
        <body>
            <WatchHeader/>
            <WatchVideo/>
            <Comment></Comment>
        </body>
    );
};

export default Watch;