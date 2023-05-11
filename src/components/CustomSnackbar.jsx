import React, { useEffect } from "react";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

const CustomSnackbar = ({
  open,
  message,
  severity,
  handleClose,
  anchorOrigin,
  autoHideDuration,
}) => {
  useEffect(() => {
    if (open && autoHideDuration) {
      const timer = setTimeout(() => {
        handleClose();
      }, autoHideDuration);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [open, autoHideDuration, handleClose]);

  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={handleClose}
      anchorOrigin={anchorOrigin}
    >
      <MuiAlert elevation={6} variant="filled" severity={severity} onClose={handleClose}>
        {message}
      </MuiAlert>
    </Snackbar>
  );
};

export default CustomSnackbar;
