import React, { useState } from 'react';
import myImage from "../assets/LP.png";

const Subscribe = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // add code here to handle the form submission
    setEmail('');
  }

  return (
    <div style={{backgroundColor:'#F0F7F4'}} className="text-center">
      <h2 className="text-5xl font-bold mb-6 pt-20">Learn, Share, Connect</h2>
      <form onSubmit={handleSubmit} className="mx-auto my-6">
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className="px-3 py-2 rounded-lg w-64 mb-6" 
        />
        <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">Subscribe</button>
      </form>
      <img src={myImage} alt="image" className="mx-auto" />
    </div>
  );
}

export default Subscribe;
