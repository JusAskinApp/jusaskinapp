import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@mui/material";
import EditIcon from "@material-ui/icons/Edit";
import Textarea from "@mui/joy/Textarea";
import makeApiCall from "../Api/api";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles({
  editIcon: {
    fontSize: "medium",
  },
  textField: {
    marginTop: 10,
  },
});

export default function AlertDialogSlide(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [description, setDescription] = useState("");
  const addHeadline = async (headline)=>{
    debugger;
    try {
      const data = await makeApiCall('https://jusaskin.herokuapp.com/api/users/headline', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          {
            "email": JSON.parse(localStorage.userDetail).email,
            "headline": headline

          }
        ),

      });
      if (data) {
        console.log("added")
        alert("added")
      }

    } catch (error) {
      // setError(true)
      console.error(error);
    }
  }
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    addHeadline(description)
    props.onSave(description);
    handleClose();
  };

  return (
    <div>
      <IconButton onClick={handleClickOpen}>
        <EditIcon className={classes.editIcon} />
      </IconButton>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Edit Your Title"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          Enter a single sentence description of your professional skills/experience (e.g. Expert Web Designer with Ajax experience)
          </DialogContentText>
          <Textarea
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Enter a single sentence description of your professional skills/experience (e.g. Expert Web Designer with Ajax experience)"
            className={classes.textField}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
