import React from "react";
import MessageList from "../components/MessageList";
import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import Search from "./Search";
import IndividualChat from "../components/IndividualChat ";

const Messaging = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);
  
  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      Id: i,
      username: faker.internet.userName(),
      avatar: faker.image.avatar(),
    }));
    setSuggestions(suggestions);
  }, []);

  const handleProfileClick = (profile) => {
    setSelectedProfile(profile);
  };
  const handleBackClick = () => {
    setSelectedProfile(null);
  };

  return (
    <div>
      {!selectedProfile ? (
        <>
          <Search />
          {suggestions.map((profile) => (
            <MessageList
              key={profile.Id}
              img={profile.avatar}
              username={profile.username}
              onClick={() => handleProfileClick(profile)}
            />
          ))}
        </>
      ) : (
        <IndividualChat profile={selectedProfile} onBackClick={handleBackClick}/>
      )}
    </div>
  );
};

export default Messaging;
