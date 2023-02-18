import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Typography} from '@material-ui/core';
import VideoPlayer from './VideoPlayer';
import ImageGallery from './ImageGallery';
import DocumentList from './DocumentList';
//import { videoData, imageData, documentData } from './data';

const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     margin: theme.spacing(2),
//   },
//   videoContainer: {
//     padding: theme.spacing(2),
//   },
//   imageContainer: {
//     padding: theme.spacing(2),
//   },
//   documentContainer: {
//     padding: theme.spacing(2),
//   },
}));

export default function Resources() {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={3} fullWidth maxWidth="md">
        <Grid item xs={12}>
        <Typography variant="h6" gutterBottom> Video(s) </Typography>
          <div className='flex flex-no-wrap justify-between xs:flex-col sm:flex-row'>
            <VideoPlayer/>
            <VideoPlayer/>
            <VideoPlayer/>
            <VideoPlayer/>
          </div>
        </Grid>
        
        <Grid item xs={12}>
        <Typography variant="h6" gutterBottom> Document(s) </Typography>
          <div className='grid grid-cols-6 justify-between'>
          <DocumentList/>
          <DocumentList/>
          <DocumentList/>
          <DocumentList/> 
          <DocumentList/> 
          <DocumentList/> 
          <DocumentList/>
          <DocumentList/>
          </div>
        </Grid>
        <Grid item xs={12}>
        <Typography variant="h6" gutterBottom> Image(s) </Typography>
          <div className='flex flex-no-wrap justify-between xs:flex-col sm:flex-row'>
          <ImageGallery/>
          <ImageGallery/>
          <ImageGallery/>
          <ImageGallery/>
          <ImageGallery/>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
