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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles({
  editIcon: {
    marginLeft: 10,
    fontSize: 15,
  },
  textField: {
    marginTop: 10,
  },
});

export default function AlertDialogSlide(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [description, setDescription] = useState("");

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
        <DialogTitle>{"Description"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Use this space to show clients you have the skills and experience
            they're looking for.<br></br>
            <ul>
              <li>- Describe your strengths and skills.</li>
              <li>- Highlight projects, accomplishments and education.</li>
              <li>- Keep it short and make sure it's error-free.</li>
            </ul>
          </DialogContentText>
          <Textarea
            onChange={handleDescriptionChange}
            minRows={4}
            className={classes.textField}
            value={description}
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
