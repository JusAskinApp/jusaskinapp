import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './pages/Home';
import Sidebar from './pages/Sidebar';
import { Routes, Route } from "react-router-dom"
import LandingPage from './pages/LandingPage';
import SubscriberDetail from './pages/SubscriberDetail';
function App() {
  return (
    <div className="App">
     {/* <Signup/> */}
     {/* <Login/> */}
     {/* */}
     {/* <Sidebar/> */}
     
     <Routes>
     <Route path="/" element={ <LandingPage/> } />
       <Route path="/admin" element={ <SubscriberDetail/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/signup" element={ <Signup/> } />
        {/* <Route path="/home" element={ <Sidebar /> } /> */}
        <Route path="/home" element={ localStorage.length > 0 ?  <Sidebar /> : <div>404</div> } />1
      </Routes>
    </div>
  );
}

export default App;
