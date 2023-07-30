import React, { useEffect, useState } from "react";
import TopicImage from "../assets/image107.png";
import Document from "./Document";
import RecommendedTopic from "./RecommendedTopic";
import Button from "@mui/material/Button";

function TopicComponent() {
  const [showAnotherComponent, setShowAnotherComponent] = useState(false);
  const [mygroups, setMyGroups] = useState([]);

  const handleRecommendedTopicClick = () => {
    setShowAnotherComponent(true);
  };
  const getMyGroups = async () => {
    debugger;
    try {
      const response = await fetch(
        "https://jusaskin.herokuapp.com/api/groups/getmygroups",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            "email": JSON.parse(JSON.parse(JSON.stringify(localStorage)).userDetail).email,
          })
        }
      );
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        setMyGroups(data)
      } else {

      }
    } catch (error) {
      console.log(error)
    }
  };
  useEffect(() => {
    getMyGroups();
  }, [])
  return (
    <div>
      <p className="text-lg font-bold">My Groups</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 pb-4">
          {mygroups.map((item) => (
            <div  style={{paddingBottom: "20px"}} className="border  rounded-lg shadow-md p-2 transition duration-24.3s flex-shrink-0">
              <RecommendedTopic
                url={item.imageurl && item.imageurl[0]}
                title={item.groupname}
                onClick={handleRecommendedTopicClick}
              />
              {/* <Button style={{ float: "right" }}>Join</Button> */}
            </div>
          ))}
        </div>
      {/* {showAnotherComponent && <Document />} */}
    </div>
  );
}

export default TopicComponent;
