import { Heart, MoveRight, Slice } from 'lucide-react'
import { Link } from 'react-router-dom'
import React from 'react'

const data = [
    {
        img:"/assets/images/card1.jpeg",
        name:"Minimal Dress",
        price:"130$",

    },
    {
        img:"/assets/images/card1.jpeg",
        name:"Minimal Dress",
        price:"130$",

    },
    {
        img:"/assets/images/card1.jpeg",
        name:"Minimal Dress",
        price:"130$",

    },
    {
        img:"/assets/images/card1.jpeg",
        name:"Minimal Dress",
        price:"130$",

    },
    {
        img:"/assets/images/card1.jpeg",
        name:"Minimal Dress",
        price:"130$",

    },
    {
        img:"/assets/images/card1.jpeg",
        name:"Minimal Dress",
        price:"130$",

    }
]
const ProductsSection = () => {
  return (
    <div>
      <div className='min-h-screen w-full flex flex-col justify-center bg-[#FCFCFC] p-5 px-10'>
        <div className='w-full'>
            <div className='w-full h-10 flex justify-between'>
                <span><h1 className='text-3xl text-[#FFB53F]'>Featured Products<br /></h1> <span className='text-sm'>Discover our latest collection</span></span>
                <h1 className='flex gap-0.5'>View All <MoveRight /></h1>
            </div>
            <div className='w-full mt-10 flex flex-wrap justify-center items-center'>
                {data.map((item)=>(
                <Link to="/detail"><div className=' w-[400px] h-[400px] p-2'>
                    <div key={item.id} className=''>
                        <img src={item.img} alt="" className='rounded-t-2xl object' />
                        <div className='bg-[#FFFFFF] shadow-md w-full flex justify-between p-4 rounded-b-2xl'>
                            <div className='bg-white flex flex-col space-y-1.5'>
                                <h1>{item.name}</h1>
                                <span className='text-[#236EDE] text-lg font-semibold'>{item.price}</span>
                            </div>
                            <div className='bg-white '>
                                <div className='bg-[#F5F5F5] rounded-full flex justify-center items-center py-0.5'>
                                <Heart />
                                </div>
                                <button className='bg-[#FFB53F] mt-2 px-3 rounded-full' >Add to Cart</button>
                            </div>
                        </div>
                    </div> 
                </div></Link>))}
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsSection
