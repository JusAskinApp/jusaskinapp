import { Box, Stack, Skeleton } from "@mui/material";
import React, { useState } from "react";
import Post from "./Post";

const Feed = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, [3000]);

  return (
    <div>
      <Box flex={4} p={{ xs: 0, md: 0 }} marginTop="30px">
        {loading ? (
          <Stack spacing={1}>
            <Skeleton variant="text" height={100} />
            <Skeleton variant="text" height={20} />
            <Skeleton variant="text" height={20} />
            <Skeleton variant="rectangular" height={300} />
          </Stack>
        ) : (
          <>
            <Box my={2}>
              <Post />
            </Box>
            <Box my={2}>
              <Post />
            </Box>
            <Box my={2}>
              <Post />
            </Box>
            <Box my={2}>
              <Post />
            </Box>
            <Box my={2}>
              <Post />
            </Box>
            <Box my={2}>
              <Post />
            </Box>
          </>
        )}
      </Box>
    </div>
  );
};

export default Feed;
