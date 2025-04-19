import React from 'react'
import { MoveRight, Star } from 'lucide-react'
import { FaStar } from 'react-icons/fa'

const ShopHeroSection = () => {
  return (
    <>
      <div className='h-[450px] p-1 flex justify-center'>
        <div className='w-xs '>
          <img src="/assets/images/bannerheadphone.jpeg" alt="" className='h-15 rounded-[40%] mt-20 float-end object-cover ' />
          <img src="/assets/images/shopheroimg.png" alt="" className='' />
        </div>
        <div className='w-2xl flex flex-col justify-center items-center'>
          {/* <h3 className='text-[#000000] text-3xl font-semibold'>Empowering Businesses,</h3> */}
          <h1 className='text-[#FFB53F] text-5xl font-semibold'>Shop</h1>
          <p className='text-center text-[#858585] text-[18px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          </p>
          {/* <div className='w-full mt-5 text-center flex justify-center space-x-1'>
            <button className='bg-[#236EDE] px-13 py-1 rounded-xl'>Shop Now</button>
            <button className='px-10 p-[3px] border-[#858585] rounded-xl border-[1px] flex items-center text-center gap-1'>See More <MoveRight /></button>
          </div> */}
          {/* <div className='w-full h-10 mt-4 space-x-1  flex justify-center items-center'>
            <div className='flex '>
              <span className='h-5 w-5 bg-[#FFB703] rounded-full block'></span>
              <span className='h-5 w-5 bg-[#FFB703] rounded-full block'></span>
              <span className='h-5 w-5 bg-[#FFB703] rounded-full block'></span>
              <span className='h-5 w-5 bg-[#FFB703] rounded-full block'></span>
            </div>
            <div className=' flex space-x-2'>
              <span className='text-xl text-[#858585]'>4.9</span>
              <span className='flex justify-center items-center text-xs'>
              <FaStar className='text-[#FFB703]'/>
              <FaStar className='text-[#FFB703]'/>
              <FaStar className='text-[#FFB703]'/>
              <FaStar className='text-[#FFB703]'/>
              <FaStar className='text-[#FFB703]'/>
              </span>
              <span className='text-[#858585]'>(1.9k Reviews)</span>

            </div>
          </div> */}

        </div>
        <div className='w-xs'>
          <img src="/assets/images/shopheroimg2.png" alt="" className=' object-cover'/>
          <img src="/assets/images/Apple.png" alt="" className=' h-20 mt-[-40px] ml-3 object-cover'/>
        </div>

      </div>
    </>
  )
}

export default ShopHeroSection
