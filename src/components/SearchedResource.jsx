import React,{useState} from 'react';
import { Image } from '@material-ui/icons';
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';

const SearchedResource = ({ resource, handleResourceClick  }) => {
   // const [selectedResource, setSelectedResource] = useState(null);

    const handleClick = () => {
        debugger
        handleResourceClick(resource);
      };

  const getFileIcon = (fileName) => {
    const fileExtension = fileName.split('.').pop();
    switch (fileExtension) {
      case 'pdf':
        return <PictureAsPdfOutlinedIcon color="primary" />;
      case 'jpg':
      case 'jpeg':
      case 'png':
        return <Image color="primary" />;
      default:
        return <PictureAsPdfOutlinedIcon color='primary'/>;
    }
  };

  return (
    <div className="border-t border-gray-200 py-4 cursor-pointer" onClick={handleClick}>
      <div className="flex items-center">
        {getFileIcon(resource.name)}
        <span className="ml-2">{resource.name}</span>
      </div>
      {/* {selectedResource && selectedResource.id === resource.id && (
        <div className="ml-8 mt-2">{resource.name}</div>
      )} */}
    </div>
  );
};

export default SearchedResource;
