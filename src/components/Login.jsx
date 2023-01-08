import * as React from "react";
import myIcon from '../assets/logo.png';
import facebook from '../assets/facebook-icon.png';
import google from '../assets/google-icon.png';
import twitter from '../assets/twitter-icon.png';
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Paper,
  Typography,
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
  Grid,
  FormControl,
  Button
} from "@material-ui/core";

const theme = createTheme();
theme.overrides = {
  MuiOutlinedInput: {
    root: {
      borderRadius: "30px",
    },
  },
  MuiCheckbox: {
    colorSecondary: {
      color: '#eeeeee',
      '&$checked': {
        color: '#30b67f',
      },
    },
  },
  MuiButton: {
    contained: {
      backgroundColor: '#4ae6a7',
    },
  },
};
const responsiveTheme = responsiveFontSizes(theme);

export default function Login() {
  const navigate = useNavigate();
  const paperStyle = {
    padding: "40px 30px",
    width: 400,
    margin: "20px auto",
    textAlign: "center",
  };
  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
        <img src={myIcon} alt="My Icon" />
          <Typography
            style={{ marginTop: "30px", fontWeight:700, fontSize:"24px" }}
            variant="h5"
            fontWeight="bold"
          >
            Welcome Back
          </Typography>
          <Typography
            style={{ marginTop: "15px", color: "#8CA1A6" }}
            variant="caption"
            gutterBottom
          >
            We are glad to see you back!
          </Typography>
        </Grid>
        <ThemeProvider theme={responsiveTheme}>
        <FormControl style={{ width: "35ch" }}>
  
  <TextField
    style={{ width: "100%", marginTop: "50px" }}
    label="Email"
    id="outlined-size-small"
    variant="outlined"
  />
  <TextField
    style={{ width: "100%", marginTop: "15px" }}
    label="Password"
    id="outlined-size-small"
    variant="outlined"
  />
   <Typography
      variant="caption"
      style={{color: "#8CA1A6",marginTop: "15px",textAlign:'left'}}
      gutterBottom
    >
      Forgot Password
    </Typography>

  <Button
    style={{
      width: "100%",
      height: "60px",
      marginTop: "15px",
      borderRadius: "40px",
      fontSize:"18px",
      fontWeight:"700"
    }}
    variant="contained"
    onClick={()=>{
      navigate("/sidebar");
    }}
  >
    Log in
  </Button>
  <Grid container style={{ marginTop: "30px" }}>
  <Grid item xs={4} style={{textAlign:"right"}}>
    <img src={facebook} alt="" />
  </Grid>
  <Grid item xs={4}>
    <img src={google} alt="" />
  </Grid>
  <Grid item xs={4} style={{textAlign:"left"}}>
    <img src={twitter} alt="" />
  </Grid>
</Grid>
</FormControl>
        </ThemeProvider>
        
      </Paper>
    </Grid>
  );
}
