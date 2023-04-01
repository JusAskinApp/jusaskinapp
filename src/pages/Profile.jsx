import React, {useState} from "react";
import Tabsection from "../components/Tabsection";
import About from '../components/About';
import Settings from '../components/Settings';
import Post from '../components/Post';
import Resources from '../components/Resources';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const tabs = [
  { label: 'About', component: <About/> },
  { label: 'Settings', component: <Settings/> },
  { label: 'Saved', component: "test" },
  { label: 'My Resources', component: <Resources/> },
];

function Profile() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/462.jpg");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setSelectedFile(file);
    setImageUrl(imageUrl);
  };
  return (
    <div>
    <div className="flex flex-row items-center justify-center mt-14 ml-10">
    
           <div style={{position: 'relative'}}>
          <img className="w-28 h-28 rounded-full border" src={imageUrl} alt="" />
          <IconButton 
          onChange={handleFileChange}
            color="primary" 
            aria-label="upload picture" 
            component="label"
            style={{
              position: 'absolute',
              bottom: '-6px',
              right: '-6px',
              borderRadius: '50%',
              backgroundColor: '#fff',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.25)'
            }}
          >
            <input hidden accept="image/*" type="file" />
            <PhotoCamera />
          </IconButton>
        </div>
    <div className="ml-11">
      <h2 className="font-bold text-lg mb-1">{JSON.parse(localStorage.userDetail).name}</h2>
      <h3 className="text-sm text-gray-400">ML | AI | Big Data</h3>
      <div className="flex justify-start">
        <span className="text-yellow-500 text-2xl">&#9733;</span>
        <span className="text-yellow-500 text-2xl ml-1">&#9733;</span>
        <span className="text-yellow-500 text-2xl ml-1">&#9733;</span>
        <span className="text-yellow-500 text-2xl ml-1">&#9733;</span>
        <span className="text-yellow-500 text-2xl ml-1">&#9733;</span>
      </div>
    </div>
  </div>
  <div className="mt-8 px-22 sm:px-4 xs:px-2 md:px-20">
  <Tabsection tabs={tabs}/>
  </div>
  
  </div>
  );
}

export default Profile;
