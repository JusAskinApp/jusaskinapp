import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  IconButton,
  TextField,
  RadioGroup,
  Radio,
  FormControlLabel,
  Fab,
} from "@mui/material";
import Textarea from "@mui/joy/Textarea";
import { CircularProgress } from "@mui/material";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import CustomSnackbar from "./CustomSnackbar";

function NewComponent({ onBackClick }) {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState([]);
  const [bannerfile, setBannerfile] = useState([]);
  const [groupName, setGroupName] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [textAreaValue, setTextAreaValue] = useState("");
  const [selectedValue, setSelectedValue] = useState("public");
  const [loading, setLoading] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [subscriptionStatus, setSubscriptionStatus] = useState("");
  const [planName, setPlanName] = useState("");

  useEffect(() => {
    debugger
if(JSON.parse(localStorage.userDetail).subscription){

    const subscription = JSON.parse(localStorage.userDetail).subscription;
    if (subscription && subscription.subscription_status === "ACTIVE") {
      setSubscriptionStatus(subscription.subscription_status);
      setPlanName(subscription.planName);
    }
  }
  }, []);

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleFileChange = (event) => {
    setSelectedFile(Array.from(event.target.files));
  };

  const handleBannerFileChange = (event) => {
    setBannerfile(Array.from(event.target.files));
  };

  const handleGroupNameChange = (event) => {
    setGroupName(event.target.value);
  };

  const handleSubtitleChange = (event) => {
    setSubtitle(event.target.value);
  };

  const handleTextAreaChange = (event) => {
    setTextAreaValue(event.target.value);
  };

  const isFormValid = () => {
    return (
      groupName.trim() !== "" &&
      subtitle.trim() !== "" &&
      textAreaValue.trim() !== ""
    );
  };

  const createGroup = async (url, bannerImageUrl) => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://jusaskin.herokuapp.com/api/groups/creategroup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            imageurl: url || "",
            bannerurl: bannerImageUrl || "",
            groupname: groupName,
            subtitle: subtitle,
            description: textAreaValue,
            admin: JSON.parse(localStorage.getItem("userDetail")),
          }),
        }
      );
      const data = await response.json();

      if (response.ok) {
        setSnackbarMessage("Group created successfully");
        setSnackbarSeverity("success");
        setShowSnackbar(true);
        setSelectedFile([]);
        setBannerfile([]);
        setGroupName("");
        setSubtitle("");
        setTextAreaValue("");
        setSelectedValue("public");

        setTimeout(() => {
          setShowSnackbar(false);
          onBackClick();
        }, 2000);
      } else {
        setSnackbarMessage("Something went wrong");
        setSnackbarSeverity("error");
        setShowSnackbar(true);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const uploadFiles = async () => {
    if (selectedFile.length > 0) {
      const formData = new FormData();
      selectedFile.forEach((file) => {
        formData.append("files[]", file);
      });

      const bannerImageFile = bannerfile[0];
      formData.append("files[]", bannerImageFile);

      try {
        const response = await fetch(
          "https://jusaskin.herokuapp.com/api/resources/upload",
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await response.json();
        const fileUrls = data["fileUrls"];
        const bannerImageUrl = fileUrls.pop();
        return { url: fileUrls, bannerImageUrl };
      } catch (error) {
        console.error(error);
        return { url: [], bannerImageUrl: "" };
      }
    } else {
      return { url: [], bannerImageUrl: "" };
    }
  };

  const handleCreateGroupClick = async () => {
    if (isFormValid()) {
      if (subscriptionStatus === "Active" && planName === "Premium Monthly") {
        const { url, bannerImageUrl } = await uploadFiles();
        createGroup(url[0], bannerImageUrl);
      } else {
        // Subscription does not meet requirements
        alert("Subscribe to premium monthly to create a group");
      }
    }
  };

  return (
    <div>
      <CustomSnackbar
        open={showSnackbar}
        autoHideDuration={2000}
        message={snackbarMessage}
        severity={snackbarSeverity}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      />
      <IconButton onClick={onBackClick}>
        <ArrowBackOutlinedIcon />
      </IconButton>
      {subscriptionStatus === "ACTIVE" && planName === "Premium Monthly" ? (
        <Box sx={{ display: "flex", flexDirection: "column", mt: 2 }}>
          <div>
            <label htmlFor="group-upload-photo">
              <input
                style={{ display: "none" }}
                id="group-upload-photo"
                name="group-upload-photo"
                onChange={handleFileChange}
                type="file"
              />

              <Fab
                color="primary"
                size="small"
                component="span"
                aria-label="add"
                variant="extended"
              >
                <AddIcon />{" "}
                <p>
                  {selectedFile.length !== 0
                    ? selectedFile[0].name
                    : "Upload Group Photo"}
                </p>
              </Fab>
            </label>
          </div>
          <Box sx={{ mt: 2 }}>
            <TextField
              label="Group Name"
              variant="outlined"
              value={groupName}
              onChange={handleGroupNameChange}
            />
            <TextField
              label="Subtitle"
              variant="outlined"
              value={subtitle}
              onChange={handleSubtitleChange}
              sx={{ ml: 2 }}
            />
          </Box>
          <br></br>
          <div>
            <label htmlFor="upload-photo">
              <input
                style={{ display: "none" }}
                id="upload-photo"
                name="upload-photo"
                onChange={handleBannerFileChange}
                type="file"
              />

              <Fab
                color="primary"
                size="small"
                component="span"
                aria-label="add"
                variant="extended"
              >
                <AddIcon />{" "}
                <p>
                  {bannerfile.length !== 0
                    ? bannerfile[0].name
                    : "Upload banner photo"}
                </p>
              </Fab>
            </label>
          </div>
          <Box sx={{ mt: 2 }}>
            <Textarea
              value={textAreaValue}
              onChange={handleTextAreaChange}
              minRows={2}
              placeholder="Type in here…"
            />
          </Box>
          <Box sx={{ mt: 2 }}>
            <RadioGroup
              aria-label="privacy"
              name="privacy"
              value={selectedValue}
              onChange={handleRadioChange}
              row
            >
              <FormControlLabel
                value="public"
                control={<Radio />}
                label="Public"
              />
              <FormControlLabel
                value="private"
                control={<Radio />}
                label="Private"
              />
            </RadioGroup>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleCreateGroupClick}
              disabled={!isFormValid() || loading}
            >
              {loading ? (
                <CircularProgress size={24} color="primary" />
              ) : (
                "Create Group"
              )}
            </Button>
          </Box>
        </Box>
      ) : (
        <p>Subscribe to premium monthly to get access to creating the group</p>
      )}
    </div>
  );
}

export default NewComponent;
