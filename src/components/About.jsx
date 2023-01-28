import React from "react";
import Chip from '@mui/material/Chip';
import { makeStyles } from '@material-ui/core/styles';
import Stack from '@mui/material/Stack';


const useStyles = makeStyles({
    chip: {
      backgroundColor: '#cff8e7',
    },
    
  });

function About() {
    const classes = useStyles();
    const handleDelete = () => {
        console.info('You clicked the delete icon.');
      };
   
  return (
    <div>
      <label
        for="message"
        class="block mb-2 text-sm font-medium text-gray-400 dark:text-white"
      >
        Description
      </label>
      <textarea
        id="message"
        rows="4"
        class="block p-2.5 w-full text-sm bg-gray-50 rounded-lg border dark:placeholder-gray-400"
        placeholder="Write your thoughts here..."
      ></textarea>
      <div className="mt-5">
      <label
        for="message"
        class="block mb-2 text-sm font-medium text-gray-400 dark:text-white"
      >
        Your Interests
      </label>
      <Stack direction="row" spacing={1}  style={{ flexWrap: 'wrap' }} fullWidth>
      <Chip className={classes.chip} label="Deletable" onDelete={handleDelete} />
      <Chip className={classes.chip} label="Deletable" variant="outlined" onDelete={handleDelete} />
      <Chip className={classes.chip} label="Deletable" variant="outlined" onDelete={handleDelete} />
      <Chip className={classes.chip} label="Deletable" variant="outlined" onDelete={handleDelete} />
      <Chip className={classes.chip} label="Deletable" variant="outlined" onDelete={handleDelete} />
      <Chip className={classes.chip} label="Deletable" variant="outlined" onDelete={handleDelete} />
    </Stack>
     
      </div>
    </div>
  );
}

export default About;
