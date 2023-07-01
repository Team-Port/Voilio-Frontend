import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./css/ChatRoomItem.css";

const ChatRoomItem = ({ chatRoomItem }) => {
  return (
    <li className={"chatRoom-item"}>
      <Link to={`/chatRooms/${chatRoomItem.chatRoomUuid}`}>
        <p>{chatRoomItem.chatRoomName}</p>
      </Link>
    </li>
  );
};

export default ChatRoomItem;
