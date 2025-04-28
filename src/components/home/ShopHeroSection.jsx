import React from 'react'
import { useLocation } from 'react-router-dom'

const ShopHeroSection = ({heading}) => {

//  const location = useLocation();

//  const  heading =
//   location.pathname === '/shop' ? 'Shop'
// : location.pathname === '/contact' ? 'Contact' : 'Store'; 


  return (
    <>
      <div className='h-[450px] p-1 flex justify-center'>
        <div className='w-xs '>
          <img src="/assets/images/bannerheadphone.jpeg" alt="" className='h-15 rounded-[40%] mt-20 float-end object-cover ' />
          <img src="/assets/images/shopheroimg.png" alt="" className='' />
        </div>
        <div className='w-2xl flex flex-col justify-center items-center'>
          <h1 className='text-[#FFB53F] text-5xl font-semibold'>{heading }</h1>
          <p className='text-center text-[#858585] text-[18px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          </p>
        </div>
        <div className='w-xs'>
          <img src="/assets/images/shopheroimg2.png" alt="" className=' object-cover'/>
          <img src="/assets/images/Apple.png" alt="" className=' h-20 mt-[-40px] rounded-full ml-3 object-cover'/>
        </div>

      </div>
    </>
  )
}

export default ShopHeroSection
