import React from 'react'
import { MdCancel } from "react-icons/md";


const HeaderTop = () => {
  return (
    <div className='w-full py-3 relative bg-[#0d0c22] flex justify-center items-center'>
      <h6 className='text-white'>Last Chance To Register</h6>
      <MdCancel className='text-white absolute right-3 cursor-pointer' />
    </div>
  )
}

export default HeaderTop
