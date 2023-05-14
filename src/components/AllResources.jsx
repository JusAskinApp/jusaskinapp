import React from 'react';
import groupImage from "../assets/image99.png";
import ImageGallery from "./ImageGallery";
import { Grid } from '@material-ui/core';



const AllResources = ({ imageSrc, title }) => {
  return (
    <div>
    <p className="text-lg font-bold">All Results</p>
    <div className="flex flex-no-wrap xs:flex-col sm:flex-row justify-between overflow-x-auto h-60">
    
      <ImageGallery
        url={groupImage}
        title="First Image Title"
        creator="First Image Creator"
        className="flex-shrink-0"
      />

      <ImageGallery
        url={groupImage}
        title="First Image Title"
        creator="First Image Creator"
        className="flex-shrink-0"
      />
      <ImageGallery
        url={groupImage}
        title="First Image Title"
        creator="First Image Creator"
        className="flex-shrink-0"
      />
      <ImageGallery
        url={groupImage}
        title="First Image Title"
        creator="First Image Creator"
        className="flex-shrink-0"
      />
      <ImageGallery
        url={groupImage}
        title="First Image Title"
        creator="First Image Creator"
        className="flex-shrink-0"
      />
    </div>
   
  </div>
  );
};

export default AllResources;
