import * as React from 'react';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@mui/material";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from '@mui/icons-material/Add';
import Avatar from '@mui/material/Avatar';
import CloseIcon from '@mui/icons-material/Close';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles({
  editIcon: {
    fontSize: 'medium',
    marginBottom: 10,
  },
  skillsContainer: {
    marginTop: 10,
    display: 'flex',
    flexWrap: 'wrap',
  },
  skillChip: {
    marginRight: 5,
    marginBottom: 10,
  },
  AvatarSize:{
    fontSize: 'medium',
  }
});

const suggestedSkills = [
  'JavaScript',
  'React',
  'Node.js',
  'HTML',
  'CSS',
  'Python',
  'Java',
  'PHP',
  'SQL',
  'Git',
  'AWS',
];

export default function AlertDialogSlideForInterest(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [selectedSkills, setSelectedSkills] = React.useState([]);

  const handleClickOpen = () => {
    debugger;
    setOpen(true);
    setSelectedSkills(props.selectedSkills);
  };

  const handleClose = () => {
    handleDeleteSkill();
    setOpen(false);
  };
  
  const handleSkillClick = (skill) => {
    debugger
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };


  const handleSaveInterest = () => {
    debugger
    props.onSave(selectedSkills);
    handleClose();
  };

  const handleDeleteSkill = (deletedSkill) => {
    const updatedSkills = selectedSkills.filter((skill) => skill !== deletedSkill);
    setSelectedSkills(updatedSkills);
  };

  React.useEffect(() => {
    setSelectedSkills(props.selectedSkills);
  }, [props.selectedSkills]);

  return (
    <div>
      <IconButton onClick={handleClickOpen}>
        <EditIcon className={classes.editIcon} />
      </IconButton>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Edit Interests"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Keeping your skills up to date helps you get the jobs you want.
          </DialogContentText>
          <div className={classes.skillsContainer}>
            {suggestedSkills.map((skill) => (
              <Chip
                key={skill}
                label={skill}
                className={classes.skillChip}
                color={selectedSkills.includes(skill) ? 'primary' : undefined}
                onClick={() => handleSkillClick(skill)}
                avatar={!selectedSkills.includes(skill) ?
                    (<Avatar >
                      <AddIcon className={classes.AvatarSize}/>
                    </Avatar>):
                    (<Avatar>
                        <CloseIcon className={classes.AvatarSize}/>
                      </Avatar>)
                  }
              />
            ))}
          </div>
        </DialogContent>
        
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSaveInterest} variant="contained" disabled={!selectedSkills.length}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
