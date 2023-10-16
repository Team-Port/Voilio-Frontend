import React, { useEffect, useMemo, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Client } from "@stomp/stompjs";
import { HOST_URL, WS_BASE_URL } from "../lib/HostUrl";
import ChatItem from "../component/ChatRoom/Chat";
import "./css/chatPage.css";
import { Box, FormControl, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import VideocamIcon from "@mui/icons-material/Videocam";

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
    if (payload && payload.sender !== nickname) {
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
      },
      TALK: (message) => {
        setChatList((_chat_list) => [
          ..._chat_list,
          message.sender + "-" + message.message,
        ]);
      },
      OFFER: async (message) => {
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
    socketRef.current.publish({
      destination: `/pub/chat/message`,
      body: jsonMessage,
    });
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSubmit(); // Enter 키가 눌리면 handleSubmit 호출
    }
  };

  const handleChange = (event) => {
    // 채팅 입력 시 state에 값 설정
    console.log(event);
    setChat(event.target.value);
  };

  function handleSubmit() {
    if (chat === "") return;
    // 보내기 버튼 눌렀을 때 publish
    setChatList((_chat_list) => [..._chat_list, chat]);
    sendMessage({
      type: "TALK",
      roomId: roomId,
      sender: nickname,
      message: chat,
    });
    setChat("");
  }

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
      const [stream] = event.streams;
      peerWebCamRef.current.srcObject = stream;
    }
  }

  return (
    <div className="chat-page-wrap">
      {myWebCamStatus && (
        <Box className="webcam-box">
          <video id="myWebCam" autoPlay playsInline ref={myWebCamRef} />

          <video id="peerWebCam" autoPlay playsInline ref={peerWebCamRef} />
        </Box>
      )}
      <div className={"chat-wrap" + (myWebCamStatus ? "-cam" : "")}>
        <div className={"chat-header-wrap" + (myWebCamStatus ? "-cam" : "")}>
          <div className={"chat-header" + (myWebCamStatus ? "-cam" : "")}>
            {peerWebCamStatus ? (
              <VideocamIcon
                sx={{ color: "#35AB4A" }}
                onClick={() => {
                  setMyWebCamStatus(true);
                }}
              />
            ) : (
              <VideocamIcon onClick={onClickVideoChat} />
            )}
          </div>
        </div>
        <div className={"chat-box" + (myWebCamStatus ? "-cam" : "")}>
          <ul className="chat-list">
            {chatList &&
              Object.values(chatList).map((chatItem, idx) => (
                <ChatItem key={idx} message={chatItem} />
              ))}
          </ul>
        </div>
        <div className={"chat-input-box" + (myWebCamStatus ? "-cam" : "")}>
          <input
            placeholder="Enter Message"
            type={"text"}
            className="chat-input"
            onChange={handleChange}
            value={chat}
            onKeyPress={handleKeyPress}
          />
          <div className={"send-icon-box " + (myWebCamStatus ? "-cam" : "")}>
            <SendIcon onClick={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
