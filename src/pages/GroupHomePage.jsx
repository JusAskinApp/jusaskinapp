
import React, { useState } from 'react'
import Feed from '../components/Feed'
import Header from '../components/Header'
import './home.css'
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Unstable_Grid2";
import { useLocation } from "react-router-dom";
import DialogBoxForGroups from '../components/DialogBoxForGroup';
import { createTheme, Box } from '@material-ui/core';
import { ThemeProvider } from 'styled-components';

function GroupHomePage() {
    const [mode, setMode] = useState("dark");
    const [content,setContent] = useState('')
    const {state} = useLocation();
    const groupid = state ? state.groupid : null;
    const join = state ? state.join : null;

    const [open, setOpen] = React.useState(false);
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
        group:groupid
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
                {join ?  <Grid container spacing={2} style={{ marginTop: '25px' }}>
                    <Grid item xs={12}>
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
                        </div>
                    </Grid>
                </Grid> : ''}
                <DialogBoxForGroups open={open} onClose={handleClose} groupid={groupid}/>
                <Feed groupid={groupid}/>
            </ThemeProvider>
        </div>
    )
}

export default GroupHomePage