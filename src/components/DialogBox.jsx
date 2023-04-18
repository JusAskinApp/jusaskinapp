import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import {
  TextField,
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Grid from "@material-ui/core/Grid";
import { IconButton } from "@mui/material";

const theme = createTheme();
theme.overrides = {
  MuiOutlinedInput: {
    root: {
      borderRadius: "30px",
    },
  },
  MuiButton: {
    contained: {
      backgroundColor: "#4ae6a7",
    },
  },
};
const responsiveTheme = responsiveFontSizes(theme);

export default function DialogBox(props) {
  const { onClose, open } = props;
  const [postTitle, setPostTitle] = useState("");
  const [postAuthor, setPostAuthor] = useState("");
  const [postDescription, setPostDescription] = useState("");
  // const [userDetail, setUserObject] = useState({});
  const [files, setFiles] = useState([]);
  let blogPost = {
    id: "",
    author: "",
    content: "",
    email : '',
    imageIDs: [],
    videoIDs: [],
    tags: ["Nasir"],
    userid:'',
  };
  const createPost = (e) => {
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
        // localStorage.setItem("userDetail", data);
        // navigate('/home');
      })
      .catch((error) => {
        // console.error(error);
      });
  };

  // const getProfilePicture = async (id) => {
  //   debugger;
  //   fetch(`https://backend-justaskin-production.up.railway.app/${id}`, {
  //     method: "GET",
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       return data.ProfilePicture;
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // };
  const handleClose = () => {
    debugger;
    onClose(true);
    setPostDescription('');
    setFiles([]);
  };

  const handleChange = (e) => {
    // setFile(e.target.files[0]);
    setFiles(Array.from(e.target.files));

  };
  const uploadFiles = async () => {
    debugger;
    const formData = new FormData();
    files.forEach((file) => {
      formData.append('files[]', file);
    });
    let promise = new Promise((resolve, reject) => {
      // https://jusaskin.herokuapp.com
      fetch(" http://jusaskin.herokuapp.com/api/resources/upload", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          resolve(data['fileUrls'])
          // alert("blog added");
          // localStorage.setItem("userDetail", data);
          // navigate('/home');
        })
        .catch((error) => {
          console.error(error);
          resolve([])
        });
      // resolve(true);
    });
    return promise;
  }
  const handlePost = async () => {
    debugger;
    debugger;
    let links = await uploadFiles();
    const userDetail = JSON.parse(localStorage.getItem("userDetail"));
    // let profilePic = getProfilePicture(userDetail.id);
    console.log(userDetail);
    blogPost.author = userDetail;
    blogPost.id = userDetail.id;
    blogPost.content = postDescription;
    blogPost.imageIDs = links
    blogPost.email = userDetail.email;
    blogPost.userid = userDetail.id;
    // blogPost.profilePicture = profilePic;
    createPost();
    handleClose();
  };

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      fullWidth
      maxWidth="xs"
      height="30%"
    >


      <div class="flex justify-between items-center">
        <Grid item xs={6}>
          <DialogTitle>Add New Post</DialogTitle>
        </Grid>
        <Grid item xs={6} align="right" style={{ paddingRight: '10px' }}>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Grid>
      </div>

      <List style={{ padding: "20px 25px" }}>
        <ThemeProvider theme={responsiveTheme}>
          {/* <ListItem disableGutters>
            <TextField
              label="Post Title"
              value={postTitle}
              onChange={(event) => setPostTitle(event.target.value)}
              fullWidth
              variant="outlined"
            />
          </ListItem> */}

          {/* <ListItem disableGutters>
            <TextField
              label="Post Author"
              value={postAuthor}
              onChange={(event) => setPostAuthor(event.target.value)}
              fullWidth
              variant="outlined"
            />
          </ListItem> */}

          <ListItem disableGutters>
            <TextField
              label="Post Description"
              value={postDescription}
              onChange={(event) => setPostDescription(event.target.value)}
              fullWidth
              multiline
              variant="outlined"
            />
          </ListItem>
          <ListItem disableGutters>
            <div class="outline-dashed border-gray-400 rounded w-full flex items-center justify-center mt-2">
              <button class="font-bold py-2 px-4 rounded-lg">
                <label for="file-upload" class="cursor-pointer flex flex-col">
                  <div class="text-center">
                    <svg
                      class="mx-auto w-10 h-10 text-gray-400 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                    </svg>
                  </div>
                  <span className="ml-2 text-center">
                    {files.length > 0 ? (
                      <p>{`${files.length} file${files.length > 1 ? 's' : ''} selected`}</p>
                    ) : (
                      <p>Browse Files to upload</p>
                    )}
                  </span>
                </label>
                <input
                  type="file"
                  id="file-upload"
                  onChange={handleChange}
                  class="hidden"
                  multiple
                />
              </button>
            </div>
          </ListItem>
          <ListItem disableGutters>
            <Button
              onClick={handlePost}
              style={{
                width: "100%",
                height: "60px",
                marginTop: "15px",
                borderRadius: "40px",
                fontSize: "18px",
                fontWeight: "700",
              }}
              variant="contained"
              type="submit"
            >
              Add Post
            </Button>
          </ListItem>
        </ThemeProvider>
      </List>
    </Dialog>
  );
}
