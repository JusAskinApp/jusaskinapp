import React, {useState} from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import myIcon from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import Home from './Home';
import SearchPage from './Search';
import Sources from './Sources'
import Group from './Group';
import Messages from './Messages';
import Profile from './Profile';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ResourcesIcon from '@mui/icons-material/Book';
import GroupIcon from '@mui/icons-material/Group';
import MessagesIcon from '@mui/icons-material/Chat';
import ProfileIcon from '@mui/icons-material/AccountCircle';
import BasicMenu from '../components/Menu';
import { Routes, Route } from "react-router-dom"
const drawerWidth = 240;

function Sidebar(props) {
  const { window } = props;
  const navigate = useNavigate();
  const [activeItem, setSelectedItem] = useState('Home');
  

  function handleListItemClick(item) {
    setSelectedItem(item);
  }
  const drawer = (
    <div>
        <div style={{margin:"15px 26px"}}><img style={{width:" 150px", height: "30px"}} src={myIcon} alt=""/></div>
      
         <List style={{paddingLeft:"10px"}}>
    
      {[
  { text: 'Home', icon: <HomeIcon /> },
  { text: 'Search', icon: <SearchIcon /> },
  { text: 'Resources', icon: <ResourcesIcon /> },
  { text: 'Group', icon: <GroupIcon /> },
  { text: 'Messages', icon: <MessagesIcon /> },
  { text: 'Profile', icon: <ProfileIcon /> },
].map((item, index) => (
  <ListItem key={item.text} disablePadding>
    <ListItemButton onClick={() => handleListItemClick(item.text)}>
      <ListItemIcon>
        {item.icon}
      </ListItemIcon>
      <ListItemText primary={item.text} />
    </ListItemButton>
    {activeItem === item.text && (
      <div style={{
        backgroundColor: 'blue',
        color: 'red',
        fontWeight: 'bold',
      }} />
    )}
  </ListItem>
))}
    </List> 
    
        {/* menu icon here */}
        <BasicMenu/>
      
       </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
        
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
      {activeItem === "Home" && <Home/>}
      {activeItem  === "Search" && <SearchPage/>}
      {activeItem  === "Resources" && <Sources/>}
      {activeItem  === "Group" && <Group/>}
      {activeItem  === "Messages" && <Messages/>}
      {activeItem  === "Profile" && <Profile/>}
        
      </Box>
    </Box>
  );
}
export default Sidebar;