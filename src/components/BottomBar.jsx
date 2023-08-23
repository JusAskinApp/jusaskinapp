import React, { useState } from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  Home as HomeIcon,
  Search as SearchIcon,
  LocalLibrary as ResourcesIcon,
  Group as GroupIcon,
  Message as MessagesIcon,
  AccountCircle as ProfileIcon,
  ExitToApp as LogoutIcon,
} from "@mui/icons-material";

function BottomBar() {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState("Home");

  const handleNavigation = (item) => {
    debugger;
    setActiveItem(item);
    if (item === "Home") {
      navigate("/home");
    } else if (item === "Search") {
      navigate("/search");
    } else if (item === "Group") {
      navigate("/group");
    } else if (item === "Resources") {
      navigate("/resource");
    } else if (item === "Messages") {
      navigate("/messages");
    } else if (item === "Profile") {
      navigate("/profile");
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("userDetail");
    navigate("/");
  };

  return (
    // <div style={{ position: "fixed", bottom: 0, width: "100%" }}>
    // <BottomNavigation
    //   value={activeItem}
    //   onChange={(event, newValue) => handleNavigation(newValue)}
    // >
    //   <BottomNavigationAction
    //     value="Home"
    //     label="Home"
    //     icon={<HomeIcon />}
    //   />
    //   <BottomNavigationAction
    //     value="Search"
    //     label="Search"
    //     icon={<SearchIcon />}
    //   />
    //   <BottomNavigationAction
    //     value="Group"
    //     label="Group"
    //     icon={<GroupIcon />}
    //   />
    //   <BottomNavigationAction
    //     value="Resources"
    //     label="Resources"
    //     icon={<ResourcesIcon />}
    //   />
    //   <BottomNavigationAction
    //     value="Messages"
    //     label="Messages"
    //     icon={<MessagesIcon />}
    //   />
    //   <BottomNavigationAction
    //     value="Profile"
    //     label="Profile"
    //     icon={<ProfileIcon />}
    //   />
    // </BottomNavigation>
    // </div>

    <div class="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border-gray-200 bottom-0 left-1/2">
      <div class="grid h-full max-w-lg grid-cols-7 gap-2 mx-auto">
        <div class="flex items-center justify-center">
          <button
            onClick={() => handleNavigation("Home")}
            data-tooltip-target="tooltip-home"
            type="button"
            class="inline-flex items-center justify-center w-10 h-10 font-medium  focus:bg-gray-300  rounded-full bg-blue-300rounded-full group"
          >
            <HomeIcon/>
            <span class="sr-only">Home</span>
          </button>
        </div>
        <div class="flex items-center justify-center">
          <button
            onClick={() => handleNavigation("Search")}
            data-tooltip-target="tooltip-wallet"
            type="button"
            class="inline-flex items-center justify-center w-10 h-10 font-medium  focus:bg-gray-300  rounded-full bg-blue-300rounded-full group"


          >
            <SearchIcon />
            <span class="sr-only">Search</span>
          </button>
        </div>
        {/* <div
          id="tooltip-wallet"
          role="tooltip"
          class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Search
          <div class="tooltip-arrow" data-popper-arrow></div>
        </div> */}
        <div class="flex items-center justify-center">
          <button
            onClick={() => handleNavigation("Group")}
            data-tooltip-target="tooltip-new"
            type="button"
            class="inline-flex items-center justify-center w-10 h-10 font-medium  focus:bg-gray-300  rounded-full bg-blue-300rounded-full group"


          >
            <GroupIcon />
            <span class="sr-only">Group</span>
          </button>
        </div>
        <div class="flex items-center justify-center">
          <button
            onClick={() => handleNavigation("Resources")}
            data-tooltip-target="tooltip-settings"
            type="button"
            class="inline-flex items-center justify-center w-10 h-10 font-medium  focus:bg-gray-300  rounded-full bg-blue-300rounded-full group"



          >
            <ResourcesIcon />
            <span class="sr-only">Resources</span>
          </button>
        </div>
        <div class="flex items-center justify-center">
          <button
            onClick={() => handleNavigation("Messages")}
            data-tooltip-target="tooltip-profile"
            type="button"
            class="inline-flex items-center justify-center w-10 h-10 font-medium  focus:bg-gray-300  rounded-full bg-blue-300rounded-full group"



          >
            <MessagesIcon />
            <span class="sr-only">Messages</span>
          </button>
        </div>
        <div class="flex items-center justify-center">
          <button
            onClick={() => handleNavigation("Profile")}
            data-tooltip-target="tooltip-profile"
            type="button"
            class="inline-flex items-center justify-center w-10 h-10 font-medium  focus:bg-gray-300  rounded-full bg-blue-300rounded-full group"



          >
            <ProfileIcon />
            <span class="sr-only">Profile</span>
          </button>
        </div>
        <div class="flex items-center justify-center">
          <button
            onClick={() => handleLogout()}
            data-tooltip-target="tooltip-logout"
            type="button"
            class="inline-flex items-center justify-center w-10 h-10 font-medium  focus:bg-gray-300  rounded-full bg-blue-300rounded-full group"

          >
           <LogoutIcon />
            <span class="sr-only">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BottomBar;
