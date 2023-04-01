import React, {useState} from "react";
import Chip from '@mui/material/Chip';
import { makeStyles } from '@material-ui/core/styles';
import Stack from '@mui/material/Stack';
import EditIcon from '@material-ui/icons/Edit';
import Grid from '@material-ui/core/Grid';
import { IconButton } from '@mui/material';
import AlertDialogSlide from "./DialogForProfileSection";
import AlertDialogSlideForInterest from "./DialogForInterest";

const useStyles = makeStyles({
    chip: {
      backgroundColor: '#cff8e7',
      marginRight: 5,
    marginBottom: 10,
    },
    editIcon: {
      marginLeft: 10,
      fontSize: 15
    }
  });

function About() {
  const [text, setText] = useState('');
  const [selectedSkills, setSelectedSkills] = useState([]);
  
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSave = (newText) => {
    setText(newText);
  };

  const handleSaveInterest = (newSkills) => {
    debugger
    setSelectedSkills(newSkills);
  };

  
  const handleDeleteSkill = (skill) => {
    debugger;
    setSelectedSkills(selectedSkills.filter((s) => s !== skill));
  };
  
 
    const classes = useStyles();
   

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <label
            for="message"
            class="block mb-2 text-sm font-medium text-gray-400 dark:text-white"
          >
            Description
          </label>
        </Grid>
        <Grid item xs={6} align="right">
         <AlertDialogSlide
          onSave={handleSave}
         
          />
        </Grid>
      </Grid>
      <textarea
      disabled
        id="message"
        rows="4"
        class="block p-2.5 w-full text-sm bg-gray-50 rounded-lg border dark:placeholder-gray-400"
        placeholder="Write your thoughts here..."
        value={text}
        onChange={handleTextChange}
      >
      </textarea>
      <div className="mt-5">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-400 dark:text-white"
            >
              Your Interests
            </label>
          </Grid>
          <Grid item xs={6} align="right">
          <AlertDialogSlideForInterest
          onSave={handleSaveInterest}
          onDelete={handleDeleteSkill}
           selectedSkills={selectedSkills} 
           setSelectedSkills={setSelectedSkills}
          />
          </Grid>
        </Grid>
        <Stack direction="row" spacing={1} style={{ flexWrap: 'wrap' }} fullWidth>
  {selectedSkills.map((skill, index) => (
    <Chip className={classes.chip} label={skill} variant="outlined" onDelete={() => handleDeleteSkill(skill)} />
  ))}
</Stack>
      </div>
    </div>
  );
}

export default About;
