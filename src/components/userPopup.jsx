import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";

const emails = ["username@gmail.com", "user02@gmail.com"];

function SimpleDialog(props) {
  debugger;
  const { onClose, open, members, isAdmin, groupid } = props;
  const handleClose = () => {
    onClose(onClose);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };
  async function removeMember(groupid, memberEmail) {
    debugger;
    try {
      const response = await fetch(
        "https://jusaskin.herokuapp.com/api/groups/leavegroup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            groupId: groupid,
            userEmail: memberEmail,
          }),
        }
      );
      if (response.ok) {

        window.location.reload(true);
        

        // setUserLeft(true);
      } else {
        // setUserLeft(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Active Group Members</DialogTitle>
      <List sx={{ pt: 0 }}>
        {members.map((member) =>
         
            <ListItem disableGutters key={member.id}>
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar
                    src={member.urlLink ? member.urlLink[0] : ''}
                    sx={{ bgcolor: blue[100], color: blue[600] }}
                  />
                </ListItemAvatar>
                <ListItemText primary={member.name} />
                {isAdmin && member.email != JSON.parse(localStorage.getItem('userDetail')).email  ? (
                  <Tooltip title="Remove Member">
                    <DeleteIcon
                      onClick={() => {
                        removeMember(groupid, member.email);
                      }}
                    />
                  </Tooltip>
                ) : (
                  ""
                )}
              </ListItemButton>
            </ListItem>
          
        )}
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default function SimpleDialogDemo(props) {
  debugger;
  return (
    <div>
      <SimpleDialog
        open={props.open}
        onClose={props.onClose}
        members={props.members}
        isAdmin={props.isAdmin}
        groupid={props.groupid}
      />
    </div>
  );
}
