import React from 'react'
import { useLoaderData } from 'react-router-dom'

function SingleItem() {
    const {title, image} = useLoaderData();
  return (
    <div>
      <h3 className='text-xl font-bold text-center'>{title}</h3>
      <img src={image} alt={title} />
    </div>
  )
}

export default SingleItem
