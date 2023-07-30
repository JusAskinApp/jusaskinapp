import { Box, Stack, Skeleton } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import Post from "./Post";

const Feed = (groupid) => {
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
    if (groupid.groupid) {
      url = "https://jusaskin.herokuapp.com/api/groups/getgrouppost/";
      getBlogObj = {
        interests: ["Nasir"],
        groupid:groupid.groupid

      }
    } else {
      url = "https://jusaskin.herokuapp.com/api/blogPosts/blogs/";
      getBlogObj = {
        interests: ["Nasir"]

      }
    }
    const getBlogs = async (id) => {
      debugger;
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(getBlogObj ),
      })
        .then((response) => response.json())
        .then((data) => {
          const randomizedData = shuffleArray(data);
          console.log(randomizedData);
          setBlogData(randomizedData);
          setBlogData(data);
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
          {blogData.map((item, index) => (
            <Box style={{ marginTop: "25px" }}>
              <Post
                name={item.author}
                date={item.date}
                content={item.content}
                images={item.imageIDs}
                blogRefId={item.blogRefId}
                comments={item.comments}
                likes={item.likes}
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
