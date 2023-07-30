import React from "react";
import ImageGallery from "./ImageGallery";
// import groupImage from "../assets/image99.png";
// import GroupsJoined from "./GroupsJoined";
// import JoinedgroupImage from "../assets/image88.png"
import { useEffect, useState } from "react";
// import { faker } from "@faker-js/faker";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import DialogBoxForGroups from "./DialogBoxForGroup";
function GroupComponent() {
  const navigate = useNavigate();
  const [suggestions, setSuggestions] = useState([]);
  const [allgroups, setAllGroups] = useState([]);
 
  const getallgroups = async () => {
    debugger;
    try {
      const response = await fetch(
        "https://jusaskin.herokuapp.com/api/groups/getallgroups",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id:JSON.parse(JSON.parse(JSON.stringify(localStorage)).userDetail).id
          }),
        }
      );
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        setAllGroups(data)
      } else {

      }
    } catch (error) {
      console.log(error)
    }
  };
   async function joinGroup(groupid){
    debugger;
    try {
      const response = await fetch(
        "https://jusaskin.herokuapp.com/api/groups/adduseringroup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            groupid:groupid,
            members:JSON.parse(localStorage.getItem('userDetail'))
          }),
        }
      );
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        // setAllGroups(data)
        navigate("/group")
      } else {

      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    // const suggestions = [...Array(5)].map((_, i) => ({
    //   Id: i,
    //   username: faker.internet.userName(),
    //   avatar: faker.image.avatar(),
    // }));
    // setSuggestions(suggestions);
    // console.log(suggestions)
    getallgroups();
  }, []);


  return (
    //   <div>
    //   <p className="text-lg font-bold">Recommended for you</p>
    //   <div className="flex flex-no-wrap xs:flex-col sm:flex-row overflow-x-auto h-60">
    //     {allgroups.map((item, index) => (
    //       <div key={index} className="flex flex-col items-center">
    //         <ImageGallery
    //           url={item.imageurl && item.imageurl[0]}
    //           title={item.groupname}
    //           creator={item.admin.name}
    //           className="flex-shrink-0"
    //         />
    //         <Button>Join</Button>
    //       </div>
    //     ))}
    //   </div>
    // </div>


    <div className="bg-white p-4 justify-center">
      <p className="text-lg font-bold mb-4">All Groups</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {allgroups.map((item) => (
          
          <div  className="border border-solid border-gray-300 rounded-lg shadow-md p-2 transition duration-24.3s flex-shrink-0"
          onClick={()=>{
            navigate("/grouphomepage", { state  : {groupid: item.blogRefId,join:item.join} })
          }}
          >

            <ImageGallery
              url={item.imageurl && item.imageurl[0]}
              title={item.groupname}
              creator={item.admin.name}
              className="flex-shrink-0"
              
            />
            <Button style={{float:"right"}} onClick={()=>{joinGroup(item.blogRefId)}}>{item.join ? "joined" : "join"}</Button>
           
          </div>
          
        ))}
      </div>
    </div>
  );
}

export default GroupComponent;
