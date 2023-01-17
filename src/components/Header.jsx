import React, { useState,useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import {
  ThemeProvider,
  createTheme,
  TextField,
  responsiveFontSizes,
} from "@material-ui/core";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import Stories from "./Stories";
const theme = createTheme();
theme.overrides = {
  MuiOutlinedInput: {
    root: {
      borderRadius: "30px",
    },
  },
};

const responsiveTheme = responsiveFontSizes(theme);
export default function AutoGrid() {
  const [content, setContent] = useState("");
  const [userDetail, setUserObject] = useState({});
  let blogPost = {
    id :'',
    author: "",
    content: "",
    imageIDs: [],
    videoIDs: [],
  };
  const createPost = (e) => {
    console.log(blogPost);
    debugger;
    fetch("https://backend-justaskin-production.up.railway.app/api/blogPosts/addBlog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blogPost),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // localStorage.setItem("userDetail", data);
        // navigate('/home');
      })
      .catch((error) => {
        // console.error(error);
      });
  };
  useEffect(() => {
    // setUserObject(JSON.parse(localStorage.getItem("userDetail")));
  });
  const  getProfilePicture = async (id) =>{
    debugger;
    fetch(`https://backend-justaskin-production.up.railway.app/${id}`, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        return data.ProfilePicture;
      })
      .catch(error => {
        console.error('Error:', error);
      });

  }
  const handleClick = async () => {
    debugger;
    const userDetail = JSON.parse(localStorage.getItem("userDetail"))
    let profilePic = await getProfilePicture(userDetail.id)
    console.log(userDetail);
    blogPost.author = userDetail.name;
    blogPost.id = userDetail.id;
    blogPost.content = content;
    blogPost.profilePicture = profilePic;
    createPost();
  };
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} textAlign="right">
          <Grid xs={10}></Grid>
          <Grid xs={1}>
            <IconButton>
              <SearchOutlinedIcon />
            </IconButton>
          </Grid>
          <Grid xs={1}>
            <IconButton>
              <EmailOutlinedIcon />
            </IconButton>
          </Grid>
          {/* will render a story component */}

          <Stories />
          {/* will render a story component */}

          <Grid item xs={11}>
            <ThemeProvider theme={responsiveTheme}>
              <TextField
                style={{ width: "100%", marginTop: "20px" }}
                label="What's on your mind"
                id="outlined-size-small"
                variant="outlined"
                size="small"
                onChange={(e) => {
                  setContent(e.target.value);
                }}
              />
            </ThemeProvider>
          </Grid>
          <Grid item xs={1}>
            <IconButton onClick={handleClick}>
              <AddIcon
                fontSize="large"
                fontWeight="light"
                style={{ color: "#8ca1a6", marginTop: "11px" }}
              />
            </IconButton>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
