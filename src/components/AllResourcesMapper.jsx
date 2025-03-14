import React from 'react';
import AllResources from './AllResources';

function AllResourcesMapper({ data }) {
  
  
  return (
    <div className="bg-white p-4 justify-center">
      <p className="text-lg font-bold mb-4">All Results</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {data.map((item) => (
          <AllResources
           title={item.title}
           imageSrc={item.imageIDs[0]} 
           key={item.title} />
        ))}
      </div>
    </div>
  );
}

export default AllResourcesMapper;
