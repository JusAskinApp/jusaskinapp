import React from 'react';
import groupImage from "../assets/image99.png";
import { Grid } from '@material-ui/core';
import DocumentGallery from './DocumentGallery';



const DocsComponent = ({ imageSrc, title }) => {
    debugger;
      const trimmedTitle = title.length > 44 ? title.substring(0, 44) + '...' : title;
  return (
<div>
<div className="flex flex-wrap justify-between h-auto">
  <DocumentGallery
    url={imageSrc}
    title={trimmedTitle}
    className="flex-shrink-0 max-w-full h-auto"
  />
</div>
</div>
  );
};

export default DocsComponent;

