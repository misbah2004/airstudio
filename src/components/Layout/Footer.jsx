import React from 'react'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <>
     <div className=' w-full'>
      <div className='flex space-x-1 p-10'>
        <div className='w-sm flex flex-col justify-center items-center py-3'>
          <img src="/assets/images/logoimg.png" alt="" />
          <p className='mt-10 text-[#858585]'>
          A comprehensive e-commerce <br />
          platform tailored for small and <br />
          medium-sized businesses in Saudi <br />
          Arabia, offering seamless solutions <br />
          for fashion and digital products. <br />
          </p>
        </div>
        <div className='w-xs flex flex-col text-center list-none space-y-4 '>
          <h1>Product</h1>
          <li>Home</li>
          <li>New In</li>
          <li>Trending</li>
          <li>Shop</li>
          <li>Categories</li>
        </div>
        <div className='w-xs flex flex-col text-center list-none space-y-4 '>
          <h1>Company</h1>
          <li>About Us</li>
          <li>Contact</li>
          <li>Careers</li>
        </div>
        <div className='w-xs  flex flex-col text-center list-none space-y-4 '>
          <h1>Legal</h1>
          <li>Privacy Policy</li>
          <li>Terms Of Service</li>
          <div className='flex justify-center items-center space-x-4 mt-18'>
            <FaLinkedin/>
            <FaXTwitter/>
            <FaFacebook/>
          </div>
        </div>
      </div>

     </div>
    </>
  )
}

export default Footer
