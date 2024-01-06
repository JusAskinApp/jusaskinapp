import React, { useState,useEffect} from "react";
import { CircularProgress } from "@material-ui/core";
import notfound from "../assets/404 not found.png";
import "./home.css";
import makeApiCall from "../Api/api";
import TabSection from "../components/Tabsection";
import AllResourcesMapper from "../components/AllResourcesMapper";
import ImageComponentMapper from "../components/ImageComponentMapper";
import VideoComponent from "../components/VideoComponent";
import DocsComponentMapper from "../components/DocsComponentMapper";
function Sources() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedName, setSelectedName] = useState("");
  const [apiData, setApiData] = useState([]);

async function search(){
  debugger;
  setLoading(true);
  try {
    const data = await makeApiCall(
      "https://jusaskin.herokuapp.com/api/users/searchresources",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          q: searchTerm,
        }),
      }
    );
    if (data) {
      debugger;
      setSearchResults(data);
      setApiData(data)
      setLoading(false);
    }
  } catch (error) {
    console.error(error);
  }
}
  const handleSearch = async (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    search()
  };

  const determineMediaType = (url) => {
    if (url) {
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
    } else {
      return null;
    }
  };

  const tabs = [
    { label: 'All', component: <AllResourcesMapper data={apiData} /> },
    { label: 'Videos', component: <VideoComponent videos={apiData.filter(item => determineMediaType(item.imageIDs[0]) === 'video')} /> },
    { label: 'Docs', component: <DocsComponentMapper docs={apiData.filter(item => {
      debugger;
      const fileExtension = item.imageIDs[0] ? item.imageIDs[0].substring(item.imageIDs[0].lastIndexOf(".")).split("?")[0] :'';
      const docExtensions = [".doc", ".docx", ".ppt", ".pptx", ".pdf"];
      return docExtensions.includes(fileExtension);
    })} />  },
  
    { label: 'Images', component: <ImageComponentMapper images={apiData.filter(item => determineMediaType(item.imageIDs[0]) === 'image')} /> },
  ];

  useEffect(()=>{
    search()
  },[])
 

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
       
      </div>
      <TabSection tabs={tabs}/>
    {loading ? (
  <div className="mt-4 flex items-center justify-center">
    <CircularProgress />
    
  </div>
) : searchResults.length > 0 ? (
  <div>
    {/* {searchResults.map((result) => (
      <div key={result.title}>
        {result.imageIDs.map((image) => (

          <div key={image}>
            
          </div>
        ))}
      </div>
    ))} */}
  </div>
) : (
  <div className="mt-4 flex flex-col items-center justify-center">
    <img src={notfound} alt="No results found" className="w-100 h-100" />
    <p className="mt-4 text-lg font-medium text-gray-500">No results found.</p>
  </div>
)}

    </div>
  );
}

export default Sources;

