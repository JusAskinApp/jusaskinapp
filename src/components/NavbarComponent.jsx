import React from 'react';
import myIcon from "../assets/logo.png";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const handleClick = (str) => {
    //window.location.href = "/"
    // str === 'login' ?
    // window.location.href = "/login"
    // :  window.location.href = "/signup";
    window.location.href = "login"
  };
  return (
    <nav style={{backgroundColor:'#F0F7F4'}}>
      <div className="container mx-auto px-6 py-2 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="text-black font-medium">Home</a>
          <a href="#" className="text-black font-medium ml-4">Features</a>
          <a href="#" className="text-black font-medium ml-4">About us</a>
        </div>
        <div className="flex items-center">
          <a href="#" className="text-black font-medium"><img style={{width:" 150px", height: "30px"}} src={myIcon} alt=""/></a>
        </div>
        <div className="flex items-center">
          <a href="#" className="text-black font-medium mr-4" onClick={handleClick}>Login</a>
          <a href="#" style={{backgroundColor:'#4AE6A7'}} className="text-black font-medium py-2 px-4 rounded-full hover:bg-green-600" onClick={()=>{ window.location.href = "signup"}}>Sign Up</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
