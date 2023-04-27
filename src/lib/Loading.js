// Loading.js
import React from 'react';
import {Background, LoadingText} from './Styles';
import {useEffect} from 'react';


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
        useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
  return (
    <Background>
      <LoadingText>잠시만 기다려 주세요🙏🏻</LoadingText> 
      <img 
        src={process.env.PUBLIC_URL + '/asset/spinner.gif'} 
        alt="로딩중" 
        width="10%" 
        style={{ backgroundColor: 'none' }} />
    </Background>
  );
};