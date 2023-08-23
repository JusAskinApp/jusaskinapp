import React, { useState } from "react";
import Feed from "../components/Feed";
import "./home.css";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Unstable_Grid2";
import { useLocation } from "react-router-dom";
import DialogBoxForGroups from "../components/DialogBoxForGroup";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { Button } from "@mui/material";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Divider from "@mui/material/Divider";
import LockIcon from "@mui/icons-material/Lock";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Demo from '../components/Demo'
import { createTheme, Box } from '@material-ui/core';
import { ThemeProvider } from 'styled-components';
const GroupTitle = styled.h1`
  font-size: 28px;
  font-weight: bold;
  margin-top: 10px;
  text-transform: capitalize;
`;

const SubtitleText = styled.p`
  font-size: 16px;
  color: #777;
`;

const BannerImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 300px; /* Adjust the height as per your preference */
  border-radius: 8px;
  border: 2px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

// import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
function GroupHomePage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState("dark");
  const [content, setContent] = useState('')
  const { state } = useLocation();
  const join = state ? state.join : null;
  const [showMeetingComp, setMeetingComp] = useState(true)
  const group = state ? state.group : null;
  // const bannerImageUrl = group?.bannerurl;
  // const groupTitle = group?.groupname;
  const [open, setOpen] = useState(false);
  const [isResponseOk, setIsResponseOk] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [expandedSection, setExpandedSection] = useState(false);
  const groupid = group?.blogRefId;
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (value) => {
    setOpen(false);
  };
  const darktheme = createTheme({
    pelette: {
      mode: mode,
    },
  });
  let blogPost = {
    id: "",
    author: "",
    content: "",
    email: '',
    imageIDs: [],
    videoIDs: [],
    tags: ["Nasir"],
    userid: '',
    group: groupid
  };
  const InsertBlogPost = (e) => {
    console.log(blogPost);
    debugger;
    fetch("https://jusaskin.herokuapp.com/api/groups/addpostingroup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blogPost),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("blog added");
        window.location.reload(true)
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const scheduleMeeting = () => {
    debugger;
    setMeetingComp((prevFlag) => !prevFlag);
  }
  const onBackClick = () => {
    debugger;
    setMeetingComp((prevFlag) => !prevFlag);

  }
  async function joinGroup(groupid) {
    debugger;
    try {
      const response = await fetch(
        "https://jusaskin.herokuapp.com/api/groups/adduseringroup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            groupid: groupid,
            members: JSON.parse(localStorage.getItem("userDetail")),
          }),
        }
      );
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        setIsResponseOk(true);
        setShowPopup(true);
      } else {
        setIsResponseOk(false);
        setShowPopup(false);
      }
    } catch (error) {
      setIsResponseOk(false);
      console.log(error);
      setShowPopup(false);
    }
  }
  const CreatePost = () => {
    debugger
    const userDetail = JSON.parse(localStorage.getItem("userDetail"));
    blogPost.author = userDetail;
    blogPost.id = userDetail.id;
    blogPost.content = content;
    blogPost.email = userDetail.email;
    blogPost.userid = userDetail.id
    InsertBlogPost()
  };
  return (
    <div className='header'>
      <ThemeProvider theme={darktheme}>
        {showMeetingComp ? (
          true ? (
            <div>
              <Grid container spacing={2} style={{ marginTop: "25px" }}>
                <Grid item xs={12}>
                  <IconButton
                    onClick={() => {
                      navigate("/group");
                    }}
                  >
                    <ArrowBackOutlinedIcon />
                  </IconButton>
                  <BannerImage src={group.bannerurl} alt="Banner" />

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <GroupTitle>{group.groupname}</GroupTitle>
                      {/* <SubtitleText>
       M                 <LockIcon style={{ fontSize: "16px" }} /> 
                      </SubtitleText> */}
                    </div>

                    <div>
                      {!join && !isResponseOk && (
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => {
                            joinGroup(groupid);
                          }}
                        >
                          Join Group
                        </Button>
                      )}
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => {
                          setExpandedSection(!expandedSection);
                        }}
                      >
                        {!expandedSection ? (
                          <ExpandMoreIcon />
                        ) : (
                          <KeyboardArrowUpIcon />
                        )}
                      </Button>
                    </div>
                  </div>
                  {expandedSection && (
                    <div className="bg-gray-100 p-4 rounded">
                      <div>
                        <p>{group.description}</p>
                      </div>

                      <div>
                        <AvatarGroup total={group.members.length}>
                          {group.members.map((item, ind) => {
                            <Avatar alt="Remy Sharp" src={item.urlLink[ind]} />
                          })}


                        </AvatarGroup>
                      </div>
                    </div>
                  )}
                  <br></br>
                  <Divider />
                  <br></br>
                  {(join || isResponseOk) && (
                    <div className="flex flex-row items-center">
                      <input
                        className="w-full py-2 px-4 border border-gray-400 rounded-lg text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                        type="text"
                        placeholder="What's on your mind"
                        onChange={(e) => {
                          setContent(e.target.value);
                        }}
                      />
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded-lg"
                        onClick={handleClickOpen}
                      >
                        upload
                      </button>

                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded-lg"
                        onClick={CreatePost}
                      >
                        Post
                      </button>
                      <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded-lg"
                      onClick={scheduleMeeting}
                    >
                      Schedule
                    </button>
                    </div>
                  )}
                </Grid>
              </Grid>
              {showPopup && (
                <div
                  style={{
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    padding: "20px",
                    background: "#fff",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  <h2>Congratulations!</h2>
                  <p>
                    You are now a member of this group. You can now actively
                    participate.
                  </p>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => setShowPopup(false)}
                  >
                    Close
                  </Button>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded-lg"
                    onClick={scheduleMeeting}
                  >
                    Schedule
                  </button>
                </div>
              )}
              <DialogBoxForGroups open={open} onClose={handleClose} groupid={groupid} />
              <Feed groupid={groupid} />
            </div>
          ) : null
        ) : <div>
          <IconButton onClick={onBackClick}>
            <ArrowBackOutlinedIcon />
          </IconButton>
          <Demo groupid={groupid} />
        </div>}



      </ThemeProvider>
    </div>
  )
}

export default GroupHomePage;
