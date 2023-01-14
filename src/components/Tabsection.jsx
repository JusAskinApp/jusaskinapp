import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { TabPanel } from '@mui/lab'
import About from './About';
import Settings from './Settings';
import Post from './Post';
import Resources from './Resources';

export default function Tabsection() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="About" value="1" />
            <Tab label="Setting" value="2" />
            <Tab label="Saved" value="3" />
            <Tab label="Resources" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">
            <About/>
        </TabPanel>
        <TabPanel value="2">
            <Settings/>
        </TabPanel>
        <TabPanel value="3">
          <Post/>
        </TabPanel>
        <TabPanel value="4">
          <Resources/>
        </TabPanel>
      </TabContext>
    </Box>
  );
}