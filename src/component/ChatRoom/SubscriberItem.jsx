import axios from "axios";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HOST_URL } from "../../lib/HostUrl";

const SubscriberItem = ({ subscriberItem }) => {
  const navigator = useNavigate();

  const goToChat = () => {
    axios
      .get(`${HOST_URL}/api/v1/chatRooms/${subscriberItem.subscribe_id}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("jwtAuthToken")}`,
        },
      })
      .then((res) => {
        navigator(`/chatRooms/${res.data.data}`);
      })
      .catch((err) => {
        if (err.response.data.businessCode === "R001") {
          axios
            .post(`${HOST_URL}/api/v1/chatRooms`, {
              nickName: sessionStorage.getItem("nickname"),
              chatUserId: subscriberItem.subscribe_id,
            })
            .then((res) => {
              console.log(res);
              navigator(`/chatRooms/${res.data.data}`);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
  };

  return (
    <li className={"chatRoom-" + subscriberItem.subscribe_id}>
      <button onClick={goToChat}>
        <p>{subscriberItem.subscribe_nickname}</p>
      </button>
    </li>
  );
};

export default SubscriberItem;
