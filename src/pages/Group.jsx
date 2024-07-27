import React, { useState, useEffect } from 'react';
import IconButton from "@mui/material/IconButton";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import MicIcon from "@mui/icons-material/Mic";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddIcon from '@mui/icons-material/Add';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Tabsection from '../components/Tabsection';
import './home.css';
import GroupComponent from '../components/GroupComponent';
import TopicComponent from '../components/TopicComponent';
import GroupDetails from '../components/GroupDetails';

const tabs = [
  { label: 'Groups', component: <GroupComponent /> },
  { label: 'My Groups', component: <TopicComponent /> },
];

function Group() {
  const [showNewComponent, setShowNewComponent] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleAddClick = () => {
    setShowNewComponent(true);
  };

  const handleBackClick = () => {
    setShowNewComponent(false);
  };

  const handleSaveClick = () => {
    // Save the new component data here
    setShowNewComponent(false);
  };

  return (
    <div className='header'>
      {!showNewComponent ? (
        <div>
          <div className="flex justify-end">
            <div className="flex items-center space-x-2 text-gray-500">
              <IconButton onClick={handleAddClick}>
                <AddIcon />
              </IconButton>
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            </div>
          </div>
          <Tabsection tabs={tabs} />
        </div>
      ) : (
        <GroupDetails onBackClick={handleBackClick} />
      )}
    </div>
  );
}

export default Group;
