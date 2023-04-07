import { Button } from "@material-ui/core";
import React, { useState,useEffect } from "react";
import Tabsection from "../components/Tabsection";
import About from '../components/About';
import Settings from '../components/Settings';
import Post from '../components/Post';
import Resources from '../components/Resources';
// import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import IndividualChat from "../components/IndividualChat ";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
// import { Button } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import makeApiCall from "../Api/api";
import {
  Checkbox,
  IconButton,
} from "@mui/material";
// const tabs = [
//   { label: 'About', component: <About/> },
//   { label: 'Settings', component: <Settings/> },
//   { label: 'Saved', component: "test" },
//   { label: 'My Resources', component: <Resources/> },
// ];

function Profile(props) {
  const [fvt,setfvt] = useState(false)
  const addtofvt = async (currentUser) => {
    fvt == false ? setfvt(true) : setfvt(false)
    debugger;
    try {
      const data = await makeApiCall('http://localhost:4000/api/users/addtofvt', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          {
            "email":JSON.parse(localStorage.userDetail).email,
            "userobject":currentUser
          }
        ),

      });
     if (data.message = "Added"){
      console.log("added")
     }

    } catch (error) {
      // setError(true)
      console.error(error);
    }
  }
 const  tabs = [
    { label: 'About', component: <About currentUser={props.currentUser}/> },
    { label: 'Settings', component: <Settings/> },
    { label: 'Saved', component: "test" },
    { label: 'My Resources', component: <Resources currentUser={props.currentUser}/> },
  ];
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/462.jpg");
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
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setSelectedFile(file);
    setImageUrl(imageUrl);
  };
  useEffect(()=>{
    
  })
  return (
    <div>

      {!showChats ? (
        <>
          <div className="flex flex-row items-center justify-center mt-14 ml-10">

            
           <div style={{position: 'relative'}}>
          <img className="w-28 h-28 rounded-full border" src={imageUrl} alt="" />
          <IconButton 
          onChange={handleFileChange}
            color="primary" 
            aria-label="upload picture" 
            component="label"
            style={{
              position: 'absolute',
              bottom: '-6px',
              right: '-6px',
              borderRadius: '50%',
              backgroundColor: '#fff',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.25)'
            }}
          >
            <input hidden accept="image/*" type="file" />
                    <PhotoCamera />
          </IconButton>
        </div>
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
                      checked={fvt}
                       onChange={()=>{addtofvt(props.currentUser)}}
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
            <Tabsection currentUser={props.currentUser} tabs={tabs}/>
          </div>
        </>
      ) : (
        <IndividualChat profile={props.currentUser} onBackClick={handleBackClick} />
      )}
    </div>
  );
}

export default Profile;
