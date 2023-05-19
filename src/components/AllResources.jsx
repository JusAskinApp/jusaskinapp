import React from 'react';
import ImageGallery from "./ImageGallery";

const AllResources = ({ imageSrc, title }) => {
    const trimmedTitle = title.length > 44 ? title.substring(0, 44) + '...' : title;
  return (
<div>
<div className="flex flex-wrap justify-between h-auto">
  <ImageGallery
    url={imageSrc}
    title={trimmedTitle}
    // creator="Umar Khan"
    className="flex-shrink-0 max-w-full h-auto"
  />
</div>
</div>
  );
};

export default AllResources;



