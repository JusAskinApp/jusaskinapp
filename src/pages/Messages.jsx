import React from "react";
import MessageList from "../components/MessageList";
import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import makeApiCall from '../Api/api';

import IndividualChat from "../components/IndividualChat ";
import TabSection from "../components/Tabsection";
import './home.css';
import MessageList2 from "../components/MessageList2";


const tabs = [
  { label: 'Messages', component: <MessageList2/>},
  { label: 'Questions', component: <MessageList/> },
];

const Messaging = () => {
  
  const [suggestions, setSuggestions] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);
  
  useEffect(() => {
  //   const suggestions = [...Array(5)].map((_, i) => ({
  //     Id: i,
  //     username: faker.internet.userName(),
  //     avatar: faker.image.avatar(),
  //   }));
  //   setSuggestions(suggestions);
  // }, []);

  // const handleProfileClick = (profile) => {
  //   setSelectedProfile(profile);
  // };
  // const handleBackClick = () => {
  //   setSelectedProfile(null);
  // };

  return (
    <div className="header">
      <TabSection tabs={tabs}/>
      
 
</div>

  );
};

export default Messaging;
