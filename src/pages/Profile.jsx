import { Button } from "@material-ui/core";
import React, { useState } from "react";
import Tabsection from "../components/Tabsection";
import IndividualChat from "../components/IndividualChat ";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
// import { Button } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import {
  Checkbox,
  IconButton,
} from "@mui/material";
function Profile(props) {
  debugger;
  const [showChats, setShowChat] = useState(false)
  function handleStartChatClick() {
    debugger;
    console.log(props.currentUser)
    setShowChat(true)
  }
  const handleBackClick = () => {
    // setSelectedProfile(null);
    setShowChat(false)
  };
  return (
    <div>

      {!showChats ? (
        <>
          <div className="flex flex-row items-center justify-center mt-14 ml-10">

            <img className="w-28 h-28 rounded-full border" src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/462.jpg" alt="" />
            <div className="ml-11">
              <h2 className="font-bold text-lg mb-1">{props.currentUser ? props.currentUser.name : JSON.parse(localStorage.userDetail).name}</h2>
              <h3 className="text-sm text-gray-400">ML | AI | Big Data</h3>
              {/* <div className="flex justify-end">
                <IconButton aria-label="add to favorites">
                  <Checkbox
                    checked="true"
                    // onChange={likesUpdated}
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite sx={{ color: "red" }} />}
                  />
                </IconButton>
              </div> */}


              {props.currentUser ? (
                // <button
                //   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                //   onClick={handleStartChatClick}
                // >
                //   Start Chat
                // </button>


                <div className="flex items-center space-x-4">
                  <Button onClick={handleStartChatClick} startIcon={<ChatIcon />}>
                    Chat
                  </Button>
                  <IconButton aria-label="add to favorites">
                    <Checkbox
                      checked={true}
                      // onChange={likesUpdated}
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite sx={{ color: "red" }} />}
                    />
                  </IconButton>
                  {/* <span>Add to favorites</span> */}
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>

      
          <div className="mt-8 px-22 sm:px-4 xs:px-2 md:px-20">
            <Tabsection currentUser={props.currentUser} />
          </div>
        </>
      ) : (
        <IndividualChat profile={props.currentUser} onBackClick={handleBackClick} />
      )}
    </div>
  );
}

export default Profile;
