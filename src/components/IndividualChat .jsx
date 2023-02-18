import React from "react";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import IconButton from "@mui/material/IconButton";

const IndividualChat = ({profile, onBackClick}) => {
  return (
    <div className="h-100 w-100 rounded-lg m-4 flex flex-col">
      <div className="d-flex justify-between align-center">
  <IconButton onClick={onBackClick}>
    <ArrowBackOutlinedIcon />
  </IconButton>
  <p className="text-center">{profile.username}</p>
</div>
      <img src={profile.avatar} alt={profile.username} className="w-16 h-16 rounded-full m-auto mt-4" />
      <div className="mt-4 flex justify-between p-4">
        <input type="text" placeholder="Type a message" />
        <button>Send</button>
      </div>
    </div>
  );
};

export default IndividualChat;
