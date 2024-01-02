import React from 'react'
import { useOutletContext } from 'react-router-dom'

const HostVanPricing = () => {
  
  const{currentVan} = useOutletContext();

  return (
    <div className='max-w-[1000px] mx-auto min-h-[50vh]'>
      <h2 className='py-2 text-2xl font-bold'>Price: <span>{currentVan.price}$ / day</span></h2>
  </div>
  )
}

export default HostVanPricing