import React, { useEffect, useState } from "react";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChatBubble from "./ChatBubble";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import MicIcon from "@mui/icons-material/Mic";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import SendIcon from "@mui/icons-material/Send";
import makeApiCall from '../Api/api';
const IndividualChat = ({ profile, onBackClick }) => {
  const [messages,setMessages] = useState([])
  const [_message,_setMessage] = useState("")
  const getMessages = async () => {
    debugger;
    const sender = JSON.parse(JSON.parse(JSON.stringify(localStorage)).userDetail).email
    const reciever = profile.email
    try {
      const data = await makeApiCall('http://localhost:4000/api/chat/getMessages', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          {
            "chatId": profile.id ? profile.id :  [sender, reciever].sort().join('|')
          }
        ),

      });
      setMessages(data.messages)
      console.log(data)
    } catch (error) {
      // setError(true)
      console.error(error);
    }
  }
  async function   sendButtonClick(){
    debugger;
    console.log(messages)
    const messagebody = {
            
      "sender" : {
          "email" : JSON.parse(JSON.parse(JSON.stringify(localStorage)).userDetail).email,
          "id":JSON.parse(JSON.parse(JSON.stringify(localStorage)).userDetail).id,
          "ProfilePic":"https://firebasestorage.googleapis.com/v0/b/jusaskinapp.appspot.com/o/149071-fb71c7c3-f1b1-4379-b4fa-65dc793d9125.png?alt=media&token=38953411-e32f-41fb-970c-d617b38749f6"
      },
      "receiver" : {
            "email" : profile.chatPartnerEmail ? profile.chatPartnerEmail : profile.email,
          "id":"2",
          "ProfilePic": "https://firebasestorage.googleapis.com/v0/b/jusaskinapp.appspot.com/o/149071-fb71c7c3-f1b1-4379-b4fa-65dc793d9125.png?alt=media&token=38953411-e32f-41fb-970c-d617b38749f6"
      },
      "text" : _message
  };
    setMessages([...messages, messagebody]);
    try {
      const data = await makeApiCall('http://localhost:4000/api/chat/storeMessage', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify(messagebody),
      });
      console.log(messages)
      if(data){
        alert("send")
      }
     
    } catch (error) {
      // setError(true)
      console.error(error);
    }
  }
  
  useEffect(()=>{
    getMessages();
  },[])
  return (
    <div className="h-100 w-100 rounded-lg flex flex-col">
      <div className="flex justify-between p-4">
        <IconButton onClick={onBackClick}>
          <ArrowBackOutlinedIcon />
        </IconButton>
        <p className="text-center font-bold">{profile.username}</p>
        <MoreVertIcon />
      </div>
      <div
        className="flex flex-col flex-1 p-4 max-h-[500px] overflow-y-scroll"
        style={{ background: "#FAFAFA" }}
      >
         <>
            {messages.map((message) => (
            <ChatBubble
            position={message.sender.email === JSON.parse(JSON.parse(JSON.stringify(localStorage)).userDetail).email ? "right" : "left"}
            message={message.text}
             imageUrl={message.sender.ProfilePic}
          />
            ))}
    </>
      </div>
      <div className="mt-4 flex justify-between p-4">
        <div className="flex items-center space-x-2 text-gray-500">
          <IconButton>
            <EmojiEmotionsIcon />
          </IconButton>
          <IconButton>
            <AttachFileOutlinedIcon />
          </IconButton>
          {/* <IconButton>
            <MicIcon />
          </IconButton> */}
        </div>
        <input
          type="text"
          placeholder="Type a message"
          className="flex-1 px-4 py-2 rounded-full bg-gray-200 focus:outline-none"
          onChange={(e)=>{_setMessage(e.target.value)}}
        />
        <div className="flex items-center ml-2">
          <SendIcon onClick={sendButtonClick}/>
        </div>
      </div>
    </div>
  );
};

export default IndividualChat;
