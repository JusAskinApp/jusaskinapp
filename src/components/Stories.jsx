import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import makeApiCall from "../Api/api";
import Story from "./Story";
import Profile from "../pages/Profile";

function Stories() {
  const [fvt, setfvt] = useState({})
  const [favoriteUsers, setfavoriteUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  useEffect(() => {
    debugger;
    getFvt();
  }, []);
  const getFvt = async (currentUser) => {
    fvt == false ? setfvt(true) : setfvt(false)
    debugger;
    
    try {
      const data = await makeApiCall('https://jusaskin.herokuapp.com/api/users/getfvt', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          {
            "currentUserEmail": JSON.parse(localStorage.userDetail).email,

          }
        ),

      });
      if (data) {
        debugger;
        // const updatedFavoriteUsers = [...favoriteUsers, ...data.fvtdocs];
        setfavoriteUsers(data);
        console.log("added")
      }

    } catch (error) {
      // setError(true)
      console.error(error);
    }
  }
  const handleStoryClick = (user) => {
    debugger;
    setSelectedUser(user);
    if (user) {
      return <Profile currentUser={user} />;
    }
  };
  
  
  return (
    <>
    {favoriteUsers.length > 0 ? (
      <div className="flex space-x-8 p-6 bg-white rounded-sm border-gray-20 border overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
        {favoriteUsers.map((profile) => (
          <Story
            img={profile.urlLink ? profile.urlLink[0] : ''}
            username={profile.name}
            onClick={() => handleStoryClick(profile)}
          />
        ))}
      </div>
    ) : null}
    </>
  );
}

export default Stories;
