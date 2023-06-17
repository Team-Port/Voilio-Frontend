import React, { useCallback, useEffect, useState } from "react";
import Sidebar from "../component/Sidebar";
import InfoList from "../component/InfoList";
import VideoList from "../component/VideoList";
import { useRecoilValue } from "recoil";
import { isVideoItems } from "../store/video/isVideoItems";
import { HOST_URL } from "../lib/HostUrl";
import axios from "axios";
import ChatRoomItem from "../component/ChatRoom/ChatRoomItem";

const ChatRoomListPage = () => {
  const [chatRoomItems, setChatRoomItems] = useState([]);

  useEffect(() => {
    getChatRooms();
  }, []);

  const getChatRooms = useCallback(() => {
    axios
      .get(`${HOST_URL}/chat/rooms`)
      .then((response) => {
        setChatRoomItems(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
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
