import { ArrowUpFromLine } from 'lucide-react'
import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'

const ChatSection = () => {
  return (
    <div>
      <div className='p-10 '>
      <button className='bg-[#236EDE] px-5 p-1 rounded-full'>Back</button>
      <div className='w-full  mt-5 rounded-sm border border-gray-300'>
        <div className='w-full h-10 flex items-center p-5 bg-[#21252908]'>
            <h1 className='text-lg font-semibold'>Chat</h1>
        </div>
        <div className='w-full h-96 border border-gray-300 flex justify-end'>
            <div className=' w-2xl mt-10 p-2'>
                <img src="/assets/images/chatimg.png" alt="" className='' />
            </div>

        </div>
        <div className='w-full flex p-2 space-x-1'>
            <input type="text" className='bg-gray-300 w-6xl p-1 rounded-sm' placeholder='TypeHere' />
            <button className='bg-[#212529] p-2 rounded-sm text-white'><ArrowUpFromLine /></button>
            <button className='bg-[#FFB53F]  rounded-sm text-white p-3'><FaPaperPlane /></button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default ChatSection
