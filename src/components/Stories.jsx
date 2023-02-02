import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import Story from "./Story";
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
