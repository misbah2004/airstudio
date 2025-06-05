import React from 'react'


const ShopHeroSection = ({heading}) => {

  return (
    <>
      <div className='h-[450px] flex justify-center items-center '>
        <div className='w-xs hidden lg:block'>
          <img src="/assets/images/bannerheadphone.jpeg" alt="" className='h-15 w-15 mt-2 rounded-[100%] float-end object-cover ' />
          <img src="/assets/images/shopheroimg.png" alt="" className='' />
        </div>
        <div className=' lg:mt-[15%] flex flex-col justify-center items-center'>
          <h1 className='text-[#FFB53F] text-5xl font-semibold'>{heading }</h1>
          <p className='text-center text-[#858585]  text-[10px] lg:text-[20px]'>Lorem Ipsumis simply dummy text of the printing and typesetting <br /> industry. Lorem Ipsum has been the industry's standard dummy text ever <br /> since the 1500s,
          </p>
        </div>
        <div className='w-xs hidden lg:block '>
          <img src="/assets/images/shopheroimg2.png" alt="" className='mt-[-100px] object-cover'/>
          <img src="/assets/images/Apple.png" alt="" className=' h-15  rounded-full ml-12 object-cover'/>
        </div>

      </div>
    </>
  )
}

export default ShopHeroSection
