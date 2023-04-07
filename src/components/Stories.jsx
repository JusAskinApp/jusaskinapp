import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import Story from "./Story";
const addtofvt = async (currentUser) => {
  fvt == false ? setfvt(true) : setfvt(false)
  debugger;
  try {
    const data = await makeApiCall('http://localhost:4000/api/users/addtofvt', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        {
          "email":JSON.parse(localStorage.userDetail).email,
          "userobject":currentUser
        }
      ),

    });
   if (data.message = "Added"){
    console.log("added")
   }

  } catch (error) {
    // setError(true)
    console.error(error);
  }
}
function Stories() {
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    debugger;
    const suggestions = [...Array(10)].map((_, i) => ({
      Id: i,
      username: faker.internet.userName(),
      avatar: faker.image.avatar(),
    }));
    setSuggestions(suggestions);
    console.log(suggestions)
  }, []);
  return (
    <div className="flex space-x-9 p-6 bg-white rounded-sm border-gray-200 border overflow-x-hidden">
      {suggestions.map((profile) => (
        <Story
          key={profile.Id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  );
}

export default Stories;
