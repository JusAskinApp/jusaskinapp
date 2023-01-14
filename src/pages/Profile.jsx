import React from "react";
import Tabsection from "../components/Tabsection";

function Profile() {
 
  return (
    <div>
    <div className="flex flex-row items-center justify-center mt-14 ml-10">
    <img className="w-28 h-28 rounded-full border" src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/462.jpg" alt="" />
    <div className="ml-11">
      <h2 className="font-bold text-lg mb-1">Jordan Pollard</h2>
      <h3 className="text-sm text-gray-400">ML | AI | Big Data</h3>
      <div className="flex justify-start">
        <span className="text-yellow-500 text-2xl">&#9733;</span>
        <span className="text-yellow-500 text-2xl ml-1">&#9733;</span>
        <span className="text-yellow-500 text-2xl ml-1">&#9733;</span>
        <span className="text-yellow-500 text-2xl ml-1">&#9733;</span>
        <span className="text-yellow-500 text-2xl ml-1">&#9733;</span>
      </div>
    </div>
  </div>
  <div className="mt-8 px-22 sm:px-4 xs:px-2 md:px-20">
  <Tabsection />
  </div>
  
  </div>
  );
}

export default Profile;
