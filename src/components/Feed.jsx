import { Box, Stack, Skeleton } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import Post from "./Post";

const Feed = () => {
  const [loading, setLoading] = useState(true);
  const [blogData, setBlogData] = useState([]);
  const getBlogs = async (id) => {
    debugger;
    fetch(
      `https://backend-justaskin-production.up.railway.app/api/blogPosts/blogs/`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setBlogData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  setTimeout(() => {
    setLoading(false);
  }, [3000]);
  useEffect(() => {
    debugger;
    const storedData = localStorage.getItem("userDetail");
    console.log("tes", storedData);
    getBlogs();
  }, []);
  return (
    <div>
      {blogData.length > 0 ? (
        <>
          {blogData.map((item, index) => (
            <Box style={{marginTop:'25px'}}>
              <Post
                name={item.author}
                date={item.date}
                content={item.content}
                images={item.imagesIDs}
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
