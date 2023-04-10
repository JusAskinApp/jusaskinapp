import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import makeApiCall from "../Api/api";
import Story from "./Story";

function Stories() {
  const [fvt, setfvt] = useState({})
  const [favoriteUsers, setfavoriteUsers] = useState([]);
  useEffect(() => {
    debugger;
    getFvt();
  }, []);
  const getFvt = async (currentUser) => {
    fvt == false ? setfvt(true) : setfvt(false)
    debugger;
    
    try {
      const data = await makeApiCall('http://localhost:4000/api/users/getfvt', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          {
            "email": JSON.parse(localStorage.userDetail).email,

          }
        ),

      });
      if (data) {
        const updatedFavoriteUsers = [...favoriteUsers, ...data.fvtdocs];
        debugger;
        // Update the state with the new array
        setfavoriteUsers(updatedFavoriteUsers);
        console.log("added")
      }

    } catch (error) {
      // setError(true)
      console.error(error);
    }
  }
  return (
    <div className="flex space-x-9 p-6 bg-white rounded-sm border-gray-200 border overflow-x-hidden">
      {favoriteUsers.map((profile) => (
        <Story
          // key={profile.Id}
          img={profile.urlLink ?profile.urlLink[0] : '' }
          username={profile.name}
          onClick={() => console.log("Story clicked")}
        
        />
      ))}
    </div>
  );
}

export default Stories;
