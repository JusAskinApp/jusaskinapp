import React from "react";
import MessageList from "../components/MessageList";
import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import makeApiCall from '../Api/api';

import IndividualChat from "../components/IndividualChat ";
import TabSection from "../components/Tabsection";
import './home.css';
import MessageList2 from "../components/MessageList2";
import HeaderIcons from "../components/HeaderIcons";


const tabs = [
  { label: 'Messages', component: <MessageList2/>},
  { label: 'Questions', component: <MessageList/> },
];

const Messaging = () => {

  return (
    <div className="header">
      <HeaderIcons/>
      <TabSection tabs={tabs}/>
</div>

  );
};

export default Messaging;
