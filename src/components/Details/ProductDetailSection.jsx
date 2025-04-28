import { RotateCcw, Trash2 } from 'lucide-react'
import React from 'react'
import {
  FaCheck,
  FaQuestion,
  FaShare,
  FaShip,
  FaStopwatch,
  FaTruck,
} from 'react-icons/fa'

const ProductDetailSection = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row lg:space-x-4 mt-5 p-5">

      <div className="flex flex-col lg:flex-row">

        <div className="flex space-y-2 lg:flex-col lg:space-y-4 overflow-y-auto lg:overflow-y-visible lg:overflow-x-visible lg:w-20 px-2">
          {[
            'detail1.jpeg',
            'detail2.jpeg',
            'detail3.jpeg',
            'detail4.jpeg',
            'detail5.jpeg',
            'detail6.jpeg',
          ].map((img, i) => (
            <img
              key={i}
              src={`/assets/images/${img}`}
              alt=""
              className="w-16 h-16 lg:w-full lg:h-auto object-cover rounded-md"
            />
          ))}
        </div>


        <div className="mt-4 lg:mt-0">
          <img
            src="/assets/images/detail.png"
            alt=""
            className="w-full lg:w-[550px] h-auto lg:h-[570px] object-cover rounded-2xl"
          />
        </div>
      </div>


      <div className="w-full lg:w-2/5 flex flex-col space-y-4 mt-6 lg:mt-0">
        <h1 className="font-albert text-2xl">Ribbed Tank Top</h1>


        <div className="flex flex-wrap items-center gap-2">
          <button className="rounded-sm p-1 border border-black">
            Best seller
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#FFB53F"
            className="mr-1"
          >
            <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
          </svg>
          <p className="text-sm">Selling fast! 56 people have this in their carts.</p>
        </div>

        {/* price */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-2xl text-[#FFB53F]">$16.95</span>
          <span className="text-2xl line-through">$10.00</span>
          <button className="bg-[#FFB53F] text-white rounded-full px-2 py-1 text-sm">
            20% OFF
          </button>
        </div>

        <div>
          <span className="px-2 py-1 bg-black text-white text-sm rounded">20</span>{' '}
          <span className="font-semibold text-sm">People are viewing this right now</span>
        </div>

        {/* countdown */}
        <div className="border border-[#FFB53F] p-4 flex flex-col items-center">
          <span className="flex items-center gap-1 text-sm">
            <FaStopwatch /> HURRY UP! SALE ENDS IN:
          </span>
          <span className="text-2xl text-[#FFB53F] mt-1">
            72 Days : 1 Hours : 15 Mins : 10 Secs
          </span>
        </div>

        {/* color */}
        <div>
          <h1 className="flex items-center gap-1">
            Color: <span className="font-semibold">Beige</span>
          </h1>
          <div className="flex flex-wrap items-center gap-2 mt-2">
            {[6, 5, 4, 3].map((size, i) => (
              <span
                key={i}
                className={`block rounded-full border border-black ${
                  i === 0 ? 'w-10 h-10' : i === 1 ? 'w-8 h-8' : i === 2 ? 'w-6 h-6' : 'w-4 h-4'
                } ${i > 0 && 'opacity-60'}`}
              />
            ))}
          </div>
        </div>

        <div>
          <h1>
            Size: <span className="font-semibold">M</span>
          </h1>
          <div className="flex flex-wrap gap-2 mt-2">
            {['S', 'M', 'L', 'XL'].map((s) => (
              <button
                key={s}
                className={`px-4 py-1 text-2xl border ${
                  s === 'M' ? 'bg-black text-white' : 'border-black'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* quantity */}
        <div>
          <h1>Quantity</h1>
          <div className="flex items-center justify-between w-full max-w-[120px] bg-[#F2F2F2] px-3 py-1 mt-1">
            <button className="text-2xl">-</button>
            <span className="text-2xl">1</span>
            <button className="text-2xl">+</button>
          </div>
        </div>


        <div className="flex flex-wrap items-center gap-2">
          <button className="bg-black w-[400px] text-white px-6 py-2 rounded-lg">
            Add to cart - $16.95
          </button>
          <Trash2 className="w-10 h-10 p-2 border border-[#EBEBEB] rounded" />
          <FaCheck className="w-10 h-10 p-2 border border-[#EBEBEB] rounded" />
        </div>


        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <button className="flex w-full items-center justify-center gap-2 bg-[#FFB53F] text-white rounded-full px-4 py-2 ">
            Buy with <img src="/assets/images/paypal.png" alt="PayPal" className="h-6" />
          </button>
        </div>
          <p className="text-[#868686] sm:ml-40 text-center text-sm">More payment options</p>

        {/* info & share */}
        <div className="space-y-4">
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <div className="flex flex-col items-center">
                <span className="w-3 h-3 bg-[#C21D2C] rounded-full block" />
                <div className="flex -space-x-1">
                  <span className="w-3 h-3 bg-[#651DC2] rounded-full block" />
                  <span className="w-3 h-3 bg-[#FED200] rounded-full block" />
                </div>
              </div>
              <span className="font-semibold">Compare color</span>
            </div>

            <div className="flex items-center gap-2">
              <FaQuestion />
              <span className="font-semibold">Ask a question</span>
            </div>

            <div className="flex items-center gap-2">
              <FaTruck />
              <span className="font-semibold">Delivery & Return</span>
            </div>

            <div className="flex items-center gap-2">
              <FaShare />
              <span className="font-semibold">Share</span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-2">
            <div className="flex-1 border border-[#EBEBEB] p-4 flex flex-col items-center text-center">
              <img src="/assets/images/Vector2.png" alt="" className="h-6 mb-2" />
              <p className="text-sm">
                Estimate delivery times: 12–26 days (International), 3–6 days
                (United States).
              </p>
            </div>
            <div className="flex-1 border p-4 flex flex-col border-[#EBEBEB] items-center text-center">
              <img src="/assets/images/Vector.png" alt="" className="h-6 mb-2" />
              <p className="text-sm">
                Return within 30 days of purchase. Duties & taxes are
                non-refundable.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-4">
            <div className="flex items-center gap-2">
              <img src="/assets/images/Vector3.png" alt="" className="h-6" />
              <span className="font-semibold text-center">
                Guarantee Safe Checkout
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {[
                'visa.png',
                'paypal1.png',
                'master.png',
                'amex.png',
                'crypto.png',
              ].map((logo, i) => (
                <img
                  key={i}
                  src={`/assets/images/${logo}`}
                  alt=""
                  className="h-6"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailSection
