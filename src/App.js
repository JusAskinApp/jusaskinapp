import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './pages/Home';
import Sidebar from './pages/Sidebar';
import { Routes, Route } from "react-router-dom"
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div className="App">
     {/* <Signup/> */}
     {/* <Login/> */}
     {/* */}
     {/* <Sidebar/> */}
     
     <Routes>
     <Route path="/" element={ <LandingPage/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/" element={ <Signup/> } />
        {/* <Route path="/signup" element={ <Signup/> } /> */}
        <Route path="/home" element={ <Sidebar /> } />
      </Routes>
    </div>
  );
}

export default App;
