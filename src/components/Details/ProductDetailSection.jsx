import { RotateCcw, Trash2 } from 'lucide-react'
import React from 'react'
import { FaCheck, FaQuestion, FaShare, FaShip, FaStopwatch, FaTruck } from 'react-icons/fa'

const ProductDetailSection = () => {
    
  return (
    <>
    <div className='w-full flex space-x-4 mt-5 p-5'>
      <div className=' flex'>
        <div className='w-20 bg-white px-2'>
            <img src="/assets/images/detail1.jpeg" alt="" />
            <img src="/assets/images/detail2.jpeg" alt="" />
            <img src="/assets/images/detail3.jpeg" alt="" />
            <img src="/assets/images/detail4.jpeg" alt="" />
            <img src="/assets/images/detail5.jpeg" alt="" />
            <img src="/assets/images/detail6.jpeg" alt="" />
        </div>
        <div className=''>
            <img src="/assets/images/detail.png" alt="" className='h-[570px] object-cover w-[550px] rounded-2xl' />
        </div>
      </div>
      <div className='w-2xl flex flex-col space-y-2'>
        <h1 className='font-albert text-2xl'>Ribbed Tank Top</h1>
        <div className='flex text-center space-x-2 justify-items-center'><button className=' rounded-sm p-1 border border-[#000000]'>Best seller</button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FFB53F" stroke="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap-icon lucide-zap"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg> <h1>Selling fast! 56 people have this in their carts.</h1></div>
        <div className='flex space-x-3'><span className='text-[#FFB53F] text-2xl'>$16.95</span> <span className='text-2xl'>$10.00</span><button className='text-[#FFFFFF] bg-[#FFB53F] rounded-3xl p-1'>20% OFF</button> </div>
        <div><span className='px-2 py-1 bg-[#000000] text-[#FFFFFF]'>20</span> <span className='text-[#000000] font-semibold'>People are viewing this right now</span></div>
        <div className=' flex flex-col justify-center items-center border border-[#FFB53F] w-md p-5 mt-2'>
            <span className='flex items-center gap-x-1'><FaStopwatch/>HURRY UP! SALE ENDS IN:</span>
            <span className='text-[#FFB53F] text-2xl'><span>72 Days : <span>1 Hours :</span> <span>15 Mins :</span>  <span>10 Secs</span></span></span>
        </div>
        <div>
            <h1 className='text-[#000000] flex gap-x-0.5'>Color:<span className='font-semibold'>Beige</span> </h1>
            <span className='flex items-center space-x-3 mt-2'>
                <span className='h-10 w-10 border border-[#000000] rounded-full block'></span>
                <span className='h-8 w-8 border border-[#000000] rounded-full block opacity-60'></span>
                <span className='h-6 w-6 border border-[#000000] rounded-full block opacity-50'></span>
                <span className='h-4 w-4 border border-[#000000] rounded-full block opacity-40'></span>
                </span>
        </div>
        <div>
            <h1>Size: <span className='font-semibold'>M</span></h1>
            <span className='flex gap-x-2'> 
            <button className='px-4 border border-black text-2xl'>S</button> 
            <button className='px-4 bg-[#000000] text-[#FFFFFF] text-2xl'>M</button>
            <button className='px-4 border border-black text-2xl'>L</button> 
            <button className='px-4 border border-black text-2xl'>XL</button> 
            </span>
        </div>
        <div>
            <h1>Quantity </h1>
            <span className='flex justify-center items-center gap-x-8 px-4 py-1 bg-[#F2F2F2] w-[120px]'> 
            <button className=' text-2xl'>-</button> 
            <button className='text-2xl'>1</button>
            <button className=' text-2xl'>+</button> 
            </span>
        </div>
        <div className='flex space-x-2'>
            <button className='bg-[#000000] text-[#FFFFFF] px-30 py-1 rounded-xl'>Add to cart -$16.95</button>
            <span className='h-10 w-10 border rounded-sm border-[#EBEBEB] flex justify-center items-center'>
            <Trash2 />
            </span>
            <span className='h-10 w-10 border rounded-sm border-[#EBEBEB] flex justify-center items-center'>
            <FaCheck />
            </span>
        </div>
        <div>
            <button className='w-[70%] h-10 flex gap-x-1 justify-center items-center  rounded-full bg-[#FFB53F]'>Buy with <img src="/assets/images/paypal.png" alt="" className='' /></button>
            <h1 className='text-[#868686] ml-40'>More payment options</h1>
        </div>
        <div>
            <div className='flex space-x-10'>
            <div className='flex items-center gap-x-2'>
                <div className='flex flex-col justify-center '>
                  <span className='h-3 w-3 bg-[#C21D2C] block rounded-full'></span>
                    <div className='flex'>
                    <span className='h-3 w-3 bg-[#651DC2] block rounded-full'></span>
                    <span className='h-3 w-3 bg-[#FED200] block rounded-full'></span>
                    </div>
                </div>
                    <span className='font-semibold'>Compare color</span>
            </div>
            <div className='flex items-center gap-x-1'>
                <span><FaQuestion/></span>
                <span className='font-semibold'>Ask a question</span>
            </div>
            <div className='flex items-center gap-x-2'>
                <span><FaTruck/></span>
                <span className='font-semibold'>Delivery & Return</span>
            </div>
            <div className='flex items-center gap-x-2'>
                <span> <FaShare/></span>
                <span className='font-semibold'>Share</span>

            </div>
            </div>
            <div className=' flex mt-5 space-x-2'> 
                <div className='flex flex-col justify-center items-center border border-[black] p-4'>
                <span><img src="/assets/images/Vector2.png" alt="" /></span>
                <span>Estimate delivery times:12-26</span>
                <span>days(International),3-6 days (United</span>
                <span>States).</span>
                </div>
                <div className='flex flex-col justify-center items-center border border-[black] px-2 '>
                <span><img src="/assets/images/Vector.png" alt="" /></span>
                <span>Return within 30 days of purchase.</span>
                <span>Duties & taxes are non-refundable.</span>
                </div>
            </div>
            <div className='mt-5 flex gap-2'>
                <div className='flex items-center gap-x-2'>
                   <span> <img src="/assets/images/Vector3.png" alt="" /></span>
                   <span className='font-semibold'>Guarantee Safe <br />
                   Checkout</span>
                </div>
                <div className='flex gap-x-2'>
                    <img src="/assets/images/visa.png" alt="" className='' />
                    <img src="/assets/images/paypal1.png" alt="" className='' />
                    <img src="/assets/images/master.png" alt="" className='' />
                    <img src="/assets/images/amex.png" alt="" className='' />
                    <img src="/assets/images/crypto.png" alt="" className='' />
                </div>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProductDetailSection
