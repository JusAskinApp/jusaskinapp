import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import makeApiCall from '../Api/api';
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
  const [checked, setChecked] = useState(false);
  const [localComments,setLocalComment] = useState([])
  const [likeCount,setCount] = useState(-1)
  const [error,setError] = useState(false)
  const postComment = async (blogRefId) => {
    setError(false)
    let temp = [...localComments,{
      "comment": comment,
      "userID":JSON.parse(JSON.parse(JSON.stringify(localStorage)).userDetail).id,
      "userName": JSON.parse(JSON.parse(JSON.stringify(localStorage)).userDetail).name,
  }]
    setLocalComment(temp)
    setComment('')
    debugger;
    try {
      const data = await makeApiCall('"https://jusaskin.herokuapp.com/api/blogPosts/addcomment', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          {
            "blogRefID":blogRefId,
            "comment": {
              "userID":JSON.parse(JSON.parse(JSON.stringify(localStorage)).userDetail).id,
              "userName": JSON.parse(JSON.parse(JSON.stringify(localStorage)).userDetail).name,
              "comment": comment
            }
          }
        ),

      });
   
      console.log(data);
     
    } catch (error) {
      setError(true)
      console.error(error);
    }
  }
  const dateGetter = (date) => {
    if (date) {
      return new Date(
        date._seconds * 1000 + date._nanoseconds / 1000000
      ).toString("dd-mmm-yyyy");
    } else {
      return "0";
    }
  };
  const likesUpdated = async (e) => {
    debugger;
    setCount(e.target.checked ? props.likes.total + 1 : props.likes.total -1, )
    setChecked(e.target.checked ? true : false )
    try {
      const data = await makeApiCall('"https://jusaskin.herokuapp.com/api/blogPosts/updateLikes', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          {
            "blogRefID":props.blogRefId,
            "like":e.target.checked ? 1 : -1,
            "user": {
              "email":JSON.parse(JSON.parse(JSON.stringify(localStorage)).userDetail).email,
              "userName": JSON.parse(JSON.parse(JSON.stringify(localStorage)).userDetail).name,

            }
          }
        ),

      });
   
      console.log(data);
     
    } catch (error) {
      alert("hello")
      // setCount(e.target.checked ? props.likes.total - 1 : props.likes.total + 1, )
      // setChecked(false)
      console.error(error);
    }
  }

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
     <CardMedia component="img" height="20%" image={props.images !== undefined && props.images.length>0 ? props.images[0] : post} alt="Paella dish" />
      {/* <CardMedia component="img" height="20%" image={"https://storage.googleapis.com/jusaskinapp.appspot.com/pexels-pixabay-60597-50c8a256-6511-4a9f-a9f8-fba0f1f778b7.jpg"} alt="Paella dish" /> */}

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" 
        >
          <Checkbox
           checked={checked}
          onChange={likesUpdated}
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
          <span style={{ fontWeight: "bold" }}> {props.likes.data[0] ? props.likes.data[0].user ? props.likes.data[0].user.userName: '' : ''} </span>
          and <span style={{ fontWeight: "bold" }}>{likeCount !==-1 ? likeCount : props.likes.total} </span> liked this.
        </Typography>
      </Box>
      <div className="m-5 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">

      {props.comments.length > 0 ? (
        <div>
          {props.comments.map((item, index) => (
            
             <div className="flex items-center space-x-2 mb-3">
             <img
             className="h-7 rounded-full"
              src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/462.jpg"
             alt=""
             />
             <p className="text-sm flex-1">
               <span className="font-bold">{item.userName}</span>{" "}
               <span>{item.comment}</span>
               
             </p>
             <span className="text-xs pr-5">9 seconds ago</span>
             
           </div>
          ))}
        </div>
      ) : '' }
      {localComments.length > 0 ? (
        <div>
          {localComments.map((item, index) => (
            <div className="flex items-center space-x-2 mb-3">
            <img
            className="h-7 rounded-full"
            src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/462.jpg"
            alt=""
            />
            <p className="text-sm flex-1">
              <span className="font-bold">{JSON.parse(JSON.parse(JSON.stringify(localStorage)).userDetail).name}</span>{" "}
              <span>{item.comment}</span>
            </p>
            {/* <span className="text-xs pr-5">9 seconds ago</span> */}
            {error === true ? <button onClick={()=>{
              debugger;
              postComment(props.blogRefId)
              }} style={{color:"red",paddingLeft:"5px"}}>Retry</button> :'' }
          </div>
          ))}
        </div>
      ) : '' }
      </div>
     
      {/* comments */}

      {/* {/* <div className="m-5 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
        <div className="flex items-center space-x-2 mb-3">
          <img
          className="h-7 rounded-full"
          src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/462.jpg"
          alt=""
          />
          <p className="text-sm flex-1">
            <span className="font-bold">Abdul Haseeb</span>{" "}
            <span>this is a static comment</span>
            
          </p>
          <span className="text-xs pr-5">9 seconds ago</span>
          
        </div>
      </div> */}

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
          onClick={((e)=>{
            debugger;
            e.preventDefault();
            postComment(props.blogRefId);
          })}
        >
          Post
        </button>
      </form>
    </Card>
  );
};

export default Post;
