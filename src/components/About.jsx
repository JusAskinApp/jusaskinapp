import React from "react";
import Chip from '@mui/material/Chip';
import { makeStyles } from '@material-ui/core/styles';
import Stack from '@mui/material/Stack';
import EditIcon from '@material-ui/icons/Edit';
import Grid from '@material-ui/core/Grid';
import { IconButton } from '@mui/material';

const useStyles = makeStyles({
    chip: {
      backgroundColor: '#cff8e7',
    },
    editIcon: {
      marginLeft: 10,
      fontSize: 15
    }
  });

function About() {
    const classes = useStyles();
    const handleDelete = () => {
        console.info('You clicked the delete icon.');
      };
   
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
          <IconButton><EditIcon className={classes.editIcon} /></IconButton>
        </Grid>
      </Grid>
      <textarea
        id="message"
        rows="4"
        class="block p-2.5 w-full text-sm bg-gray-50 rounded-lg border dark:placeholder-gray-400"
        placeholder="Write your thoughts here..."
      ></textarea>
      
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
          <IconButton><EditIcon className={classes.editIcon} /></IconButton>
          </Grid>
        </Grid>
        <Stack direction="row" spacing={1} style={{ flexWrap: 'wrap' }} fullWidth>
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
