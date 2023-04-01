import React, { useEffect, useState } from "react";
import myIcon from "../assets/logo.png";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import facebook from "../assets/facebook-icon.png";
import google from "../assets/google-icon.png";
import twitter from "../assets/twitter-icon.png";
import FormLabel from "@mui/material/FormLabel";
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
  IconButton,
  Checkbox,
  FormControlLabel,
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
  const navigate = useNavigate();
  const paperStyle = {
    padding: "40px 30px",
    width: 450,
    margin: "20px auto",
    textAlign: "center",
  };
  useEffect(() => {
    setFormData({ type: "Student" });
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    type: "",
    userType: "",
  });
  const [errors, setErrors] = useState({});
  const creatingUser = (e) => {
    debugger;
    fetch("https://jusaskin.herokuapp.com/api/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data !== "Email already exists") {
          navigate("/login");
        } else {
          alert("You have already account")
        }
      })
      .catch((error) => {
        // console.error(error);
      });
  };
  const handleChange = (event) => {
    debugger;
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.username) {
      newErrors.username = "Username is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    }

    return newErrors;
  };

  const handleSubmit = async (event) => {
    debugger;
    event.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // submit the form
      const options = {
        method: "POST",
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      };
      console.log(formData);
      creatingUser();
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
            Create Your Account
          </Typography>
          <Typography
            style={{ marginTop: "18px", color: "#8CA1A6" }}
            variant="body2"
            gutterBottom
          >
            Beacome a part of Jus Askin community!
          </Typography>
        </Grid>
        <ThemeProvider theme={responsiveTheme}>
          <form onSubmit={handleSubmit}>
            <FormControl style={{ width: "35ch" }}>
              <TextField
                style={{ marginTop: "40px" }}
                label="Full Name"
                name="username"
                type="text"
                variant="outlined"
                onChange={handleChange}
                error={!!errors.username}
                helperText={errors.username}
              />
              <TextField
                style={{ marginTop: "15px" }}
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
              <FormControl style={{ alignItems: "center", paddingTop: "10px" }}>
                <RadioGroup
                  row
                  defaultValue="Student"
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="type"
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="Student"
                    control={<Radio />}
                    label="Student"
                  />
                  <FormControlLabel
                    value="Professional"
                    control={<Radio />}
                    label="Professional"
                  />
                </RadioGroup>
              </FormControl>
              <FormControlLabel
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  textAlign: "left",
                }}
                control={<Checkbox style={{ marginBottom: "15px" }} required />}
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
                type="submit"
              >
                Sign up
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
