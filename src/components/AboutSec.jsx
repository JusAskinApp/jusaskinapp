import React from 'react'
import img3 from "../assets/img2.png"

function AboutSec() {
  return (
    <div className='bg-gray-200'>
    <div className="container mx-auto px-6 py-2 flex items-center justify-between">
      <div className="md:w-1/2 pr-4">
        <h1 className="text-2xl font-bold mb-4">About Us</h1>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed auctor, magna euismod malesuada tincidunt, 
          augue augue egestas nibh, in iaculis ipsum est id nulla.
        </p>
      </div>
      <div className="md:w-1/2">
        <img src={img3} alt="About us" className="w-full h-auto"/>
      </div>
    </div>
    </div>
  )
}

export default AboutSec