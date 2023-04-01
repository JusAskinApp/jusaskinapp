import React from "react";
import { makeStyles } from "@mui/styles";
import { Card, CardMedia, CardContent, Typography, Avatar, AvatarGroup } from "@mui/material";
import { grey, red } from "@mui/material/colors";

const useStyles = makeStyles({
  card: {
    display: "flex",
    alignItems: "center",
    maxWidth: "100%",
    margin: "16px auto",
    padding: "16px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
    cursor: 'pointer'
  },
  media: {
    width: "150px",
    height: "150px",
    marginRight: "16px",
    borderRadius: "8px",
  },
  caption: {
    marginTop: "4px",
    color: 'grey',
  },
  avatarGroup: {
    marginTop: "16px",
  },
});

const GroupsJoined = ({ image, heading, caption, groupMembers }) => {
  const classes = useStyles();
 

  return (
    <div>
        <p className="mt-3 text-lg font-bold">Joined Groups</p>
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={image} />
      <CardContent>
        <Typography variant="h5">{heading}</Typography>
        <Typography variant="caption" className={classes.caption}>
          {caption}
        </Typography>
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center" }}>
        <AvatarGroup max={5} className={classes.avatarGroup}>
        {groupMembers.map((item, index) => (
              <Avatar
                key={index}
                src={item.avatar}
                alt="Group member avatar"
                className={classes.avatar}
              />
            ))}
    </AvatarGroup>
    <Typography variant="subtitle1" className={classes.caption} style={{marginLeft: "8px" }}>
        {groupMembers.length} + members
    </Typography>
    </div>
      </CardContent>
    </Card>
    </div>
  );
};

export default GroupsJoined;
