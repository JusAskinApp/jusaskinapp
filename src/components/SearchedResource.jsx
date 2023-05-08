// import React,{useState} from 'react';
// import { Image } from '@material-ui/icons';
// import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';

// const SearchedResource = ({ resource, handleResourceClick  }) => {
//    // const [selectedResource, setSelectedResource] = useState(null);

//     const handleClick = () => {
//         debugger
//         handleResourceClick(resource);
//       };

//   const getFileIcon = (fileName) => {
//     const fileExtension = fileName.split('.').pop();
//     switch (fileExtension) {
//       case 'pdf':
//         return <PictureAsPdfOutlinedIcon color="primary" />;
//       case 'jpg':
//       case 'jpeg':
//       case 'png':
//         return <Image color="primary" />;
//       default:
//         return <PictureAsPdfOutlinedIcon color='primary'/>;
//     }
//   };

//   return (
//     <div className="border-t border-gray-200 py-4 cursor-pointer" onClick={handleClick}>
//       <div className="flex items-center">
//         {getFileIcon(resource.name)}
//         <span className="ml-2">{resource.name}</span>
//       </div>
//       {/* {selectedResource && selectedResource.id === resource.id && (
//         <div className="ml-8 mt-2">{resource.name}</div>
//       )} */}
//     </div>
//   );
// };

// export default SearchedResource;

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

const SearchedResource = ({ image, heading, caption }) => {
  const classes = useStyles();
 
 
  return (
    <div>
        <p className="mt-3 text-lg font-bold">Searched Resource</p>
    <Card className={classes.card} >
      <CardMedia className={classes.media} image={image} />
      <CardContent>
        {/* <Typography variant="h5">{heading}</Typography> */}
        <Typography variant="caption" className={classes.caption}>
          {heading}
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
};

export default SearchedResource;

