import { Heart, MoveRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import React from 'react'

const data = [
  {
    img: "/assets/images/card1.jpeg",
    name: "Minimal Dress",
    price: "130$",
  },
  {
    img: "/assets/images/card1.jpeg",
    name: "Minimal Dress",
    price: "130$",
  },
  {
    img: "/assets/images/card1.jpeg",
    name: "Minimal Dress",
    price: "130$",
  },
  {
    img: "/assets/images/card1.jpeg",
    name: "Minimal Dress",
    price: "130$",
  },
  {
    img: "/assets/images/card1.jpeg",
    name: "Minimal Dress",
    price: "130$",
  },
  {
    img: "/assets/images/card1.jpeg",
    name: "Minimal Dress",
    price: "130$",
  },
  {
    img: "/assets/images/card1.jpeg",
    name: "Minimal Dress",
    price: "130$",
  },
  {
    img: "/assets/images/card1.jpeg",
    name: "Minimal Dress",
    price: "130$",
  }
]

const ProductsSection = () => {
  return (
    <div className="bg-[#FCFCFC] py-10 px-4 sm:px-8 lg:px-16">
      <div className="w-full flex flex-col justify-center">
        {/* Header */}
        <div className="w-full flex justify-between items-center flex-wrap gap-y-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-[#FFB53F]">Featured Products</h1>
            <p className="text-sm text-[#555]">Discover our latest collection</p>
          </div>
          <Link to="/all-products" className="flex items-center text-[#236EDE] gap-1 font-medium">
            View All <MoveRight />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
          {data.map((item, index) => (
            <Link key={index} to="/detail" className="w-full max-w-xs">
              <div className="rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-lg transition">
                <img src={item.img} alt={item.name} className="w-full h-60 object-cover" />
                <div className="p-4 flex justify-between items-start">
                  <div>
                    <h2 className="text-lg font-medium">{item.name}</h2>
                    <p className="text-[#236EDE] text-base font-semibold">{item.price}</p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="p-1 bg-[#F5F5F5] rounded-full">
                      <Heart className="text-[#333]" />
                    </div>
                    <button className="bg-[#FFB53F] text-sm text-white px-4 py-1 rounded-full">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductsSection;
