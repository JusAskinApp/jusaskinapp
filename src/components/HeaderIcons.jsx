import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NotificationPopup from "./NotificationPopup";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";

function HeaderIcons() {
  return (
    <div>
      <div className="flex justify-end">
        <div className="flex items-center space-x-2 text-gray-500">
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <Badge badgeContent={2} color="error">
              <EmailOutlinedIcon />
            </Badge>
          </IconButton>
          <IconButton>
            <NotificationPopup />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default HeaderIcons;
