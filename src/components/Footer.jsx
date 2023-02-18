import React from "react";
import { IconButton } from "@mui/material";
import fb from '../assets/fb.png'
import inst from '../assets/inst.png'
import indeed from '../assets/indeed.png'
import myIcon from "../assets/logo.png";

function Footer() {
  const handleFacebookClick = () => {
    window.open("https://www.facebook.com/JusAskinApp?mibextid=LQQJ4d", "_blank");
  };

  const handleTwitterClick = () => {
    window.open("https://instagram.com/jusaskinapp?igshid=YmMyMTA2M2Y=", "_blank");
  };

  const handleInstagramClick = () => {
    window.open("https://www.linkedin.com/company/jusaskin/", "_blank");
  };
  return (
    <footer className="bg-gray-200 py-8">
      <div className="container mx-auto flex items-center justify-center">
        {/* <i className="fab fa-facebook fa-2x mx-4"></i>
      <i className="fab fa-twitter fa-2x mx-4"></i>
      <i className="fab fa-instagram fa-2x mx-4"></i> */}
        <IconButton onClick={handleFacebookClick}>
          <img src={fb} alt="" className="mx-4"/>
        </IconButton>
        <IconButton onClick={handleTwitterClick}>
          <img src={inst} alt="" className="mx-4"/>
        </IconButton>
        <IconButton onClick={handleInstagramClick}>
          <img src={indeed} alt="" className="mx-4"/>
        </IconButton>
      </div>
      <div className="container mx-auto text-center py-4">
        <img src={myIcon} alt="Logo" className="w-32 mx-auto" />
      </div>
      <div className="container text-black mx-auto text-center py-4">
        &copy; {new Date().getFullYear()} Jus Askin. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
