import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import { CircularProgress } from "@material-ui/core";

import SearchedUser from "../components/SearchedUser";
import IconButton from "@mui/material/IconButton";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import Profile from "../pages/Profile";
import "./home.css";
import HeaderIcons from "../components/HeaderIcons";
function SearchPage() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [usersData, setUsersData] = React.useState({});
  const [showProfile, setShowProfile] = useState(false);
  const [loading, setLoading] = useState(false);

  const [currentDataObject, setCurrentDataObject] = useState({});
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    search()
  };

  const handleUserClick = (data) => {
    debugger;
    setCurrentDataObject(data);
    setShowProfile(true);
  };
  const backClick = () => {
    setShowProfile(false);
  };
  async function search(){
    setLoading(true);
    setUsersData({});
   
    const criteria = "name"; // replace "name" with the actual value you want to use
    fetch("https://jusaskin.herokuapp.com/api/users/searchUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        criteria: criteria,
        query: searchTerm,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        debugger;
        setUsersData(data);
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      })
      .catch((error) => {
        console.error(error);
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      });
  }
  const handleSubmit = async (event) => {
    debugger;
    event.preventDefault();
    search()
    // console.log(searchTerm);
  };
  useEffect(()=>{
    search();
  },[])
  return (
    <>
      <div className="header">
        <HeaderIcons/>
        <form
          onSubmit={handleSubmit}
          className="flex items-center w-full px-4 py-2"
        >
          <IconButton onClick={backClick} className="text-white mr-4">
            <ArrowBackOutlinedIcon />
          </IconButton>
          {!showProfile ? (
            <>
              <input
                type="text"
                className="form-control fancy-search bg-transparent border-2 border-black rounded-full w-full focus:outline-none focus:border-blue-500 text-gray-700 px-4 py-2 transition-all duration-300 ease-in-out"
                value={searchTerm}
                onChange={handleChange}
                placeholder="Search..."
              />
              <IconButton onClick={handleSubmit} className="text-white ml-4">
                <SearchOutlinedIcon />
              </IconButton>
            </>
          ) : (
            <></>
          )}
        </form>
        {showProfile ? (
          <Profile currentUser={currentDataObject} />
        ) : !loading ? (
          usersData && usersData.length > 0 ? (
            <div>
              {usersData.map((user, index) => (
                <SearchedUser
                  key={index}
                  img={user.urlLink ? user.urlLink[0] : ''}
                  username={user.name}
                  type={user.type}
                  onClick={() => handleUserClick(user)}
                />
              ))}
            </div>
          ) : (
            <div className="mt-4 flex items-center justify-center">
              No Profile found.
            </div>
          )
        ) : (
          <div className="mt-4 flex items-center justify-center">
            <CircularProgress />
          </div>
        )}
      </div>
    </>
  );
}
export default SearchPage;
