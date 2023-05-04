import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import {
  createTheme,
  responsiveFontSizes,
} from "@material-ui/core";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import Stories from "./Stories";
import DialogBox from "./DialogBox";
import PropTypes from "prop-types";
import NotificationPopup from "./NotificationPopup";
const theme = createTheme();
theme.overrides = {
  MuiOutlinedInput: {
    root: {
      borderRadius: "30px",
    },
  },
};

const responsiveTheme = responsiveFontSizes(theme);
DialogBox.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  // selectedValue: PropTypes.string.isRequired,
};
export default function AutoGrid() {

  const [content, setContent] = useState("");
  const [userDetail, setUserObject] = useState({});
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (value) => {
    setOpen(false);
  };

  let blogPost = {
    id: "",
    author: "",
    content: "",
    email: '',
    imageIDs: [],
    videoIDs: [],
    tags: ["Nasir"],
    userid: '',
  };
  const InsertBlogPost = (e) => {
    console.log(blogPost);
    debugger;
    fetch("https://jusaskin.herokuapp.com/api/blogPosts/addBlog", {
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
  const CreatePost =  () => {
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
    <div>
      <Box sx={{ flexGrow: 1 }}>
  <Grid container spacing={2}>
    <Grid item xs={9}></Grid>
    <Grid item xs={1}>
      <IconButton>
        <SearchOutlinedIcon />
      </IconButton>
    </Grid>
    <Grid item xs={1}>
      <IconButton>
        <EmailOutlinedIcon />
      </IconButton>
    </Grid>
    <Grid item xs={1}>
    <NotificationPopup/>
    </Grid>
    </Grid>
    <Stories />
    <Grid container spacing={2} style={{marginTop:'25px'}}>
    <Grid item xs={11}>
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
</div>
    </Grid>
    <Grid item xs={1}>
      <IconButton onClick={handleClickOpen} style={{ marginTop: "20px" }}>
        <AddIcon
          fontSize="large"
          fontWeight="light"
          style={{ color: "#8ca1a6" }}
        />
      </IconButton>
      <DialogBox open={open} onClose={handleClose} />
    </Grid>
    </Grid>
</Box>

    </div>
  );
}
