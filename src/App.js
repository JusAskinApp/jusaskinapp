import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './pages/Home';
import Sidebar from './pages/Sidebar';
import { Routes, Route } from "react-router-dom"
import LandingPage from './pages/LandingPage';
import SubscriberDetail from './pages/SubscriberDetail';
import WhitePaperPage from './components/WhitePaperPage';
import {gapi} from 'gapi-script';
import { useEffect } from 'react';
import Profile from './pages/Profile';


const clientID = '644322334132-o3bvfqgckm43rq74dki8jb3jren3a5sj.apps.googleusercontent.com'
function App() {
 
  useEffect(() =>{
    function start(){
      gapi.client.init({
        clientID: clientID,
        scope: ""
      })
    }
    gapi.load('client:auth2', start)
  })
  return (
    
    <div className='bg-gray-50 h-screen overflow-y-scroll scrollbar-hide'>
     
     <Routes>
     <Route path="/" element={ <LandingPage/> } />
       <Route path="/admin" element={ <SubscriberDetail/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/signup" element={ <Signup/> } />
        <Route path="/whitepaperpage" element={ <WhitePaperPage/> } />
        <Route path="/home" element={<Sidebar />  } />
        <Route path="/profile" element={<Profile />  } />

      </Routes>
    </div>
  );
}

export default App;
