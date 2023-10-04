import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import makeApiCall from "../Api/api";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import EmojiHappyIcon from "@material-ui/icons/EmojiEmotions";
import MapsUgcOutlinedIcon from "@mui/icons-material/MapsUgcOutlined";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useState, useEffect } from "react";
import Tooltip from "@mui/material/Tooltip";
import UrlParser from "./UrlParser";
import MorevertMenu from "./MorevertMenu";
const Post = (props) => {
  debugger;
  debugger;
  const [comment, setComment] = useState("");
  const [checked, setChecked] = useState(false);
  const [localComments, setLocalComment] = useState([]);
  const [likeCount, setCount] = useState(-1);
  const [error, setError] = useState(false);

  const [saved, setSaved] = useState(false);

  const handleSaveClick = () => {
    setSaved(!saved);
  };

  useEffect(() => {
    debugger;
    const likes = props.likes.data;
    const email = JSON.parse(
      JSON.parse(JSON.stringify(localStorage)).userDetail
    ).email;
    const foundObject = likes.find((obj) => obj.user.email === email);
    if (foundObject) {
      setChecked(true);
    }
  }, [props.likes]);
  const postComment = async (blogRefId) => {
    setError(false);
    let temp = [
      ...localComments,
      {
        comment: comment,
        userID: JSON.parse(JSON.parse(JSON.stringify(localStorage)).userDetail)
          .id,
        userName: JSON.parse(
          JSON.parse(JSON.stringify(localStorage)).userDetail
        ).name,
      },
    ];
    setLocalComment(temp);
    setComment("");
    debugger;
    try {
      const data = await makeApiCall(
        "https://jusaskin.herokuapp.com/api/blogPosts/addcomment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            blogRefID: blogRefId,
            comment: {
              userID: JSON.parse(
                JSON.parse(JSON.stringify(localStorage)).userDetail
              ).id,
              userName: JSON.parse(
                JSON.parse(JSON.stringify(localStorage)).userDetail
              ).name,
              comment: comment,
              Photo: JSON.parse(
                JSON.parse(JSON.stringify(localStorage)).userDetail
              ).urlLink
                ? JSON.parse(
                    JSON.parse(JSON.stringify(localStorage)).userDetail
                  ).urlLink[0]
                : "",
            },
          }),
        }
      );

      console.log(data);
    } catch (error) {
      setError(true);
      console.error(error);
    }
  };

  const dateGetter = (date) => {
    debugger;
    const TempDate = new Date(
      date._seconds * 1000 + date._nanoseconds / 1000000
    ).toString("dd-mmm-yyyy");
    const postDate = new Date(TempDate);
    const seconds = Math.floor((new Date() - postDate) / 1000);

    let interval = Math.floor(seconds / 31536000);

    if (interval >= 1) {
      return (
        "posted " + interval + " year" + (interval === 1 ? "" : "s") + " ago"
      );
    }

    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) {
      return (
        "posted " + interval + " month" + (interval === 1 ? "" : "s") + " ago"
      );
    }

    interval = Math.floor(seconds / 86400);
    if (interval >= 1) {
      return (
        "posted " + interval + " day" + (interval === 1 ? "" : "s") + " ago"
      );
    }

    interval = Math.floor(seconds / 3600);
    if (interval >= 1) {
      return (
        "posted " + interval + " hour" + (interval === 1 ? "" : "s") + " ago"
      );
    }

    interval = Math.floor(seconds / 60);
    if (interval >= 1) {
      return (
        "posted " + interval + " minute" + (interval === 1 ? "" : "s") + " ago"
      );
    }

    return (
      "posted " +
      Math.floor(seconds) +
      " second" +
      (Math.floor(seconds) === 1 ? "" : "s") +
      " ago"
    );
  };
  const docs = [{ uri: "https://url-to-my-pdf.pdf" }];

  function determineMediaType(url) {
    const videoExtensions = [".mp4", ".avi", ".mov", ".wmv"];
    const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".ico"];
    const pdfExtensions = [".pdf"];
    const pptExtensions = [".ppt", ".pptx"];
    const docExtensions = [".doc", ".docx"];
    const textExtensions = [".txt", ".md"];

    const fileExtension = url.substring(url.lastIndexOf(".")).split("?")[0];

    if (videoExtensions.includes(fileExtension)) {
      return "video";
    } else if (imageExtensions.includes(fileExtension)) {
      return "image";
    } else if (pdfExtensions.includes(fileExtension)) {
      return "pdf";
    } else if (pptExtensions.includes(fileExtension)) {
      return "ppt";
    } else if (docExtensions.includes(fileExtension)) {
      return "doc";
    } else if (textExtensions.includes(fileExtension)) {
      return "text";
    } else {
      return null;
    }
  }
  const likesUpdated = async (e) => {
    debugger;
    console.log(likeCount);
    setCount(e.target.checked ? props.likes.total + 1 : props.likes.total - 1);
    setChecked(e.target.checked ? true : false);
    try {
      const data = await makeApiCall(
        "https://jusaskin.herokuapp.com/api/blogPosts/updateLikes",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            blogRefID: props.blogRefId,
            like: e.target.checked ? 1 : -1,
            user: JSON.parse(
              JSON.parse(JSON.stringify(localStorage)).userDetail
            ),
          }),
        }
      );

      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar
            src={props.name.urlLink ? props.name.urlLink[0] : ""}
            alt=""
            aria-label="recipe"
          >
            {props.name.name && `${props.name.name.split(" ")[0][0]}`}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MorevertMenu/>
          </IconButton>
        }
        title={props.name.name}
        subheader={dateGetter(props.date)}
      />

      {/* <CardContent>
        <Typography variant="body2" color="text.secondary">
          <span style={{ fontWeight: "bold" }}></span>

          {props.content}

          {props.author}
        </Typography>
      </CardContent> */}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <span style={{ fontWeight: "bold" }}></span>
          {UrlParser(props.content)}
          {props.author}
        </Typography>
      </CardContent>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {props.images &&
          props.images.map((image, index) => (
            <div
              key={index}
              style={{
                flex:
                  props.images.length === 1
                    ? "1 1 100%"
                    : props.images.length === 2
                    ? "1 1 50%"
                    : "1 1 25%",
                padding: "10px",
              }}
            >
              {console.log(image)}
              {determineMediaType(image) === "video" ||
              determineMediaType(image) === "image" ? (
                <CardMedia
                  component={
                    determineMediaType(image) === "video" ? "video" : "img"
                  }
                  height="100%"
                  image={image}
                  alt="ERROR"
                  controls={determineMediaType(image) === "video"}
                />
              ) : (
                <div>
                  {determineMediaType(image) === "ppt" ? (
                    <iframe
                      title={"PDF-Viewer"}
                      src={`https://view.officeapps.live.com/op/embed.aspx?src=${image}`}
                      frameBorder={0}
                      style={{ height: "100vh", width: "100%" }}
                    ></iframe>
                  ) : (
                    <iframe src={image} width="100%" height="600"></iframe>
                  )}
                </div>
              )}
            </div>
          ))}
      </div>
      <CardActions disableSpacing style={{ justifyContent: "space-between" }}>
        <div>
          <IconButton aria-label="add to favorites">
            <Checkbox
              checked={checked}
              onChange={likesUpdated}
              icon={<FavoriteBorder sx={{ fontSize: 30 }} />}
              checkedIcon={<Favorite sx={{ color: "red", fontSize: 30 }} />}
            />
          </IconButton>

          <IconButton>
            <MapsUgcOutlinedIcon sx={{ fontSize: 30 }} />
          </IconButton>

          <IconButton aria-label="share">
            <Share sx={{ fontSize: 30 }} />
          </IconButton>
        </div>

        <Tooltip title={saved ? "Remove from saved" : "Save post"}>
          <IconButton onClick={handleSaveClick}>
            {saved ? (
              <BookmarkIcon sx={{ fontSize: 30, color: "black" }} />
            ) : (
              <BookmarkBorderIcon sx={{ fontSize: 30 }} />
            )}
          </IconButton>
        </Tooltip>
      </CardActions>

      <Box display="flex" ml={3} mb={2}>
        <Avatar
          alt="Remy Sharp"
          src={
            JSON.parse(JSON.parse(JSON.stringify(localStorage)).userDetail)
              .urlLink
              ? JSON.parse(JSON.parse(JSON.stringify(localStorage)).userDetail)
                  .urlLink[0]
              : ""
          }
          sx={{ width: 24, height: 24 }}
        />
        <Typography variant="body2" color="text.secondary" ml={1}>
          <span style={{ fontWeight: "bold" }}>
            {" "}
            {props.likes.data.length > 0
              ? props.likes.data[0].user
                ? props.likes.data[0].user.userName
                : ""
              : ""}{" "}
          </span>
          {props.likes.total > 0 && (
            <span>
              {props.likes.data.length > 0 ? "and " : ""}
              <span style={{ fontWeight: "bold" }}>
                {likeCount !== -1 ? likeCount : props.likes.total}
              </span>
              {props.likes.total === 1 ? " person" : " people"} liked this.
            </span>
          )}
          {props.likes.total === 0 && (
            <span>Be the first one to like this.</span>
          )}
        </Typography>
      </Box>
      <div
        className={`m-5 ${
          props.comments.length > 3
            ? "h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin"
            : ""
        }`}
      >
        {props.comments.length > 0 ? (
          <div>
            {/* {alert(JSON.stringify(props.comments))} */}
            {props.comments.map(
              (item, index) =>
                Object.keys(item).length !== 0 && (
                  <div className="flex items-center space-x-2 mb-3" key={index}>
                    <img
                      className="h-7 rounded-full"
                      src={item.Photo ? item.Photo : ""}
                      alt=""
                    />
                    <p className="text-sm flex-1">
                      <span className="font-bold">{item.userName}</span>{" "}
                      <span>{item.comment}</span>
                    </p>
                  </div>
                )
            )}
          </div>
        ) : (
          ""
        )}
        {localComments.length > 0 ? (
          <div>
            {localComments.map((item, index) => (
              <div className="flex items-center space-x-2 mb-3">
                <img
                  className="h-7 rounded-full"
                  src={
                    JSON.parse(
                      JSON.parse(JSON.stringify(localStorage)).userDetail
                    ).urlLink
                      ? JSON.parse(
                          JSON.parse(JSON.stringify(localStorage)).userDetail
                        ).urlLink[0]
                      : ""
                  }
                  alt=""
                />
                <p className="text-sm flex-1">
                  <span className="font-bold">
                    {
                      JSON.parse(
                        JSON.parse(JSON.stringify(localStorage)).userDetail
                      ).name
                    }
                  </span>{" "}
                  <span>{item.comment}</span>
                </p>
                {/* <span className="text-xs pr-5">9 seconds ago</span> */}
                {error === true ? (
                  <button
                    onClick={() => {
                      debugger;
                      postComment(props.blogRefId);
                    }}
                    style={{ color: "red", paddingLeft: "5px" }}
                  >
                    Retry
                  </button>
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
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
          onClick={(e) => {
            debugger;
            e.preventDefault();
            postComment(props.blogRefId);
          }}
        >
          Post
        </button>
      </form>
    </Card>
  );
};

export default Post;
