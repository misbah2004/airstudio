import React from 'react'

const OrderSection = () => {
  return (
    <div>
      <div className='p-10 mt-9'>
        <button className='bg-[#236EDE] text-white px-5 p-1 rounded-full'>Back</button>
      <div className='flex items-center p-2 space-x-3 w-full border-b border-gray-300 mt-5'>
        <img src="/assets/images/Johndoe.png" alt="" className='h-15' />
        <h1 className='mt-3 text-2xl'>John Doe</h1>
      </div>
      </div>
    </div>
  )
}

export default OrderSection
