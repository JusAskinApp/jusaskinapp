import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import {
  ThemeProvider,
  createTheme,
  TextField,
  responsiveFontSizes,
  InputAdornment,
  Button
} from "@material-ui/core";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import Stories from "./Stories";
import DialogBox from "./DialogBox";
import PropTypes from "prop-types";
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


  useEffect(() => {
    // setUserObject(JSON.parse(localStorage.getItem("userDetail")));
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
        // location.reload();

        // localStorage.setItem("userDetail", data);
        // navigate('/home');
      })
      .catch((error) => {
        // console.error(error);
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
      <IconButton>
        <NotificationsOutlinedIcon />
      </IconButton>
    </Grid>
    <Stories />
    <Grid item xs={11}>
      <ThemeProvider theme={responsiveTheme}>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '20px 0' }}>
                <TextField
                  style={{ width: "90%", marginTop: "20px", marginLeft: "2px" }}
                  label="What's on your mind"
                  id="outlined-size-small"
                  variant="outlined"
                  size="small"
                  onChange={(e) => {
                    setContent(e.target.value);
                  }}
                />
                <Button
                  variant="contained"
                  style={{ marginTop: "20px" }}
                  onClick={CreatePost}
                >Post</Button>
              </div>
      </ThemeProvider>
    </Grid>
    <Grid item xs={1}>
      <IconButton onClick={handleClickOpen}>
        <AddIcon
          fontSize="large"
          fontWeight="light"
          style={{ color: "#8ca1a6", marginTop: "11px" }}
        />
      </IconButton>
      <DialogBox open={open} onClose={handleClose} />
    </Grid>
  </Grid>
</Box>

    </div>
  );
}
