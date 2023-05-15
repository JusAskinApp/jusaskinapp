import React from 'react'
import AllResources from './AllResources'

function AllResourcesMapper({data}) {
    debugger;
  return (
    <div>
        {data.map(item =>{
          <AllResources title={item.title}/>
        })}
        </div>
  )
}

export default AllResourcesMapper