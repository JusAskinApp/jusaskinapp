import React from "react";
import MessageList from "../components/MessageList";
import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import Search from "./Search";

const Messaging = () => {
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    debugger;
    const suggestions = [...Array(5)].map((_, i) => ({
      Id: i,
      username: faker.internet.userName(),
      avatar: faker.image.avatar(),
    }));
    setSuggestions(suggestions);
    console.log(suggestions);
  }, []);

  return (
    <div>
      <Search/>
      {suggestions.map((profile) => (
        <MessageList
          key={profile.Id}
          img={profile.avatar}
          username={profile.username}
        />
        
      ))}
      

    </div>
  );
};

export default Messaging;
