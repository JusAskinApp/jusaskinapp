import React from "react";
import MessageList from "../components/MessageList";
import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import makeApiCall from '../Api/api';

import IndividualChat from "../components/IndividualChat ";

const MessageList2 = () => {
  const [AllChats,setChatList]= useState([])
  const getChatList = async () => {
    debugger;
    try {
      const data = await makeApiCall('http://localhost:4000/api/chat/getChatList', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          {
            "email": JSON.parse(JSON.parse(JSON.stringify(localStorage)).userDetail).email,
          }
        ),

      });
     let chatList = []
      data.chatList.forEach((value) => {
        chatList.push({chatPartnerEmail  : value.chatPartnerEmail,
          id :value.chatId,
          userObj:value.userObj
        });
      });
      setChatList(chatList)
    } catch (error) {

      console.error(error);
    }
  }
  const [suggestions, setSuggestions] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);
  
  useEffect(() => {
    // const suggestions = [...Array(5)].map((_, i) => ({
    //   Id: i,
    //   username: faker.internet.userName(),
    //   avatar: faker.image.avatar(),
    // }));
    // setSuggestions(suggestions);
    getChatList();
  }, []);

  const handleProfileClick = (profile) => {
    debugger;
    setSelectedProfile(profile);
  };
  const handleBackClick = () => {
    debugger;
    setSelectedProfile(null);
  };

  return (
    <div>
  {!selectedProfile ? (
    <>
            {AllChats.map((profile) => (
              <MessageList
                // key={profile.Id}
                img="https://firebasestorage.googleapis.com/v0/b/jusaskinapp.appspot.com/o/149071-fb71c7c3-f1b1-4379-b4fa-65dc793d9125.png?alt=media&token=38953411-e32f-41fb-970c-d617b38749f6"
                username={profile.userObj ? profile.userObj.name : ''}
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

export default MessageList2