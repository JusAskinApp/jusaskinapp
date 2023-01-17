import React, { useState } from "react";
import myIcon from "../assets/logo.png";
import facebook from "../assets/facebook-icon.png";
import google from "../assets/google-icon.png";
import twitter from "../assets/twitter-icon.png";
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
  Button,
} from "@material-ui/core";
import { IconButton } from "@mui/material";

const theme = createTheme();
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

export default function Login() {
  const navigate = useNavigate();
  const paperStyle = {
    padding: "40px 30px",
    width: 450,
    margin: "100px auto",
    textAlign: "center",
  };
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };
  const loginUser = (e) => {
    debugger;
    fetch("https://backend-justaskin-production.up.railway.app/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data == "Email or password is wrong") {
          alert("Email Or Password Is Wrong")
        } else {
          localStorage.setItem("userDetail", JSON.stringify(data));
          navigate("/home");
        }
      })
      .catch((error) => {
        // console.error(error);
      });
  };
  const validate = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "Email is required";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    }
    return newErrors;
  };
  const handleSubmit = (event) => {
    debugger;
    event.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // submit the form
      loginUser();
      console.log(formData);
    }
  };
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
            Welcome Back
          </Typography>
          <Typography
            style={{ marginTop: "15px", color: "#8CA1A6" }}
            variant="body2"
            gutterBottom
          >
            We are glad to see you back!
          </Typography>
        </Grid>
        <ThemeProvider theme={responsiveTheme}>
          <form onSubmit={handleSubmit}>
            <FormControl style={{ width: "35ch" }}>
              <TextField
                style={{ marginTop: "40px" }}
                label="Email"
                name="email"
                type="email"
                variant="outlined"
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
              />
              <TextField
                style={{ marginTop: "15px" }}
                label="Password"
                name="password"
                type="password"
                variant="outlined"
                onChange={handleChange}
                error={!!errors.password}
                helperText={errors.password}
              />
              <Typography
                variant="caption"
                style={{
                  color: "#8CA1A6",
                  marginTop: "15px",
                  textAlign: "left",
                }}
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
                  fontSize: "18px",
                  fontWeight: "700",
                }}
                variant="contained"
                type="submit"
              >
                Log in
              </Button>
              <Grid
                container
                style={{ marginTop: "30px" }}
                justify="center"
                alignItems="center"
                spacing={1}
              >
                <Grid item xs={3}>
                  <IconButton>
                    <img src={facebook} alt="" />
                  </IconButton>
                </Grid>
                <Grid item xs={3}>
                  <IconButton>
                    <img src={google} alt="" />
                  </IconButton>
                </Grid>
                <Grid item xs={3}>
                  <IconButton>
                    <img src={twitter} alt="" />
                  </IconButton>
                </Grid>
              </Grid>
            </FormControl>
          </form>
        </ThemeProvider>
      </Paper>
    </Grid>
  );
}
