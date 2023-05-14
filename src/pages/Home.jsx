import React, {useState} from 'react'
import Feed from '../components/Feed'
import Header from '../components/Header'
import './home.css'
import { createTheme, Box } from '@material-ui/core';
import { ThemeProvider } from 'styled-components';

function Home() {
  const [mode, setMode] = useState("dark")
  const darktheme = createTheme({
    pelette:{
      mode:mode,
    },
  });
  return (
    <div className='header'>
      <ThemeProvider theme={darktheme}>
        <Header/>
        <Feed/>
        </ThemeProvider>
        </div>
  )
}

export default Home