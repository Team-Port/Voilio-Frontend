import React, {useState, useEffect} from 'react';
import './infoList.css'
import axios from 'axios';
import { HOST_URL } from "../lib/HostUrl";
import { useNavigate } from "react-router-dom";

const SubscribeList = () => {
    const [subscribeList, setSubscribeList] = useState([]); 
    const navigate = useNavigate();

    const nickname = sessionStorage.getItem("nickname");

    const getSubscribeList = async () => {
        await axios
          .get(`${HOST_URL}/api/v1/subscribes/lists/@${nickname}`, {
            nickname: nickname,
          })
          .then((res) => {
            console.log(res.data.data._embedded.subscribeResponseList)   // {subscribe_nickname: '디지몬매직포스', subscribe_id: 3}, ..
            setSubscribeList(res.data.data._embedded.subscribeResponseList); // 상태에 데이터 설정
          });
    };

    useEffect(() => {
        getSubscribeList();
      }, []);

    const moveToUser = (nickname) => {
        navigate(`/profile/@${nickname}`);
    };

    return (
        <div className='infoMenu-box'>
            <div className='subscribe-title'>
                <img className='ss-titleImg' src={process.env.PUBLIC_URL + '/asset/pinkHeart1.png'} />
                <h3>People you like</h3>
            </div>
            <div className='subscribe-box'>
            {subscribeList.length > 0 ? (
                subscribeList.map((item, index) => (
                    <div key={index} onClick={() => moveToUser(item.subscribe_nickname)}>
                        <img className='subscribeNum' src={process.env.PUBLIC_URL + `/asset/num${index + 1}.png`} />
                        <img className='ss-channelImg' src={process.env.PUBLIC_URL + '/asset/test_thum.jpeg'} />
                        {item.subscribe_nickname}
                    </div>
                ))
            ) : (
                <p className='nonetxt'>다양한 사람들을 팔로우해보세요!</p>
            )}
        </div>
        </div>
    );
};

export default SubscribeList;
