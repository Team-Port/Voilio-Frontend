import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { HOST_URL } from "../lib/HostUrl";
import './infoList.css'
import { useNavigate } from "react-router-dom";

const NewMemberBox = () => {
    const [newMembers, setNewMembers] = useState([]);
    const navigate = useNavigate();

    const getNewMembers = () => {
        axios
          .get(`${HOST_URL}/api/v1/users/showAll`)
          .then((response) => {
            if (response.data.status === "200") {
              setNewMembers(response.data.data);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      };

    useEffect(() => {
        getNewMembers();
    }, []);

    const moveToUser = (nickname) => {
        navigate(`/profile/@${nickname}`);
    };

    return (
        <div className='infoMenu-box'>
            <div className='subscribe-title'>
                <h3>❣️ NEW Members ❣️</h3>
            </div>
            <div className='subscribe-box'>
                {newMembers.map((member, index) => (
                    <div key={index} onClick={() => moveToUser(member.nickname)}>
                        <img className='subscribeNum' src={process.env.PUBLIC_URL + `/asset/num${index + 1}.png`} />
                        <img className='ss-channelImg' src={process.env.PUBLIC_URL + '/asset/test_thum.jpeg'} />
                        {member.nickname}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewMemberBox;
