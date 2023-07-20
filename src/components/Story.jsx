import React from "react";
import { Avatar } from "@mui/material";
import { Link } from 'react-router-dom';


function Story({ img, username, onClick }) {
  return (

    <div onClick={onClick}>
      <Avatar
        sx={{
          width: 60,
          height: 60,
          border: "2px solid #4AE6A7",
          cursor: "pointer",
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
        alt={username}
        src={img}
      />
    
      <p className="text-xs mt-1 w-14 text-center truncate">{username}</p>
    </div>
  );
}

export default Story;
