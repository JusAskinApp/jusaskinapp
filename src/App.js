import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './pages/Home';
import Sidebar from './pages/Sidebar';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
     {/* <Signup/> */}
     {/* <Login/> */}
     {/* */}
     <Sidebar/>
     <Routes>
      
        {/* <Route path="/" element={ <Login/> } /> */}
        {/* <Route path="/sidebar" element={ <Sidebar/> } /> */}
        {/* <Route path="/home" element={ <Home /> } /> */}
      </Routes>
    </div>
  );
}

export default App;
