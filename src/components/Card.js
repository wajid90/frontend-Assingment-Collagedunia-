import React from 'react'

const Card = ({image,title}) => {
  return (
    <div className='col-span-12 md:col-span-6  py-5 px-2 bg-white m-1 text-center rounded shadow-sm'>
      <div className='w-[45px] h-[45px] mx-auto'>
        <img className='w-full h-full object-cover' src={image}/>
      </div>
      <h4 className='text-[12px] mx-auto mt-2 font-bold text-gray-500'>{title}</h4>
    </div>
  )
}

export default Card