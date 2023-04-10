import React from "react";

function Story({ img, username,onClick  }) {
  return (
    <div onClick={onClick}>
      <img className="h-15 w-15 rounded-full p-[1.5px] border-teal-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out" alt="" src={img}/>
      <p className="text-xs w-14 truncate text-center">{username}</p>
    </div>
  );
}

export default Story;