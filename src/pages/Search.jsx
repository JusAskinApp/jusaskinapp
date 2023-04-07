import React,{useState} from 'react'
import Search from '../components/Search';
import SearchedUser from '../components/SearchedUser';
import IconButton from "@mui/material/IconButton";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import Profile from '../pages/Profile'
import './home.css';
function SearchPage() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [usersData, setUsersData] = React.useState({});
  const [showProfile, setShowProfile] = useState(false);
  const [currentDataObject,setCurrentDataObject] = useState({});
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleUserClick = (data) => {
    debugger;
    setCurrentDataObject(data)
    setShowProfile(true);
  };
  const backClick = () => {
setShowProfile(false)
  };
  const handleSubmit = async (event) => {
    debugger
    setUsersData({})
    event.preventDefault();
    const criteria = "name"; // replace "name" with the actual value you want to use
    fetch(
      "https://jusaskin.herokuapp.com/api/users/searchUser",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          criteria: criteria,
          query: searchTerm
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsersData(data);
      })
      .catch((error) => {
        console.error(error);
      });
    console.log(searchTerm);
  };
  return (
    <>
      <div className="header">
  <form onSubmit={handleSubmit} className="flex items-center w-full px-4 py-2">
    <IconButton onClick={backClick} className="text-white mr-4">
      <ArrowBackOutlinedIcon />
    </IconButton>
    {!showProfile ? (
      <>
        <input
          type="text"
          className="form-control fancy-search bg-transparent border-b-2 border-black w-full focus:outline-none focus:border-blue-500"
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
        <Profile currentUser={currentDataObject}/>
      ) : (
        Object.keys(usersData).length > 0 && (
          <SearchedUser
            username={usersData.name}
            type={usersData.type}
            onClick={() => handleUserClick(usersData)}
          />
        )
      )}
</div>
    </>
  )
}
export default SearchPage;