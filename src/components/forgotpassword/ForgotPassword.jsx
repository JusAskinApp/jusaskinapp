import React, { useState } from "react";
import { Paper, TextField, Typography, Button, CircularProgress, Grid } from "@material-ui/core";
// import { useNavigate } from "react-router-dom";
import CustomSnackbar from "../CustomSnackbar";
import Navbar from "../NavbarComponent";
import { isMobile } from "react-device-detect";
import Footer from "../Footer";

export default function ForgotPassword() {
//   const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [errors, setErrors] = useState({});

  const paperStyle = {
    padding: "40px 30px",
    width: isMobile ? "auto" : 450,
    margin: "100px auto",
    textAlign: "center",
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
    setErrors({ ...errors, email: "" });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};
    if (!email) {
      newErrors.email = "Email is required";
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    // Call your API to handle forgot password
    fetch("https://your-api-url.com/api/users/forgot-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setSnackbarMessage("Password reset link sent to your email");
          setSnackbarSeverity("success");
        } else {
          setSnackbarMessage("Failed to send password reset link");
          setSnackbarSeverity("error");
        }
        setShowSnackbar(true);
      })
      .catch((error) => {
        setSnackbarMessage("An error occurred");
        setSnackbarSeverity("error");
        setShowSnackbar(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setShowSnackbar(false);
  };

  return (
    <Grid>
        <Navbar/>
      <CustomSnackbar
        open={showSnackbar}
        autoHideDuration={6000}
        handleClose={handleCloseSnackbar}
        message={snackbarMessage}
        severity={snackbarSeverity}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      />
      <Paper style={paperStyle}>
        <Typography variant="h5" style={{ marginTop: "30px", fontWeight: 700, fontSize: "24px" }}>
          Forgot Password
        </Typography>
        <Typography variant="body2" style={{ marginTop: "15px", color: "#8CA1A6" }} gutterBottom>
          Enter your email to receive a password reset link
        </Typography>
        <form>
          <TextField
            style={{ marginTop: "40px", width: "35ch" }}
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
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
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : "Send Reset Link"}
          </Button>
        </form>
      </Paper>
      <Footer />
    </Grid>
  );
}
