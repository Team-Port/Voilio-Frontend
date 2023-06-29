import React, { useEffect, useMemo, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Client } from "@stomp/stompjs";
import { HOST_URL, WS_BASE_URL } from "../lib/HostUrl";
import ChatItem from "../component/ChatRoom/Chat";
import axios from "axios";
import { Box, FormControl, IconButton } from "@mui/material";

const peerConnectionConfig = {
  iceServers: [
    { urls: "stun:stun.stunprotocol.org:3478" },
    { urls: "stun:stun.l.google.com:19302" },
  ],
};

const ChatPage = () => {
  const { roomId } = useParams();
  const socketRef = useRef({});
  const [chatList, setChatList] = useState([]);
  const [chat, setChat] = useState("");
  const nickname = sessionStorage.getItem("nickname");
  const myWebCamRef = useRef();
  const peerWebCamRef = useRef();
  const pcRef = useRef();
  const [peerWebCamStatus, setPeerWebCamSatus] = useState(false);
  const [myWebCamStatus, setMyWebCamStatus] = useState(false);

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
          sender: nickname,
          message: "",
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
      if (pcRef.current) {
        pcRef.current.close();
      }
    };
  }, []);

  useEffect(() => {
    pcRef.current = new RTCPeerConnection(peerConnectionConfig);
    if (myWebCamStatus) {
      getMedia().then(() => {
        if (peerWebCamStatus) {
          createOffer();
        }
      });
    }
  }, [myWebCamStatus, peerWebCamStatus]);

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
      if (payload.type == "ENTER" || payload.type == "TALK") {
        console.log("getMessage :", payload.type, "payload :", payload);
        const handler = messageHandlers[payload.type];
        if (handler) {
          handler(payload);
        }
      } else if (payload.sender !== nickname) {
        console.log("getMessage :", payload.type, "payload :", payload);
        const handler = messageHandlers[payload.type];
        if (handler) {
          handler(payload);
        }
      }
    }
  };

  const messageHandlers = useMemo(
    () => ({
      ENTER: (message) => {
        setChatList((_chat_list) => [..._chat_list, message.message]);
      },
      TALK: (message) => {
        setChatList((_chat_list) => [..._chat_list, message.message]);
      },
      OFFER: async (message) => {
        console.log(pcRef.current, socketRef.current);
        if (!(pcRef.current && socketRef.current)) {
          return;
        }
        try {
          const offer = new RTCSessionDescription(message.sdp);
          await pcRef.current.setRemoteDescription(offer);
          const answer = await pcRef.current.createAnswer();
          await pcRef.current.setLocalDescription(answer);
          sendMessage({
            sender: nickname,
            roomId: roomId,
            type: "ANSWER",
            sdp: answer,
          });
        } catch (err) {
          console.log(err);
        }
      },
      ANSWER: (message) => {
        try {
          if (!pcRef.current) return;
          const answer = new RTCSessionDescription(message.sdp);
          pcRef.current.setRemoteDescription(answer);
        } catch (err) {
          console.log(err);
        }
      },
      ICE: (ice) => {
        if (!pcRef.current) return;
        pcRef.current.addIceCandidate(new RTCIceCandidate(ice.candidate));
      },

      WEBCAM: (message) => {
        setPeerWebCamSatus(true);
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
      sender: nickname,
      message: chat,
    });
    setChat("");
  };

  const onClickVideoChat = async () => {
    setMyWebCamStatus(true);
    sendMessage({
      type: "WEBCAM",
      roomId: roomId,
      sender: nickname,
    });
  };

  const getMedia = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });
      if (myWebCamRef.current && stream) {
        myWebCamRef.current.srcObject = stream;
      }
      if (!(pcRef.current && socketRef.current)) {
        return;
      }
      stream.getTracks().forEach((track) => {
        if (!(pcRef.current && stream)) {
          return;
        }
        pcRef.current.addTrack(track, stream);
      });
      pcRef.current.onicecandidate = handleICECandidateEvent;
      pcRef.current.ontrack = handleTrackEvent;
    } catch (err) {
      console.log(err);
    }
  };

  const createOffer = () => {
    if (!(pcRef.current && socketRef.current)) {
      return;
    }
    pcRef.current
      .createOffer()
      .then(async (offer) => {
        if (!pcRef.current) return;
        await pcRef.current.setLocalDescription(offer);
        sendMessage({
          sender: nickname,
          roomId: roomId,
          type: "OFFER",
          sdp: offer,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function handleICECandidateEvent(event) {
    if (!(socketRef.current.connected && event.candidate)) {
      return;
    }
    sendMessage({
      sender: nickname,
      roomId: roomId,
      type: "ICE",
      candidate: event.candidate,
    });
  }

  function handleTrackEvent(event) {
    if (peerWebCamRef.current) {
      console.log("success track");
      const [stream] = event.streams;
      peerWebCamRef.current.srcObject = stream;
    }
  }

  return (
    <div>
      <button onClick={onClickVideoChat}>화상채팅</button>
      {peerWebCamStatus && (
        <button
          onClick={() => {
            setMyWebCamStatus(true);
          }}
        >
          연결
        </button>
      )}
      {myWebCamRef && (
        <Box>
          <video id="myWebCam" autoPlay playsInline ref={myWebCamRef} />
        </Box>
      )}
      {peerWebCamRef && (
        <Box>
          <video id="peerWebCam" autoPlay playsInline ref={peerWebCamRef} />
        </Box>
      )}

      <ul className="chat-list">
        {chatList &&
          Object.values(chatList).map((chatItem, idx) => (
            <ChatItem key={idx} message={chatItem} />
          ))}
      </ul>
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
