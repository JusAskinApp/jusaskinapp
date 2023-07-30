import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  TextField,
  Typography,
  RadioGroup,
  Radio,
  FormControlLabel
} from "@mui/material";
import Textarea from '@mui/joy/Textarea';
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";


function NewComponent({ onBackClick }) {
  const [selectedFile, setSelectedFile] = useState([]);
  const [groupName, setGroupName] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [textAreaValue, setTextAreaValue] = useState("");
  const [selectedValue, setSelectedValue] = useState("public");

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };
  
  const handleFileChange = (event) => {
    setSelectedFile(Array.from(event.target.files));
    
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
  const createGroup = async (url) => {
    debugger;
    try {
      const response = await fetch(
        "https://jusaskin.herokuapp.com/api/groups/creategroup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            imageurl: url,
            groupname: groupName,
            subtitle: subtitle,
            description:textAreaValue,
            admin:JSON.parse(localStorage.getItem('userDetail')),
          }),
        }
      );
      const data = await response.json();
      console.log(data);
      if (response.ok) {
       alert("group Created")
      } else {
     
      }
    } catch (error) {
     console.log(error)
    }
  };
  const uploadFiles = async () => {
    debugger;
    const formData = new FormData();
    selectedFile.forEach((file) => {
      formData.append('files[]', file);
    });
    let promise = new Promise((resolve, reject) => {
      fetch("https://jusaskin.herokuapp.com/api/resources/upload", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          resolve(data['fileUrls'])
        })
        .catch((error) => {
          console.error(error);
          resolve([])
        });
      // resolve(true);
    });
    return promise;
  }
  const handleCreateGroupClick = async () => {
debugger;
const url = await uploadFiles();
createGroup(url)
   
  };

  return (
    <div>
      <IconButton onClick={onBackClick}>
        <ArrowBackOutlinedIcon />
      </IconButton>
      <Box sx={{ display: 'flex', flexDirection: 'column', mt: 2 }}>
        <input type="file" onChange={handleFileChange} />
        <Box sx={{ mt: 2 }}>
          <TextField label="Group Name" variant="outlined" value={groupName} onChange={handleGroupNameChange} />
          <TextField label="Subtitle" variant="outlined" value={subtitle} onChange={handleSubtitleChange} sx={{ ml: 2 }}/>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Textarea value={textAreaValue} onChange={handleTextAreaChange} minRows={2} placeholder="Type in here…"/>
        </Box>
        <Box sx={{ mt: 2 }}>
          <RadioGroup aria-label="privacy" name="privacy" value={selectedValue} onChange={handleRadioChange} row>
            <FormControlLabel value="public" control={<Radio />} label="Public" />
            <FormControlLabel value="private" control={<Radio />} label="Private" />
          </RadioGroup>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" color="primary" onClick={handleCreateGroupClick}>
            Create Group
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default NewComponent;
