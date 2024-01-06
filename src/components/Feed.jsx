import { Box, Stack, Skeleton } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import Post from "./Post";

const Feed = (choice) => {
  const [loading, setLoading] = useState(true);
  const [blogData, setBlogData] = useState([]);
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  setTimeout(() => {
    setLoading(false);
  }, [5000]);
  useEffect(() => {
    debugger;
    // let url = "https://jusaskin.herokuapp.com/api/blogPosts/blogs/";
    let url = ""
    let getBlogObj = {}
    if (choice.groupid) {
      url = "https://jusaskin.herokuapp.com/api/groups/getgrouppost/";
      getBlogObj = {
        interests: ["test"],
        groupid: groupid.groupid

      }
    }
    else if (choice.savedPosts == true) {
      url = "https://jusaskin.herokuapp.com/api/blogPosts/savedBlogs/";

    }
    else {
      url = "https://jusaskin.herokuapp.com/api/blogPosts/blogs/";
      getBlogObj = {
        interests: ["test"],
        savePersonEmail: JSON.parse(localStorage.getItem('userDetail')).email
      }
    }
    const getBlogs = async (id) => {
      debugger;
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          !choice.savedPosts ? getBlogObj : {
            savePersonEmail: JSON.parse(localStorage.getItem('userDetail')).email
          }
        ),
      })
        .then((response) => response.json())
        .then((data) => {
          const randomizedData = shuffleArray(data);
          setBlogData(randomizedData);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };
    const storedData = localStorage.getItem("userDetail");
    console.log("tes", storedData);
    getBlogs();
  }, []);
  return (
    <div>
      {blogData.length > 0 ? (
        <>
          {blogData.map((item) => (
            <Box style={{ marginTop: "25px" }}>
              <Post
                name={item.author}
                date={item.date}
                content={item.content}
                images={choice.savedPosts ? item.images : item.imageIDs}
                blogRefId={item.blogRefId}
                comments={item.comments}
                likes={item.likes}
                isAdmin={JSON.parse(localStorage.getItem("userDetail")).email === item.author.email}
                saved={item.saved}
              />
            </Box>
          ))}
        </>
      ) : loading ? (
        <Stack spacing={1}>
          <Skeleton variant="text" height={100} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="rectangular" height={300} />
        </Stack>
      ) : null}
    </div>
  );
};

export default Feed;
