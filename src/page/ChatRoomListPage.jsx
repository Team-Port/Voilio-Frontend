import React, { useCallback, useEffect, useState } from "react";
import Sidebar from "../component/Sidebar";
import InfoList from "../component/InfoList";
import VideoList from "../component/VideoList";
import { useRecoilValue } from "recoil";
import { isVideoItems } from "../store/video/isVideoItems";
import { HOST_URL } from "../lib/HostUrl";
import axios from "axios";
import ChatRoomItem from "../component/ChatRoom/ChatRoomItem";
import SubscriberItem from "../component/ChatRoom/SubscriberItem";

const ChatRoomListPage = () => {
  const [chatRoomItems, setChatRoomItems] = useState([]);
  const [subscribeers, setSubscribers] = useState([]);
  const userName = sessionStorage.getItem("nickname");

  useEffect(() => {
    getChatRooms();
    getSubscribers();
  }, []);

  const getChatRooms = useCallback(() => {
    axios
      .get(`${HOST_URL}/api/v1/chatRooms`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("jwtAuthToken")}`,
        },
      })
      .then((response) => {
        if (response.data) {
          setChatRoomItems(response.data);
        }
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const getSubscribers = useCallback(() => {
    axios
      .get(`${HOST_URL}/api/v1/subscribes/lists/@${userName}`)
      .then((res) => {
        setSubscribers(res.data.data._embedded.subscribeResponseList);
      });
  }, []);

  return (
    <div>
      <ul>
        {subscribeers &&
          Object.values(subscribeers).map((subscirberItem, idx) => (
            <SubscriberItem key={idx} subscriberItem={subscirberItem} />
          ))}
      </ul>
      <ul className="chatRoomList">
        {chatRoomItems &&
          Object.values(chatRoomItems).map((chatRoomItem, idx) => (
            <ChatRoomItem key={idx} chatRoomItem={chatRoomItem} />
          ))}
      </ul>
    </div>
  );
};

export default ChatRoomListPage;
