import React from 'react'

const SubscriptionSection = () => {
  return (
    <div className='w-full bg-[#E7E5E4] py-16 px-4'>
      <div className='max-w-4xl mx-auto flex flex-col justify-center items-center text-center'>
        <h1 className='text-[#236EDE] text-2xl sm:text-3xl md:text-4xl font-semibold mb-4'>
          Join the Waitlist
        </h1>
        <span className='text-[#858585] text-sm sm:text-base mb-6'>
          Be the first to know when we launch and get exclusive early access to our products.
        </span>
        <div className='w-full flex flex-col sm:flex-row justify-center items-center gap-3'>
          <input
            type="text"
            className='w-full sm:w-[70%] h-12 bg-white rounded-full px-5 outline-none'
            placeholder='Enter Your Email'
          />
          <button className='w-full sm:w-auto bg-[#236EDE] text-white px-6 h-12 rounded-full'>
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default SubscriptionSection
