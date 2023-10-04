import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NotificationPopup from "./NotificationPopup";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import myIcon from "../assets/logo.png";
import { isMobile } from "react-device-detect";

function HeaderIcons() {
  return (
    <div>
      <div className="flex justify-end">
        <div className="flex items-center space-x-2 text-gray-500">
          {isMobile ? (
            <div style={{ margin: "15px 26px" }}>
              <img
                style={{ width: "150px", height: "30px" }}
                src={myIcon}
                alt=""
              />
            </div>
          ) : null}
          <IconButton>
            <Badge badgeContent={2} color="error">
              <EmailOutlinedIcon />
            </Badge>
          </IconButton>
          <IconButton>
            <NotificationPopup />
          </IconButton>
          <Avatar
            alt="Remy Sharp"
            src={
              JSON.parse(JSON.parse(JSON.stringify(localStorage)).userDetail)
                .urlLink
                ? JSON.parse(
                    JSON.parse(JSON.stringify(localStorage)).userDetail
                  ).urlLink
                : null
            }
          />
        </div>
      </div>
    </div>
  );
}

export default HeaderIcons;
