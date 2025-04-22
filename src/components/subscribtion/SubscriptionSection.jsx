import React from 'react'

const SubscriptionSection = () => {
  return (
    <div>
      <div className='w-full bg-[#E7E5E4] flex flex-col justify-center items-center p-25'>
        <h1 className='text-[#236EDE] text-4xl font-semibold'>Join the Waitlist</h1>
        <span className='text-[#858585]'>Be the first to know when we launch and get exclusive early access to our products.</span>
        <div className='w-full flex justify-center items-center mt-5 space-x-1'>
          <input type="text" className='w-2xl h-10 bg-white rounded-full text-start px-5' placeholder='Enter Your Email'/>
          <button className='bg-[#236EDE] px-5 h-10 rounded-full'>Subscribe Now</button>
        </div>
      </div>
    </div>
  )
}

export default SubscriptionSection
