import React, { useState } from "react";
import SearchedResource from "../components/SearchedResource";
import { CircularProgress } from "@material-ui/core";
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import notfound from "../assets/404 not found.png";
import SearchIcon from '@material-ui/icons/Search';
import "./home.css";
import makeApiCall from "../Api/api";
import {
  CardMedia
  
} from "@mui/material";
function Sources() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedResource, setSelectedResource] = useState(null);
  const [selectedName, setSelectedName] = useState("");

  const handleSearch = async (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    setLoading(true);

    try {
      const data = await makeApiCall('https://jusaskin.herokuapp.com/api/users/searchresources', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          {
            "q": searchTerm,
          }
        ),

      });
      if (data){
        debugger;
        setSearchResults(data)
        // determineMediaType(data)
        // setTimeout(() => {
        //   const results = data.filter((resource) =>
        //     resource.name.toLowerCase().includes(searchTerm.toLowerCase())
        //   );
    
        //   setSearchResults(results);
        //   setLoading(false);
        // }, 3000);
        
      }
     
    } catch (error) {

      console.error(error);
    }
   
  };

  function determineMediaType(url) {
    debugger
    const videoExtensions = [".mp4", ".avi", ".mov", ".wmv"];
    const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".ico"];
    const pdfExtensions = [".pdf"];
    const pptExtensions = [".ppt", ".pptx"];
    const docExtensions = [".doc", ".docx"];
    const textExtensions = [".txt", ".md"];

    const fileExtension = url.substring(url.lastIndexOf(".")).split("?")[0];

    if (videoExtensions.includes(fileExtension)) {
      return "video";
    } else if (imageExtensions.includes(fileExtension)) {
      return "image";
    } else if (pdfExtensions.includes(fileExtension)) {
      return "pdf";
    } else if (pptExtensions.includes(fileExtension)) {
      return "ppt";
    } else if (docExtensions.includes(fileExtension)) {
      return "doc";
    } else if (textExtensions.includes(fileExtension)) {
      return "text";
    } else {
      return null;
    }
  }

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
          {searchResults.map((image) => (
           <div
          
          
         >
           {console.log(image)}
           {determineMediaType(image) === "video" ||
           determineMediaType(image) === "image" ? (
             <CardMedia
               component={
                 determineMediaType(image) === "video" ? "video" : "img"
               }
               height="100%"
               image={image}
               alt="ERROR"
               controls={determineMediaType(image) === "video"}
             />
           ) : (
             <div>
               {determineMediaType(image) === "ppt" ? (
                 <iframe
                   title={"PDF-Viewer"}
                   src={`https://view.officeapps.live.com/op/embed.aspx?src=${image}`}
                   
                   style={{ height: "100vh", width: "90vw" }}
                 ></iframe>
               ) : (
                 <iframe src={image} width="100%" height="600"></iframe>
               )}
             </div>
           )}
         </div>
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
