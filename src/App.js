import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './pages/Home';
import Sidebar from './pages/Sidebar';
import { Routes, Route } from "react-router-dom"
import LandingPage from './pages/LandingPage';
import SubscriberDetail from './pages/SubscriberDetail';
import WhitePaperPage from './components/WhitePaperPage';
import { gapi } from 'gapi-script';
import { useEffect } from 'react';
import Profile from './pages/Profile';
import SearchPage from "./pages/Search";
import Sources from "./pages/Sources";
import Group from "./pages/Group";
import Messages from "./pages/Messages";
// import Resources from './components/Resources';
import { useLocation } from 'react-router-dom';
// import GroupHomePage from './pages/GroupHomePage';
import Terms from "./components/Terms";
import PrivacyPolicy from "./components/PrivacyPolicy";
import GroupHomePage from './pages/GroupHomePage';
import { isMobile } from 'react-device-detect';
import BottomBar from './components/BottomBar';
const clientID = '644322334132-o3bvfqgckm43rq74dki8jb3jren3a5sj.apps.googleusercontent.com'
function App() {
  const location = useLocation();
  const currentPath = location.pathname;
  const isLoginPage = currentPath === '/login';
  const isSignupPage = currentPath === '/signup';
  const isLandingPage = currentPath === '/';
  const privacyPolicy = currentPath === '/privacypolicy';
  const terms = currentPath === '/terms'
  const whitePaper = currentPath ==='/whitepaperpage'

  // Render the Sidebar component conditionally
  const renderSidebar = !isLoginPage && !isSignupPage && !isLandingPage && !privacyPolicy && !terms && !whitePaper;
  debugger;
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientID: clientID,
        scope: ""

      })
    }
    gapi.load('client:auth2', start)
  })

  return (
    <div className='bg-gray-50 h-screen overflow-y-scroll scrollbar-hide app-container'>
      {renderSidebar && !isMobile && <div className='sidebar'>
        <Sidebar />
      </div>}
      {renderSidebar && isMobile && <div>
        <BottomBar />
      </div>}
      <div className='content'>
        
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/admin" element={<SubscriberDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/whitepaperpage" element={<WhitePaperPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/resource" element={<Sources />} />
          <Route path="/group" element={<Group />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/home" element={<Home />} />
          <Route path="/grouphomepage" element={<GroupHomePage />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </div>

  );

}




export default App;
