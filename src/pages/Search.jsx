import React,{useState} from 'react'
import Search from '../components/Search';
import SearchedUser from '../components/SearchedUser';
import IconButton from "@mui/material/IconButton";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import Profile from '../pages/Profile'
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
      <div className="form-group p-4 ">
        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
            <IconButton onClick={backClick}>
              <ArrowBackOutlinedIcon />
            </IconButton>
            {!showProfile ? (<> <input
              type="text"
              className="form-control"
              value={searchTerm}
              onChange={handleChange}
              placeholder="Search..."
              style={{ borderBottom: "1px solid black", width: "100%" }}
            />
            <IconButton onClick={handleSubmit}>
              <SearchOutlinedIcon />
            </IconButton> </>):(<></>)}
          </div>
        </form>
      </div>

      {/* {Object.keys(usersData).length > 0 &&
        <SearchedUser
          username={usersData.name}
          type={usersData.type}
          onClick={handleUserClick}
        />} */}

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
    </>
  )
}
export default SearchPage;