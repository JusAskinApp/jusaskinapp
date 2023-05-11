import React, { useState } from "react";
import { IconButton, List, ListItem, ListItemText, Divider, Popover, Typography } from "@material-ui/core";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import Badge from "@mui/material/Badge";


function NotificationPopup() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [invisible, setInvisible] = React.useState(false);

  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };

  const notifications = [
    "You have a new notification!",
    "Your order has shipped.",
    "You have a new message.",
  ];

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlePopupClick = (notification) => {
    // Handle popup click for the selected notification here
  };

  const open = Boolean(anchorEl);
  const id = open ? "notification-popover" : undefined;

  return (
    <>
      <IconButton onClick={handleClick}>
      <Badge color="error" variant="dot" invisible={invisible}>
          <NotificationsOutlinedIcon />
          </Badge>
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
          <div className="p-4">
  {notifications.map((notification, index) => (
    <div key={index} className="cursor-pointer" onClick={() => handlePopupClick(notification)}>
      <p className="text-black">{notification}</p>
      {index !== notifications.length - 1 && <hr className="my-2" />}
    </div>
  ))}
</div>
      </Popover>
    </>
  );
}

export default NotificationPopup;
