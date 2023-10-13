import React from 'react'

const Card2 = () => {
  return (
    <div className='bg-white flex w-[90%] shadow-sm rounded'>
       <div className='w-[80px] p-2'>
          <img className='w-full h-full' src="https://img.freepik.com/free-vector/flat-man-checking-giant-check-list-background_23-2148091572.jpg?w=740&t=st=1697101145~exp=1697101745~hmac=dce27f31ddb632e8886e7ec4b92a9f54ed694dca3c147581f4ed4af26190f094"/>
       </div>
        <div className='ml-2 my-2 w-[70%]'>
           <p className='text-[12px]'>collagedunia is a one-stop solution to all your education related queries</p>
           <h3 className='text-[14px] font-bold mt-2 text-gray-500'>Gurmeet Sign</h3>
       </div>
      
    </div>
  )
}

export default Card2;