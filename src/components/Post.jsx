import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";

import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  Grid,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import EmojiHappyIcon from "@material-ui/icons/EmojiEmotions";
import userimg from "../assets/userimg.png";
import post from "../assets/post.png";
import MapsUgcOutlinedIcon from "@mui/icons-material/MapsUgcOutlined";
import { useState } from "react";

const Post = (props) => {
  const [comment, setComment] = useState("");

  const [comments, setComments] = useState([]);

  // const sendComments = async (e) => {
  //   e.preventDefault();

  //   const commentsToSend = comment
  //   setComment('')
  // }

  const dateGetter = (date) => {
    if (date) {
      return new Date(
        date._seconds * 1000 + date._nanoseconds / 1000000
      ).toString("dd-mmm-yyyy");
    } else {
      return "0";
    }
  };

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar src={userimg} alt="" aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={props.name}
        subheader={dateGetter(props.date)}
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <span style={{ fontWeight: "bold" }}></span>

          {props.content}

          {props.author}
        </Typography>
      </CardContent>

      {/* <CardMedia component="img" height="20%" image={post} alt="Paella dish" />

          <span style={{ fontWeight: "bold" }}>Question: </span>

          What would government look like on Mars

        </Typography>

      </CardContent> */}

      <CardMedia component="img" height="20%" image={post} alt="Paella dish" />

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>

        <IconButton>
          <MapsUgcOutlinedIcon />
        </IconButton>

        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>

      {/* liked section */}

      <Box display="flex" ml={3} mb={2}>
        <Avatar alt="Remy Sharp" src={userimg} sx={{ width: 24, height: 24 }} />

        <Typography variant="body2" color="text.secondary" ml={1}>
          <span style={{ fontWeight: "bold" }}>Umar Khan </span>
          and <span style={{ fontWeight: "bold" }}>1 others </span> liked this.
        </Typography>
      </Box>

      {/* comments */}

      <div className="ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
        <div className="flex items-center space-x-2 mb-3">
          <img
          className="h-7 rounded-full"
          src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/462.jpg"
          alt=""
          />
        </div>
      </div>

      <form className="flex items-center p-5">
        <EmojiHappyIcon className="h-7" />

        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add a comment"
          className="border-none flex-1 focus:ring-0 outline-none mx-3"
        />

        <button
          className="font-semibold text-blue-400"
          disabled={!comment.trim()}
        >
          Post
        </button>
      </form>
    </Card>
  );
};

export default Post;
