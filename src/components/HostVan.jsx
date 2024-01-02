import React from 'react'

const HostVan = ({name, price, imageUrl}) => {
  return (
    <div className='flex gap-3 items-center bg-white p-3 rounded-xl'>
      <img className='w-[60px] md:w-[90px] rounded-xl' src={imageUrl} alt="" />
      <div>
        <h1 className='font-semibold text-lg'>{name}</h1>
        <h2>{price}$ / day</h2>
      </div>
    </div>
  )
}

export default HostVan