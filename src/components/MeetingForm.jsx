import React, { useState } from "react";
import { Grid, Paper, TextField, TextareaAutosize } from "@material-ui/core";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import Button from "@mui/material/Button";
import { isMobile } from "react-device-detect";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
function MeetingForm(groupid) {
  const [formState, setFormState] = useState({
    meetingDetails: null,
    startdate: "",
    enddate: "",
    zoomLink: "",
    groupid: groupid.groupid,
    creator: JSON.parse(localStorage.getItem("userDetail")),
  });

  const handleChange = (event) => {
    debugger;
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(formState);
  };
  const onDateChange = (name, event) => {
    debugger;
    setFormState((prevState) => ({
      ...prevState,
      [name]: new Date(event.$d),
    }));
    console.log(formState);
  };
  function InsertMeetingDetails() {
    debugger;
    fetch("https://jusaskin.herokuapp.com/api/groups/scehdualmeeting", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("Meeting added");
        window.location.reload(true);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  const handleSave = (event) => {
    debugger;
    if (
      formState.meetingDetails &&
      formState.startdate &&
      formState.enddate &&
      formState.zoomLink
      // Add any other validation checks for your form fields
    ) {
      InsertMeetingDetails();
    } else {
      alert("Fill all fields");
    }
  };
  return (
    <Paper elevation={3} style={{ padding: "20px", margin: "10px" }}>
      <h1 style={{ fontSize: !isMobile ? "40px" : "36px" }}> Schedule Meeting </h1>
      <form>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              name="meetingDetails"
              label="Meeting Detail"
              fullWidth
              variant="outlined"
              value={formState.meetingDetails}
              onChange={handleChange}
              required
              size="small"
            />
          </Grid>
          <Grid item xs={!isMobile ? 6 : 12}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer  size="small" components={["DateTimePicker"]}>
                <DateTimePicker
                  label="Start date and time"
                  onChange={(newDate) => {
                    onDateChange("startdate", newDate);
                  }}
                
                />
              </DemoContainer>
            </LocalizationProvider>
          </Grid>
          <Grid item xs={!isMobile ? 6 : 12}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer  size="small" components={["DateTimePicker"]}>
                <DateTimePicker
                  label="End date and time"
                  onChange={(newDate) => {
                    onDateChange("enddate", newDate);
                  }}
                 
                />
              </DemoContainer>
            </LocalizationProvider>{" "}
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="zoomLink"
              label="Zoom Meeting Link"
              fullWidth
              variant="outlined"
              value={formState.zoomLink}
              size="small"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Grid xs={9}></Grid>
            <Grid xs={3}>
              <Button variant="contained" onClick={handleSave}>
                Save
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
}

export default MeetingForm;
