import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import makeApiCall from "../Api/api";
import { useState } from "react";
import CustomSnackbar from "./CustomSnackbar";
export default function MorevertMenu(props) {
  debugger;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [showSnackbar, setShowSnackbar] = useState(false);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  async function handleDelete() {
    debugger;
    try {
      const data = await makeApiCall(
        "https://jusaskin.herokuapp.com/api/blogPosts/deleteblogpost",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            blogId: props.post.blogRefId,
            email:JSON.parse(localStorage.getItem('userDetail')).email
          }),
        }
      );

      if (data.status == "ok") {
        window.location.reload();
      } else {
        setShowSnackbar(true)
      }
    } catch (error) {
      console.error(error);
    }
  }
  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setShowSnackbar(false);
  };
  return (
    <div>
      <CustomSnackbar
        open={showSnackbar}
        autoHideDuration={6000}
        handleClose={handleCloseSnackbar}
        message="Something went wrong"
        severity="error"
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      />
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>

      {props.isAdmin ? <Menu
        style={{ padding: "10px" }}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {<MenuItem onClick={handleDelete}>Delete Post</MenuItem>}
      </Menu> : ''}

    </div>
  );
}
