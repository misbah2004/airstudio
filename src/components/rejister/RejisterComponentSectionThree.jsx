import React from 'react'
import { FaChevronDown } from 'react-icons/fa'

const RejisterComponentSectionThree = () => {
  return (
    <div className='flex justify-center items-center w-full p-2'>
    <div className='text-gray-400 border border-gray-300 p-3'>
        <p>All Address</p>
        <span className='w-2xl block bg-gray-300 h-[1px] mt-5'></span>
        <p className='mt-5'>Add new Adress</p>
        <span className='w-2xl block bg-gray-300 h-[1px] mt-5'></span>
        <div className="w-full p-2 border border-gray-300 flex justify-between items-center">
                  <p>3. Manage Address</p>
                  <span className="">
                    <FaChevronDown />
                  </span>
                </div>
    </div>
    </div>
  )
}

export default RejisterComponentSectionThree
