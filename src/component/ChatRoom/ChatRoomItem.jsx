import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ChatRoomItem = ({ chatRoomItem }) => {
  return (
    <li className={"chatRoom-" + chatRoomItem[0].chatRoomUuid}>
      <Link to={`/chatRooms/${chatRoomItem[0].chatRoomUuid}`}>
        <p>{chatRoomItem[0].chatRoomName}</p>
      </Link>
    </li>
  );
};

export default ChatRoomItem;
