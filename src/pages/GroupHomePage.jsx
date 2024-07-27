import React, { useState, useEffect } from "react";
import Feed from "../components/Feed";
import "./home.css";
import Grid from "@mui/material/Unstable_Grid2";
import { json, useLocation, useParams } from "react-router-dom";
import DialogBoxForGroups from "../components/DialogBoxForGroup";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { Button, TextField, CircularProgress } from "@mui/material";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Demo from "../components/Demo";
import { createTheme, Box } from "@material-ui/core";
import { ThemeProvider } from "styled-components";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { isMobile } from "react-device-detect";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import SimpleDialogDemo from "../components/userPopup";
import { Dialog } from "@mui/material";
import TabSection from "../components/Tabsection";
import SettingsIcon from "@mui/icons-material/Settings";
import { uploadFiles } from "../utility/uploadUtility";
// import GroupComponent from "../components/GroupComponent";
// import TopicComponent from '../components/TopicComponent';
import Course from "../components/groups/courses/Course";

const GroupTitle = styled.h1`
  font-size: 28px;
  font-weight: bold;
  margin-top: 10px;
  text-transform: capitalize;
`;

const BannerImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 300px; /* Adjust the height as per your preference */
  border-radius: 8px;
  border: 2px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;



function GroupHomePage(props) {
  debugger;
  const navigate = useNavigate();
  const { id } = useParams();
  const { state } = useLocation();
  const [group,setGroup] = useState(state ? state.group : null)
  const [mode, setMode] = useState("dark");
  const [members, setMembers] = useState([]);
  const [content, setContent] = useState("");
  const [openpopup, setOpenPopup] = useState(false);
  const [join, setJoin] = useState(state ? state.join : false);
  const [showMeetingComp, setMeetingComp] = useState(true);
  const [open, setOpen] = useState(false);
  const [isResponseOk, setIsResponseOk] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [userLeft, setUserLeft] = useState(false);
  const [imagesUrl, setImages] = useState([]);
  const [bannerUrl, setBannerImage] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [formData, setFormData] = useState({
    description: '',
    groupname: '',
    imageurl: '',
    subtitle: '',
    bannerurl: ''
  });
  const [isAdmin, setIsAdmin] = useState(false);
  const groupid = group ? group.blogRefId : id;
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
    email: "",
    imageIDs: [],
    videoIDs: [],
    tags: ["test"],
    userid: "",
    group: groupid,
  };
  useEffect(() => {
    debugger
    if (!group) {
      fetchGroupDataById(id);
    } else {
      setFormData({
        description: group.description,
        groupname: group.groupname,
        imageurl: group.imageurl,
        subtitle: group.subtitle,
        bannerurl: group.bannerurl
      });
      setIsAdmin(group.admin && group.admin.email === JSON.parse(localStorage.getItem('userDetail')).email);
     
    }
  }, [id, group]);

  

  const fetchGroupDataById = async (groupId) => {
    debugger
    try {
      const userEmail = JSON.parse(localStorage.getItem('userDetail')).email;
      const response = await fetch('http://localhost:5000/api/groups/getgroupsbyid', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ groupId, userEmail })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setGroup(data);
      setJoin(data.admin.email === userEmail ? true : data.join);
      setFormData({
        description: data.description,
        groupname: data.groupname,
        imageurl: data.imageurl,
        subtitle: data.subtitle,
        bannerurl: data.bannerurl
      });
      // setLoading(false);
    } catch (error) {
      console.error('Error fetching group data:', error);
      // setLoading(false);
    }
  };
  const tabs = [
    { label: 'Feed', component:  <Feed groupid={groupid} isAdmin={group?.admin.email === JSON.parse(localStorage.getItem("userDetail")).email}/>},
    { label: 'Course', component: <Course/> },
  ];
  useEffect(() => {
    retrieveGroupMembers(groupid);
  }, []);
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
        window.location.reload(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };
//  const uploadFiles = async (files) => {
//     debugger;
//     if (files.length > 0) {
//       const formData = new FormData();
//       files.forEach((file) => {
//         formData.append("files[]", file);
//       });
//       let promise = new Promise((resolve, reject) => {
//         fetch("https://jusaskin.herokuapp.com/api/resources/upload", {
//           method: "POST",
//           body: formData,
//         })
//           .then((response) => response.json())
//           .then((data) => {
//             console.log(data);
//             resolve(data["fileUrls"]);
//           })
//           .catch((error) => {
//             console.error(error);
//             resolve([]);
//           });
//         // resolve(true);
//       });
//       return promise;
//     } else {
//       return true;
//     }
//   };
  const scheduleMeeting = () => {
    debugger;
    setMeetingComp((prevFlag) => !prevFlag);
  };
  const onBackClick = () => {
    debugger;
    setMeetingComp((prevFlag) => !prevFlag);
  };

  const retrieveGroupMembers = (groupid) => {
    debugger;
    fetch("https://jusaskin.herokuapp.com/api/groups/getallmembers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ groupId: groupid }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMembers(data.members);

        // window.location.reload(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  async function leaveGroup(groupid) {
    debugger;
    try {
      const response = await fetch(
        "https://jusaskin.herokuapp.com/api/groups/leavegroup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            groupId: groupid,
            userEmail: JSON.parse(localStorage.getItem("userDetail")).email,
          }),
        }
      );
      if (response.ok) {
        alert("user left");

        setJoin(false);
        // setUserLeft(true);
      } else {
        // setUserLeft(false);
      }
    } catch (error) {
      console.log(error);
    }
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
        setJoin(true);
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

  const [openDialog, setOpenDialog] = React.useState(false);

  // Function to open the dialog
  const openUserPopup = () => {
    debugger;
    setOpenDialog(true);
  };

  // Function to close the dialog
  const closeDialog = () => {
    setOpenDialog(false);
  };
  const handleChange = (e) => {
    // setFile(e.target.files[0]);
    debugger;
    if (e.target.name === "image") {
      setImages(Array.from(e.target.files));
    } else {
      setBannerImage(Array.from(e.target.files));
    }
  };
  const CreatePost = () => {
    debugger;
    const userDetail = JSON.parse(localStorage.getItem("userDetail"));
    blogPost.author = userDetail;
    blogPost.id = userDetail.id;
    blogPost.content = content;
    blogPost.email = userDetail.email;
    blogPost.userid = userDetail.id;
    InsertBlogPost();
  };

  const handleModelOpen = () => {
    setIsModelOpen(true);
  };

  const handleModelClose = () => {
    setIsModelOpen(false);
  };

  
  const handleSave = async () => {
    debugger;
    setIsLoading(true); // Set loading state to true

    try {
      if (imagesUrl.length > 0) {
        formData.imageurl = await uploadFiles(imagesUrl);
      }
      if (bannerUrl.length > 0) {
      console.log(formData.bannerurl)

        formData.bannerurl = await uploadFiles(bannerUrl);
      }

      const response = await fetch(
        "https://jusaskin.herokuapp.com/api/groups/updategroup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            groupId: groupid,
            ...formData,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        handleClose();
      } else {
        console.error("Error updating group data:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating group data:", error);
    } finally {
      setIsLoading(false);
      handleModelClose();
      let newFormData = {...group}
      newFormData.groupname = formData.groupname;
      newFormData.imageurl = formData.imageurl;
      newFormData.subtitle = formData.subtitle;
      newFormData.bannerurl = formData.bannerurl;
      newFormData.description = formData.description;

      setGroup(newFormData)
      // window.location.reload(true);
    }
  };

  return (
    <div className="header">
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
                  {group && group.bannerurl ? (
                    <BannerImage src={group.bannerurl} alt="Banner" />
                  ) : (
                    ""
                  )}

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <GroupTitle>{group?.groupname}</GroupTitle>
                    </div>

                    <div className="gap-1 flex space-x-1 items-center">
                     
                      {join && (
                        <button
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded-lg"
                          onClick={scheduleMeeting}
                        >
                          <CalendarMonthIcon />{" "}
                          {isMobile ? "" : "Schedule Meeting"}
                        </button>
                      )}
                      {join ? (
                        <Button
                          variant="outlined"
                          color="primary"
                          onClick={() => leaveGroup(groupid)} // Wrap in an anonymous function
                        >
                          Leave Group
                        </Button>
                      ) : (
                        <button
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded-lg"
                          onClick={() => {
                            joinGroup(groupid);
                          }}
                        >
                          <PersonAddAltIcon /> {isMobile ? "" : "  Join Group"}
                        </button>
                      )}
                      {isAdmin ? (
                        <Button variant="outlined" onClick={handleModelOpen}>
                          <SettingsIcon fontSize="25px" /> Edit
                        </Button>
                      ) : (
                        ""
                      )}
                      <Dialog open={isModelOpen} onClose={handleModelClose}>
                        <Box p={3}>
                          <h2>Edit Group</h2>
                          <TextField
                            label="Group Name"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={formData.groupname}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                groupname: e.target.value,
                              })
                            }
                          />
                         
                          <br />
                          <div
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <label htmlFor="image">Upload Group Image:</label>
                            <Button variant="contained" component="label">
                              Upload
                              <input
                                name="image"
                                type="file"
                                id="image"
                                onChange={handleChange}
                                style={{ display: "none" }}
                              />
                            </Button>
                            {imagesUrl &&
                              imagesUrl.length > 0 &&
                              imagesUrl[0] && (
                                <p>Selected Image: {imagesUrl[0].name}</p>
                              )}

                            <label htmlFor="banner">Upload Group Banner:</label>
                            <Button variant="contained" component="label">
                              Upload
                              <input
                                name="banner"
                                type="file"
                                id="banner"
                                onChange={handleChange}
                                style={{ display: "none" }}
                              />
                            </Button>
                            {bannerUrl &&
                              bannerUrl.length > 0 &&
                              bannerUrl[0] && (
                                <p>Selected Image: {bannerUrl[0].name}</p>
                              )}
                          </div>
                          <TextField
                            label="Subtitle"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            value={formData.subtitle}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                subtitle: e.target.value,
                              })
                            }
                          />
                          <TextField
                            label="Description"
                            variant="outlined"
                            multiline
                            rows={4}
                            fullWidth
                            margin="normal"
                            value={formData.description}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                description: e.target.value,
                              })
                            }
                          />
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={handleSave}
                          >
                            {isLoading ? (
                              <CircularProgress size={24} color="inherit" />
                            ) : (
                              "Save"
                            )}
                          </Button>
                        </Box>
                      </Dialog>
                    </div>
                  </div>

                  <div className="bg-gray-100 p-4 rounded">
                    <div>
                      <p>{group?.description}</p>
                    </div>
                    <div>
                      <AvatarGroup
                        onClick={openUserPopup}
                        total={members.length}
                      >
                        {members.map((item, ind) => (
                          <Avatar
                            key={ind}
                            alt="Remy Sharp"
                            src={item.urlLink ? item.urlLink[0] : ""}
                          />
                        ))}
                      </AvatarGroup>
                      <SimpleDialogDemo
                        open={openDialog}
                        onClose={closeDialog}
                        members={members}
                        isAdmin={isAdmin}
                        groupid={groupid}
                      />
                    </div>
                  </div>
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
                        onClick={CreatePost}
                      >
                        Post
                      </button>

                      <IconButton onClick={handleClickOpen}>
                        <AddIcon
                          fontSize="large"
                          fontWeight="light"
                          style={{ color: "#8ca1a6" }}
                        />
                      </IconButton>
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
                  <button
                    variant="contained"
                    color="primary"
                    onClick={() => setShowPopup(false)}
                  >
                    Close
                  </button>
                </div>
              )}
              
              <DialogBoxForGroups
                open={open}
                onClose={handleClose}
                groupid={groupid}
              />
              <TabSection tabs={tabs}/>
              {/* <Feed groupid={groupid} isAdmin={group?.admin.email === JSON.parse(localStorage.getItem("userDetail")).email}/> */}
            </div>
          ) : null
        ) : (
          <div>
            <IconButton onClick={onBackClick}>
              <ArrowBackOutlinedIcon />
            </IconButton>
            <Demo groupid={groupid} />
          </div>
        )}
      </ThemeProvider>
    </div>
  );
}

export default GroupHomePage;
