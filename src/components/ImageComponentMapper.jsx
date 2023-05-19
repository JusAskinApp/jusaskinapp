import React from 'react'
import ImageComponent from '../pages/ImageComponent'

function ImageComponentMapper({images}) {
  return (
    <div className="bg-white p-4 justify-center">
    <p className="text-lg font-bold mb-4">Images</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
      {images.map((image) => (
        <ImageComponent
         title={image.title}
         imageSrc={image.imageIDs[0]} 
         key={image.title} />
      ))}
    </div>
  </div>
  )
}

export default ImageComponentMapper