import React from "react";
import MessageList from "../components/MessageList";
import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import makeApiCall from '../Api/api';
import IndividualChat from "../components/IndividualChat ";
import HeaderIcons from "../components/HeaderIcons";

const MessageList2 = () => {
  const [AllChats,setChatList]= useState([])
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [newMessageCount, setNewMessageCount] = useState(0);
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
  
  const handleProfileClick = (profile) => {
    debugger;
    setSelectedProfile(profile);
  };
  const handleBackClick = () => {
    debugger;
    setSelectedProfile(null);
  };
  
  useEffect(() => {
    getChatList();
  }, []);

  return (
    <div>
  {!selectedProfile ? (
    <>
            {AllChats.map((profile) => (
              
              <MessageList
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