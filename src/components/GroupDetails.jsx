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
  const [selectedFile, setSelectedFile] = useState(null);
  const [groupName, setGroupName] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [textAreaValue, setTextAreaValue] = useState("");
  const [selectedValue, setSelectedValue] = useState("public");

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };
  
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
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
  
  const handleCreateGroupClick = () => {
debugger

   
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
