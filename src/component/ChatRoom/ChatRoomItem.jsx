import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ChatRoomItem = ({ chatRoomItem }) => {
  return (
    <li className={"chatRoom-" + chatRoomItem.roomId}>
      <Link to={`/chatRooms/${chatRoomItem.roomId}`}>
        <p>{chatRoomItem.name}</p>
      </Link>
    </li>
  );
};

export default ChatRoomItem;
