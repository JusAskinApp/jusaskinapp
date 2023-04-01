import React from "react";
import {
  Grid,
  TextField,
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
  Button,
} from "@material-ui/core";
import Switch from "@mui/material/Switch";

const theme = createTheme();
theme.overrides = {
  MuiOutlinedInput: {
    root: {
      borderRadius: "30px",
    },
  },
};

const responsiveTheme = responsiveFontSizes(theme);

function Settings(props) {
  return (
    <Grid container spacing={1}>
      <ThemeProvider theme={responsiveTheme}>
        <Grid item xs={12} sm={12} md={4}>
          <TextField
            label="Username"
            name="username"
            type="text"
            value={props.currentUser ? props.currentUser.name :  JSON.parse(localStorage.userDetail).name}
            variant="outlined"
            disabled
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <TextField
            label="Email"
            name="email"
            type="text"
            variant="outlined"
            value={props.currentUser ? props.currentUser.email : JSON.parse(localStorage.userDetail).email}
            disabled
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <TextField
            label="Location"
            name="location"
            type="text"
            variant="outlined"
            value={props.currentUser ? props.currentUser.email : JSON.parse(localStorage.userDetail).email}
            disabled
          />
        </Grid>
      </ThemeProvider>
      {/* <Grid item xs={6}>
        Recieve Notifications
      </Grid> */}
      {/* <Grid item xs={6}>
        <Switch />
      </Grid> */}
      <Grid item xs={12}>
        {/* <Button variant="outlined" color="error">
        Error
      </Button> */}
      </Grid>
    </Grid>
  );
}

export default Settings;
