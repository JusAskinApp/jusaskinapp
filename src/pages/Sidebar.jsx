import React, {useState} from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import myIcon from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import Home from './Home';
import SearchPage from './Search';
import Sources from './Sources'
import Group from './Group';
import Messages from './Messages';
import Profile from './Profile';
const drawerWidth = 240;

function Sidebar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const [activeItem, setSelectedItem] = useState('Home');

  function handleListItemClick(item) {
    setSelectedItem(item);
  }
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  

  const drawer = (
    <div>
        <div style={{margin:"15px 26px"}}><img style={{width:" 150px", height: "30px"}} src={myIcon} alt=""/></div>
      
    
         <List style={{paddingLeft:"10px"}}>
      {['Home', 'Search', 'Sources', 'Group', 'Messages', 'Profile'].map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton onClick={() => handleListItemClick(text)}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
         
          {activeItem === text && <div style={{
                backgroundColor: 'blue',
                color: 'red',
                fontWeight: 'bold',
              }} />}
        </ListItem>
      ))}
    </List> 
       </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
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
        {/* <Toolbar /> */}
      {activeItem === "Home" && <Home/>}
      {activeItem  === "Search" && <SearchPage/>}
      {activeItem  === "Sources" && <Sources/>}
      {activeItem  === "Group" && <Group/>}
      {activeItem  === "Messages" && <Messages/>}
      {activeItem  === "Profile" && <Profile/>}
        
      </Box>
    </Box>
  );
}



export default Sidebar;