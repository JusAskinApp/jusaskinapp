import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';

const emails = ['username@gmail.com', 'user02@gmail.com'];

function SimpleDialog(props) {
  debugger
  const { onClose, open, members } = props;
  const handleClose = () => {
    onClose(onClose);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Active Group Members</DialogTitle>
      <List sx={{ pt: 0 }}>
        {members.map((member) => (
          <ListItem disableGutters key={member.id}>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar src={member.urlLink[0]} sx={{ bgcolor: blue[100], color: blue[600] }}/>
                 
              </ListItemAvatar>
              <ListItemText primary={member.name} />
              <Tooltip title="Remove Member">
                <DeleteIcon />
              </Tooltip> 
            </ListItemButton>
          </ListItem>
        ))}
       
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default function SimpleDialogDemo(props) {
  
  return (
    <div>
      
      <SimpleDialog
        open={props.open}
        onClose={props.onClose}
        members={props.members}
      />
    </div>
  );
}
