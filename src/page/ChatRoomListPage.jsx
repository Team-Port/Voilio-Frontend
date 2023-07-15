import React, { useCallback, useEffect, useState } from "react";
import { HOST_URL } from "../lib/HostUrl";
import axios from "axios";
import ChatRoomItem from "../component/ChatRoom/ChatRoomItem";
import SubscriberItem from "../component/ChatRoom/SubscriberItem";
import Sidebar from "../component/Sidebar";
import InfoList from "../component/InfoList";
import "./css/ChatRoomListPage.css";

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
        setChatRoomItems(response.data.data);
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
    <div className="chatRoom-list-wrap">
      <div className="left-sidebar-box">
        <Sidebar />
      </div>
      <div className="video-list" display="list-h">
        <ul className="videoList">
          {subscribeers &&
            Object.values(subscribeers).map((subscirberItem, idx) => (
              <SubscriberItem key={idx} subscriberItem={subscirberItem} />
            ))}
        </ul>
        <ul className="chatRoomList">
          {chatRoomItems &&
            Object.values(chatRoomItems).map((chatRoomItem) => (
              <ChatRoomItem
                key={chatRoomItem.chatRoomUuid}
                chatRoomItem={chatRoomItem}
              />
            ))}
        </ul>
      </div>

      <div className="right-sidebar-box">
        <InfoList />
      </div>
    </div>
  );
};

export default ChatRoomListPage;
