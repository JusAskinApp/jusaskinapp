import React from "react";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChatBubble from "./ChatBubble";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import MicIcon from "@mui/icons-material/Mic";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import SendIcon from "@mui/icons-material/Send";

const IndividualChat = ({ profile, onBackClick }) => {
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
        className="flex flex-col flex-1 p-4 max-h-[325px] overflow-y-scroll"
        style={{ background: "#FAFAFA" }}
      >
        <ChatBubble
          position="left"
          message="Hey there! How's it going?"
          imageUrl={profile.avatar}
        />
        <ChatBubble
          position="left"
          message="Hey there! How's it going?"
          imageUrl={profile.avatar}
        />
        <ChatBubble
          position="right"
          message="Not bad, thanks. How about you?"
          imageUrl=""
        />
        <ChatBubble
          position="left"
          message="I'm doing pretty well, thanks for asking."
          imageUrl={profile.avatar}
        />
        <ChatBubble position="left" message="???" imageUrl={profile.avatar} />
        <ChatBubble position="right" message="???" imageUrl={profile.avatar} />
        <ChatBubble position="right" message="Hi" imageUrl={profile.avatar} />
      </div>
      <div className="mt-4 flex justify-between p-4">
        <div className="flex items-center space-x-2 text-gray-500">
          <IconButton>
            <EmojiEmotionsIcon />
          </IconButton>
          <IconButton>
            <AttachFileOutlinedIcon />
          </IconButton>
          <IconButton>
            <MicIcon />
          </IconButton>
        </div>
        <input
          type="text"
          placeholder="Type a message"
          className="flex-1 px-4 py-2 rounded-full bg-gray-200 focus:outline-none"
        />
        <div className="flex items-center ml-2">
          <SendIcon />
        </div>
      </div>
    </div>
  );
};

export default IndividualChat;
