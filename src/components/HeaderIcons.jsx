import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NotificationPopup from "./NotificationPopup";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
// import './stickyheader.css'
import { useNavigate } from "react-router-dom";
function HeaderIcons() {
  const navigate = useNavigate();
  return (
  
    <div className="flex justify-end">
      <div className="flex items-center space-x-2 text-gray-500">
        {/* <IconButton>
          <SearchOutlinedIcon />
        </IconButton> */}
        <IconButton>
          <Badge badgeContent={1} color="error">
          <button
            onClick={() => navigate("/messages")}
            type="button" 
          >
            <EmailOutlinedIcon />
            <span class="sr-only">Home</span>
          </button>
          </Badge>
        </IconButton>
        <IconButton>
          <NotificationPopup />
        </IconButton>
      </div>
  </div>
  );
}

export default HeaderIcons;
