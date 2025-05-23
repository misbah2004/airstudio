import React from 'react'
import { FaChevronDown } from 'react-icons/fa'

const RejisterComponentSectionTwo = () => {
  return (
    <div className='w-full mt-2 flex justify-center items-center'>
    <div className='p-3 border border-gray-300 text-white'>
       <div className=" w-2xl p-2 flex justify-between items-center">
                <p>1. Edit your account information</p>
                <span className="">
                  <FaChevronDown />
                </span>
              </div>
              <div>
                <p>Select Available Method</p>
                <span className=' mt-5
                 w-full h-[1px] block bg-gray-300'></span>
                 <div className='w-full border border-gray-300 rounded-md mt-3  flex'>
                    <button className='px-6 py-2 rounded-full mt-10 ml-2 mb-2 bg-[#236EDE] text-white'>Enable Two Factor <br /> Authentication</button>
                    <span className='w-[1px] bg-gray-300 block ml-35'></span>
                 </div>
              </div>
    </div>
    </div>
  )
}

export default RejisterComponentSectionTwo
