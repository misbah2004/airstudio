import React from 'react'
import { FaChevronUp } from 'react-icons/fa'

const categories = ["All","Fashion" , "Men" , "Women" , "Denim" , "Dress"];
const ProductSideSection = ({setSelectedCategory, selectedCategory}) => {
    
  return (
    <div className='hidden md:block w-xs mt-8'>
        <div className='p-4'>
            <h1 className='flex items-center gap-x-30'>Product Categories <span><FaChevronUp/></span></h1>
            <div className='mt-5 flex flex-col space-y-4'>
                <ul className=''>
                    {categories.map((items , index) => (
                        <li
                        key={index}
                         onClick={() => setSelectedCategory(items)}
                         className={`hover:text-gray-300 duration-300 cursor-pointer ${selectedCategory === items ? "font-bold text-[#FFB53F]" : ""}`}>
                            {items}
                            </li>
                    ))}
                </ul>
            </div>
            <span className='block h-[1px] bg-gray-300 w-full mt-20'></span>

        </div>
      
    </div>
  )
}

export default ProductSideSection
