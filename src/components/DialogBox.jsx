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
  const { onClose, selectedValue, open } = props;
  const [postTitle, setPostTitle] = useState("");
  const [postAuthor, setPostAuthor] = useState("");
  const [postDescription, setPostDescription] = useState("");
  const [file, setFile] = useState(null);

  const handleClose = () => {
    debugger
    onClose(selectedValue);
  };

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handlePost = () => {
    debugger;
    console.log("hello")
  };

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      fullWidth
      maxWidth="xs"
      height="30%"
    >
      <DialogTitle>Add New Post</DialogTitle>
      <List style={{ padding: "20px 25px" }}>
        <ThemeProvider theme={responsiveTheme}>
          <ListItem disableGutters>
            <TextField
              label="Post Title"
              value={postTitle}
              onChange={(event) => setPostTitle(event.target.value)}
              fullWidth
              variant="outlined"
            />
          </ListItem>

          <ListItem disableGutters>
            <TextField
              label="Post Author"
              value={postAuthor}
              onChange={(event) => setPostAuthor(event.target.value)}
              fullWidth
              variant="outlined"
            />
          </ListItem>

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
                  <span class="ml-2 text-center">{file ? <p>{file.name}</p>: <p>Browse Files to upload</p>}</span>
                </label>
                <input type="file" id="file-upload" onChange={handleChange} class="hidden" />
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
