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
import userimg from "../assets/userimg.png";
import post from "../assets/post.png";
import MapsUgcOutlinedIcon from "@mui/icons-material/MapsUgcOutlined";

const Post = (props) => {
  const dateGetter = (date) => {
   return (new Date((date._seconds * 1000) + (date._nanoseconds / 1000000))).toString("dd-mmm-yyyy")
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
      {/*comments section  */}

      {/* input field */}
    </Card>
  );
};

export default Post;
