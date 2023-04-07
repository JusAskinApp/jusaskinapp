import React from "react";
import ImageGallery from "./ImageGallery";
import groupImage from "../assets/image99.png";
import GroupsJoined from "./GroupsJoined";
import JoinedgroupImage from "../assets/image88.png"
import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";

function GroupComponent() {
    const [suggestions, setSuggestions] = useState([]);
    useEffect(() => {
      const suggestions = [...Array(5)].map((_, i) => ({
        Id: i,
        username: faker.internet.userName(),
        avatar: faker.image.avatar(),
      }));
      setSuggestions(suggestions);
      console.log(suggestions)
    }, []);

   
  return (
    <div>
      <p className="text-lg font-bold">Recommended for you</p>
      <div className="flex flex-no-wrap xs:flex-col sm:flex-row justify-between overflow-x-auto h-60">
        <ImageGallery
          url={groupImage}
          title="First Image Title"
          creator="First Image Creator"
          className="flex-shrink-0"
        />

        <ImageGallery
          url={groupImage}
          title="First Image Title"
          creator="First Image Creator"
          className="flex-shrink-0"
        />
        <ImageGallery
          url={groupImage}
          title="First Image Title"
          creator="First Image Creator"
          className="flex-shrink-0"
        />
        <ImageGallery
          url={groupImage}
          title="First Image Title"
          creator="First Image Creator"
          className="flex-shrink-0"
        />
        <ImageGallery
          url={groupImage}
          title="First Image Title"
          creator="First Image Creator"
          className="flex-shrink-0"
        />
      </div>
      <GroupsJoined
      image={JoinedgroupImage}
      heading="Programming"
      caption="Subtitle for the group"
      groupMembers={suggestions}
      />
      {/* {groupData && groupData.length > 0 && (
        <div>
          {groupData.map((group) => (
            <GroupsJoined
              key={group.id}
              image={JoinedgroupImage}
              heading={group.groupName}
              caption={group.subtitle}
              groupMembers={suggestions}
            />
          ))}
        </div>
      )} */}
    </div>
  );
}

export default GroupComponent;
