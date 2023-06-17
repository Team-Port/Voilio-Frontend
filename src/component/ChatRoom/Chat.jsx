import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ChatItem = ({ message }) => {
  return (
    <li className={"chatRoom-" + message}>
      <p>{message}</p>
    </li>
  );
};

export default ChatItem;
