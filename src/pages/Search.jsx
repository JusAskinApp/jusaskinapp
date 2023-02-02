import React from "react";
import IconButton from "@mui/material/IconButton";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

const Search = (props) => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onFormSubmit(searchTerm);
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
          onChange={handleChange}
          placeholder="Search..."
          style={{ borderBottom: "1px solid black", width: "100%" }}
        />
        <IconButton>
          <SearchOutlinedIcon />
        </IconButton>
        </div>
      </form>
    </div>
  );
};

export default Search;
