import React from 'react'

function Card({image, heading, caption}) {
  return (
    <div className="border rounded-lg overflow-hidden w-3/4 mx-auto mt-6 hover:border-blue-500">
      <img src={image} className="w-24 h-24 p-4" alt="card image" />
      <div className="px-6 py-3">
        <div className="font-bold text-xl mb-2">{heading}</div>
        <div className="text-gray-700 text-sm">{caption}</div>
      </div>
    </div>
  )
}

export default Card