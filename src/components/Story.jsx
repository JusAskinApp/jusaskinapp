// import React from "react";

// function Story({ img, username,onClick  }) {
//   return (
//     <div onClick={onClick}>
//       <img className="h-15 w-15 rounded-full p-[1.5px] border-teal-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out" alt="" src={img}/>
//       <p className="text-xs w-14 truncate text-center">{username}</p>
//     </div>
//   );
// }

// export default Story;

// import React from "react";

// function Story({ img, username,onClick  }) {
//   return (
//     <div onClick={onClick}>
//       <img className="h-15 w-15 rounded-full p-[1.5px] border-teal-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out" alt="" src={img}/>
//       <p className="text-xs w-14 truncate text-center">{username}</p>
//     </div>
//   );
// }

// export default Story;

import React from "react";
import { Avatar, Typography } from "@mui/material";
import { Link } from 'react-router-dom';


function Story({ img, username, onClick }) {
  return (
    <Link to={`/profile/${username}`}>
    <div onClick={onClick}>
      <Avatar
        sx={{
          width: 60,
          height: 60,
          border: "2px solid #4AE6A7",
          cursor: "pointer",
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
        alt={username}
        src={img}
      />
    
      <p className="text-xs mt-1 w-14 text-center truncate">{username}</p>
    </div>
    </Link>
  );
}

export default Story;
