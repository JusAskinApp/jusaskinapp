import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
   const [searchBy, setSearchBy] = useState("");

  // const handleChange = (event) => {
  //   if (event.target.value !== "") {
  //     setSearchBy(event.target.value);
  //   }
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onFormSubmit(searchTerm, searchBy);
  };

  return (
    <div className="form-group p-4 ">
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
          <IconButton>
            <ArrowBackOutlinedIcon />
          </IconButton>
          <input
            type="text"
            className="form-control"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search..."
            style={{ borderBottom: "1px solid black", width: "100%" }}
          />
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          {/* <select
            className="form-select ms-3"
            aria-label="Search By"
            onChange={handleChange}
          >
            <option value="">Search By</option>
            <option value="user">User</option>
            <option value="resources">Resources</option>
            <option value="posts">Posts</option>
          </select> */}
        </div>
      </form>
    </div>
  );
};

export default Search;
