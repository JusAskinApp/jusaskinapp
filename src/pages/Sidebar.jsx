import React, { useState } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import myIcon from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import Home from "./Home";
import SearchPage from "./Search";
import Sources from "./Sources";
import Group from "./Group";
import Messages from "./Messages";
import Profile from "./Profile";
import { Home as HomeIcon, Search as SearchIcon, LocalLibrary as ResourcesIcon, Group as GroupIcon, Message as MessagesIcon, AccountCircle as ProfileIcon, ExitToApp as LogoutIcon } from '@mui/icons-material';
const drawerWidth = 240;

function Sidebar(props) {
  const { window } = props;
  const navigate = useNavigate();
  const [activeItem, setSelectedItem] = useState("Home");

  function handleListItemClick(item) {
    setSelectedItem(item);
  }
  const handleLogout = () => {
    localStorage.removeItem("userDetail");
    navigate("/");
  };
  const drawer = (
    <div>
      <div style={{ margin: "15px 26px" }}>
        <img style={{ width: " 150px", height: "30px" }} src={myIcon} alt="" />
      </div>
      <div className="pl-6 pt-2">
        {[
          { text: "Home", icon: <HomeIcon style={{ color: "#757575" }} /> },
          { text: "Search", icon: <SearchIcon style={{ color: "#757575" }} /> },
          {
            text: "Resources",
            icon: <ResourcesIcon style={{ color: "#757575" }} />,
          },
          { text: "Group", icon: <GroupIcon style={{ color: "#757575" }} /> },
          {
            text: "Messages",
            icon: <MessagesIcon style={{ color: "#757575" }} />,
          },
          {
            text: "Profile",
            icon: <ProfileIcon style={{ color: "#757575" }} />,
          },
        ].map((item, index) => (
          <div key={item.text} className="flex items-center py-3">
            <div
              className={`flex cursor-pointer items-center justify-center${
                activeItem === item.text ? "bg-blue-500" : ""
              }`}
              onClick={() => handleListItemClick(item.text)}
            >
              {item.icon}
            </div>
            <div
              className={`ml-6 cursor-pointer ${
                activeItem === item.text ? "text-green-500" : ""
              } hover:text-green-500`}
              onClick={() => handleListItemClick(item.text)}
            >
              {item.text}
            </div>
          </div>
        ))}
        <div className="absolute bottom-0">
          <div
            className="flex items-center py-3 cursor-pointer hover:text-green-500"
            onClick={handleLogout}
          >
            <LogoutIcon style={{ color: "#757575" }} />
            <div className="ml-6">Logout</div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {activeItem === "Home" && <Home />}
        {activeItem === "Search" && <SearchPage />}
        {activeItem === "Resources" && <Sources />}
        {activeItem === "Group" && <Group />}
        {activeItem === "Messages" && <Messages />}
        {activeItem === "Profile" && <Profile />}
      </Box>
    </Box>
  );
}
export default Sidebar;