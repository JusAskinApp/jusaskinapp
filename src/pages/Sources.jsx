import React, { useState } from "react";
import SearchedResource from "../components/SearchedResource";
import { CircularProgress } from "@material-ui/core";
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import notfound from "../assets/404 not found.png";
import SearchIcon from '@material-ui/icons/Search';
import "./home.css";

function Sources() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedResource, setSelectedResource] = useState(null);
  const [selectedName, setSelectedName] = useState("");

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    setLoading(true);

    // Perform search logic here, and update searchResults with the results.
    // For example, you might make an API request to a server and update the state accordingly.

    // For this example, we'll just simulate a search and return some dummy data.
    setTimeout(() => {
      const results = [
        { id: 1, name: "Object oriented programming" },
        { id: 2, name: "Resource 2" },
        { id: 3, name: "Resource 3" },
      ].filter((resource) =>
        resource.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setSearchResults(results);
      setLoading(false);
    }, 3000);
  };

  const handleResourceClick = (resource) => {
    debugger;
    setSelectedResource(resource);
    setSelectedName(resource.name);
  };

  const handleClearSelected = () => {
    setSelectedResource(null);
    setSelectedName("");
  };

  return (
    <div className="header">
      <div className="flex items-center w-full px-4 py-2 relative">
  
  <input
    type="text"
    placeholder="Search resources..."
    value={selectedName || searchTerm}
    onChange={handleSearch}
    className="form-control fancy-search bg-transparent border-2 border-black rounded-full w-full focus:outline-none focus:border-blue-500 text-gray-700 px-4 py-2 transition-all duration-300 ease-in-out"
  />
  {loading && (
    <CircularProgress
      size={20}
      thickness={5}
      style={{
        position: "absolute",
        top: "30%",
        right: "25px",
      }}
    />
  )}
  {!loading && selectedName && (
    <CancelOutlinedIcon
      onClick={handleClearSelected}
      size={16}
      thickness={3}
      style={{
        position: "absolute",
        top: "30%",
        right: "25px",
        cursor: 'pointer'
      }}
    />
  )}
 
</div>

      {loading ? (
        <div className="mt-4 flex items-center justify-center">
          <CircularProgress />
        </div>
      ) : searchResults.length > 0 ? (
        <div className="mt-4 items-center w-full px-4">
          {searchResults.map((resource) => (
            <SearchedResource
              key={resource.id}
              resource={resource}
              handleResourceClick={handleResourceClick}
            />
          ))}
        </div>
      ) : (
        <div className="mt-4 flex flex-col items-center justify-center">
          <img src={notfound} alt="No results found" className="w-100 h-100" />
          <p className="mt-4 text-lg font-medium text-gray-500">
            No results found.
          </p>
        </div>
      )}

      {selectedResource && (
        <div className="mt-4 flex items-center justify-center">
          <div>{selectedResource.name} clicked</div>
        </div>
      )}
    </div>
  );
}

export default Sources;
