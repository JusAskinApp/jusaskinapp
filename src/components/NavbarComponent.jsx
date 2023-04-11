import React from "react";
import myIcon from "../assets/logo.png";

const Navbar = (props) => {
 

  return (
    <nav style={{ backgroundColor: "#F0F7F4" }}>
      <div className="container mx-auto px-6 py-2 flex flex-col items-center justify-between md:flex-row">
        <div className="flex items-center md:mr-8 md:visible invisible">
          <a href="#" className="text-black font-medium">
            Home
          </a>
          <a href="#" className="text-black font-medium ml-4">
            Features
          </a>
          <a href="#" className="text-black font-medium ml-4">
            About us
          </a>
        </div>
        <div className="flex items-center">
          <a href="#" className="text-black font-medium">
            <img
              style={{ width: " 150px", height: "30px" }}
              src={myIcon}
              alt=""
            />
          </a>
        </div>
        <div className="flex items-center mt-4 md:mt-0 md:ml-8">
          <a
            href="#"
            className="text-black font-medium mr-4"
            onClick={()=>{
              window.location.href = "login"

            }}
          >
            Login
          </a>
          <a
            href="#"
            style={{ backgroundColor: "#4AE6A7" }}
            className="text-black font-medium py-2 px-4 rounded-full hover:bg-green-600"
            onClick={() => {
              window.location.href = "signup";
            }}
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
