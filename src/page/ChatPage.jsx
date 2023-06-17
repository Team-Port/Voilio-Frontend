import React, { useEffect, useMemo, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Client } from "@stomp/stompjs";
import { WS_BASE_URL } from "../lib/HostUrl";
import ChatItem from "../component/ChatRoom/Chat";

const ChatPage = () => {
  const { roomId } = useParams();
  const socketRef = useRef({});
  const [chatList, setChatList] = useState([]);
  const [chat, setChat] = useState("");

  useEffect(() => {
    // socket connect
    socketRef.current = new Client({
      brokerURL: `${WS_BASE_URL}/websocket`,

      onConnect: () => {
        console.log("socket 연결 성공");
        socketSubscribe();
        sendMessage({
          type: "ENTER",
          roomId: roomId,
          sender: "tester",
          message: "helo",
        });
      },
      onStompError: (frame) => {
        console.error(frame);
      },
    });

    socketRef.current.activate();

    return () => {
      if (socketRef.current) {
        socketRef.current.deactivate();
      }
    };
  }, []);

  const socketSubscribe = () => {
    // 연결 후 구독
    socketRef.current.subscribe(
      "/sub/chat/room/" + roomId,
      handleWebSocketMessage
    );
  };

  const handleWebSocketMessage = (message) => {
    const payload = JSON.parse(message.body);
    if (payload) {
      console.log("getMessage :", payload.type);
      const handler = messageHandlers[payload.type];
      if (handler) {
        handler(payload);
      }
    }
  };

  const messageHandlers = useMemo(
    () => ({
      ENTER: (message) => {
        setChatList((_chat_list) => [..._chat_list, message.message]);
        console.log(chatList);
      },
      TALK: (message) => {
        setChatList((_chat_list) => [..._chat_list, message.message]);
        console.log(chatList);
      },
    }),
    []
  );

  function sendMessage(message) {
    const jsonMessage = JSON.stringify(message);
    console.log("SEND message", jsonMessage);
    socketRef.current.publish({
      destination: `/pub/chat/message`,
      body: jsonMessage,
    });
  }
  const handleChange = (event) => {
    // 채팅 입력 시 state에 값 설정
    setChat(event.target.value);
  };

  const handleSubmit = (event, chat) => {
    // 보내기 버튼 눌렀을 때 publish
    event.preventDefault();
    console.log(event, chat);
    sendMessage({
      type: "TALK",
      roomId: roomId,
      sender: "tester",
      message: chat,
    });
  };

  return (
    <div>
      <ul className="chat-list">
        {chatList &&
          Object.values(chatList).map((chatItem, idx) => (
            <ChatItem key={idx} message={chatItem} />
          ))}
      </ul>
      {/* <div>{chatList}</div> */}
      <form onSubmit={(event) => handleSubmit(event, chat)}>
        <div>
          <input
            type={"text"}
            name={"chatInput"}
            onChange={handleChange}
            value={chat}
          />
        </div>
        <input type={"submit"} value={"의견 보내기"} />
      </form>
    </div>
  );
};

export default ChatPage;
