import { Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Tabsection from "../components/Tabsection";
import About from "../components/About";
import Settings from "../components/Settings";
import Post from "../components/Post";
import Resources from "../components/Resources";
import EditIcon from "@material-ui/icons/Edit";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import IndividualChat from "../components/IndividualChat ";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import ChatIcon from "@mui/icons-material/Chat";
import makeApiCall from "../Api/api";
import { Checkbox, IconButton } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { Rating } from '@mui/material';
import DialogForProfessSkills from "../components/DialogForProfessSkills";

const useStyles = makeStyles({
  editIcon: {
    fontSize: 'medium',
  }
});

function Profile(props) {
  debugger;
  // alert(props)
  const [fvt, setfvt] = useState(false)
  const [selectedFile, setSelectedFile] = useState(null);
  const [text, setText] = useState('');
  const [imageUrl, setImageUrl] = useState(
    "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/462.jpg"
  );
  debugger;
  const [showChats, setShowChat] = useState(false);
  const addtofvt = async (currentUser) => {
    fvt == false ? setfvt(true) : setfvt(false)
    debugger;
    try {
      const data = await makeApiCall('https://jusaskin.herokuapp.com/api/users/addtofvt', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          {
            "email": JSON.parse(localStorage.userDetail).email,
            "userobject": currentUser
          }
        ),

      });
      if (data.message = "Added") {
        console.log("added")
      }

    } catch (error) {
      // setError(true)
      console.error(error);
    }
  };
  const updateLocalStorage = (link) => {
    debugger
    let obj = JSON.parse(localStorage.userDetail);
    const newProps = {
      urlLink: [link],
    };
    const updatedObj = {
      ...obj,
      ...newProps
    };
    localStorage.setItem("userDetail", JSON.stringify(updatedObj));
  }
  const uploadFiles = async (FileInput) => {
    debugger;
    const formData = new FormData();
    formData.append('files[]', FileInput);
    let promise = new Promise((resolve, reject) => {
      // https://jusaskin.herokuapp.com
      fetch("https://jusaskin.herokuapp.com/api/resources/upload", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          resolve(data['fileUrls'])
        })
        .catch((error) => {
          console.error(error);
          resolve([])
        });
      // resolve(true);
    });
    return promise;
  }
  const classes = useStyles();
  useEffect(() => {
    setText(JSON.parse(localStorage.userDetail).headline)
  }, [])
  const tabs = [
    { label: "About", component: <About currentUser={props.currentUser} /> },
    { label: "Settings", component: <Settings currentUser={props.currentUser} /> },
    { label: "Saved", component: "test" },
    {
      label: "My Resources",
      component: <Resources currentUser={props.currentUser} />,
    },
  ];

  function handleStartChatClick() {
    debugger;
    console.log(props.currentUser);
    setShowChat(true);
  }
  const handleBackClick = () => {
    // setSelectedProfile(null);
    setShowChat(false);
  };
  const handleSave = (newText) => {
    debugger;
    setText(newText);
  };
  const UploadPhotoToUserObject = async (links) => {
    debugger;
    try {
      const data = await makeApiCall('https://jusaskin.herokuapp.com/api/users/addPhoto', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          {
            "email": JSON.parse(localStorage.userDetail).email,
            "urlLink": links

          }
        ),

      });
      if (data) {
        console.log("added")
        updateLocalStorage(links)
        // alert("added")
      }

    } catch (error) {
      // setError(true)
      console.error(error);
    }
  }
  const handleFileChange = async (event) => {
    debugger;
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImageUrl(imageUrl);
    const links = await uploadFiles(file)
    setSelectedFile(links);
    UploadPhotoToUserObject(links);

  };
  useEffect(() => { });
  return (
    <div>
      {!showChats ? (
        <>
          <div className="flex flex-row items-center justify-center mt-14 ml-10">
            <div style={{ position: "relative" }}>
              <img
                className="w-28 h-28 rounded-full border"
                src={selectedFile ? selectedFile[0] : props.currentUser ? props.currentUser.urlLink ? props.currentUser.urlLink[0] : '' : JSON.parse(localStorage.userDetail).urlLink ? JSON.parse(localStorage.userDetail).urlLink[0] : ''}
                alt=""
              />
              <IconButton
                onChange={handleFileChange}
                color="primary"
                aria-label="upload picture"
                component="label"
                style={{
                  position: "absolute",
                  bottom: "-6px",
                  right: "-6px",
                  borderRadius: "50%",
                  backgroundColor: "#fff",
                  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.25)",
                }}
              >
                <input hidden accept="image/*" type="file" />

                {!props.currentUser ? <PhotoCamera /> : ''}

              </IconButton>
            </div>
            <div className="ml-11">
              <h2 className="font-bold text-lg mb-1">
                {props.currentUser
                  ? props.currentUser.name
                  : JSON.parse(localStorage.userDetail).name}
              </h2>
              <div className="flex items-center">
                <h3 className="text-sm text-gray-400">{props.currentUser ? props.currentUser.discription ? props.currentUser.discription : '' : text}</h3>
                {/* <DialogForProfessSkills
                  onSave={handleSave}
                /> */}
                {!props.currentUser ? <DialogForProfessSkills onSave={handleSave} /> : ''}
              </div>
              <div className="flex justify-start">
                <Rating name="star-rating" value={5} />
              </div>

              {props.currentUser ? (
                <div className="flex items-center space-x-4">
                  <Button
                    onClick={handleStartChatClick}
                    startIcon={<ChatIcon />}
                  >
                    Chat
                  </Button>
                  <IconButton aria-label="add to favorites">
                    <Checkbox
                      checked={fvt}
                      onChange={() => { addtofvt(props.currentUser) }}
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
            <Tabsection currentUser={props.currentUser} tabs={tabs} />
          </div>
        </>
      ) : (
        <IndividualChat
          profile={props.currentUser}
          onBackClick={handleBackClick}
        />
      )}
    </div>
  );
}

export default Profile;
