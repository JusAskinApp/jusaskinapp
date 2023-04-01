import React from "react";

function MessageList({ img, username, onClick }) {
  return (
    <div onClick={onClick} style={{background:'#DBE5E8'}} className="h-20 w-100 rounded-lg m-4 flex items-center p-4 cursor-pointer">
      <img
        src={img}
        alt="Profile"
        className="w-16 h-16 rounded-full object-cover mr-4"
      />
      <div>
        <h2 className="font-bold text-lg">{username}</h2>
        {/* <p className="text-gray-600 text-sm">
          Hey dude are you joining us today...
        </p> */}
      </div>
      {/* <p className="text-gray-600 text-sm ml-auto">Just Now</p> */}
      
    </div>
  );
}

export default MessageList;
