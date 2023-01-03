import React, { useState } from "react";
import myIcon from "../assets/logo.png";
import facebook from "../assets/facebook-icon.png";
import google from "../assets/google-icon.png";
import twitter from "../assets/twitter-icon.png";
import {
  TextField,
  Paper,
  Typography,
  ThemeProvider,
  createMuiTheme,
  responsiveFontSizes,
  Grid,
  FormControl,
  Button,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";

const theme = createMuiTheme();
theme.overrides = {
  MuiOutlinedInput: {
    root: {
      borderRadius: "30px",
    },
  },
  MuiCheckbox: {
    colorSecondary: {
      color: "#eeeeee",
      "&$checked": {
        color: "#30b67f",
      },
    },
  },
  MuiButton: {
    contained: {
      backgroundColor: "#4ae6a7",
    },
  },
};
const responsiveTheme = responsiveFontSizes(theme);

export default function Signup() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const paperStyle = {
    padding: "40px 30px",
    width: 400,
    margin: "20px auto",
    textAlign: "center",
  };
  function handleSubmit(event) {
    debugger;
    event.preventDefault();
    console.log(name);
  }
  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <img src={myIcon} alt="My Icon" />
          <Typography
            style={{ marginTop: "30px", fontWeight: 700, fontSize: "24px" }}
            variant="h5"
            fontWeight="bold"
          >
            Create Your Account
          </Typography>
          <Typography
            style={{ marginTop: "15px", color: "#8CA1A6" }}
            variant="caption"
            gutterBottom
          >
            Please fill this form to create an account !
          </Typography>
        </Grid>
        <ThemeProvider theme={responsiveTheme}>
          <FormControl onSubmit={handleSubmit} style={{ width: "35ch" }}>
            <TextField
              value={name}
              onChange={(event) => setName(event.target.value)}
              style={{ width: "100%", marginTop: "40px" }}
              label="Full Name"
              id="outlined-size-small"
              variant="outlined"
            />
            <TextField
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              style={{ width: "100%", marginTop: "15px" }}
              label="Email"
              id="outlined-size-small"
              variant="outlined"
            />
            <TextField
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              style={{ width: "100%", marginTop: "15px" }}
              label="Password"
              id="outlined-size-small"
              variant="outlined"
            />
            <FormControlLabel
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                textAlign: "left",
                marginTop: "15px",
              }}
              control={<Checkbox style={{ marginBottom: "15px" }} />}
              label={
                <Typography
                  variant="caption"
                  style={{ color: "#8CA1A6" }}
                  gutterBottom
                >
                  By creating your account you agree to JusAskin's terms and
                  Privacy Policy
                </Typography>
              }
              labelPlacement="end"
            />

            <Button
              style={{
                width: "100%",
                height: "60px",
                marginTop: "15px",
                borderRadius: "40px",
                fontSize: "18px",
                fontWeight: "700",
              }}
              variant="contained"
            >
              Sing up
            </Button>
            <Grid container style={{ marginTop: "30px" }}>
              <Grid item xs={4} style={{ textAlign: "right" }}>
                <img src={facebook} alt="" />
              </Grid>
              <Grid item xs={4}>
                <img src={google} alt="" />
              </Grid>
              <Grid item xs={4} style={{ textAlign: "left" }}>
                <img src={twitter} alt="" />
              </Grid>
            </Grid>
          </FormControl>
        </ThemeProvider>
      </Paper>
    </Grid>
  );
}
