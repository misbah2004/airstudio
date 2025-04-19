 import { BadgeCheck, Flame, PackageOpen, WalletCards } from 'lucide-react'
import React from 'react'
 
 const SalesSection = () => {
   return (
     <>
       <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-[#FFB53F] text-2xl font-semibold'>Sales Items</h1>
            <span className='text-[#858585]'>Hear from our early adopters about their experience with out products.</span>
        </div>
        <div className='flex space-x-2 mt-2 flex-col lg:flex-row p-5'>
            <div className='bg-[#F6FAFF] p-5 flex flex-col justify-center items-center rounded-md'>
            <PackageOpen />
            <span>New In</span>
            <span>Latest arrivals and trends</span>

            </div>
            <div className='bg-[#F6FAFF] p-5 flex flex-col justify-center items-center rounded-md'>
            <Flame />
            <span>New In</span>
            <span>Latest arrivals and trends</span>

            </div>
            <div className='bg-[#F6FAFF] p-5 flex flex-col justify-center items-center rounded-md'>
            <BadgeCheck />
            <span>New In</span>
            <span>Latest arrivals and trends</span>

            </div>
            <div className='bg-[#F6FAFF] p-5 flex flex-col justify-center items-center rounded-md'>
            <WalletCards/>
            <span>New In</span>
            <span>Latest arrivals and trends</span>
            </div>
        </div>

       </div>
     </>
   )
 }
 
 export default SalesSection
 