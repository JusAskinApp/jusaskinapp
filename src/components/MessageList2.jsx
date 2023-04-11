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
      const data = await makeApiCall('https://jusaskin.herokuapp.com/api/chat/getChatList', {
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
                img={ profile.userObj ? profile.userObj.urlLink ? profile.userObj.urlLink[0] :'' :''}
                username={profile.userObj ? profile.userObj.name : ''}
                onClick={() => handleProfileClick(profile)}
              />
            ))}
            {
              console.log(AllChats)
            }
    </>
  ) : (
    <IndividualChat profile={selectedProfile} onBackClick={handleBackClick}/>
  )}
</div>

  );
};

export default MessageList2