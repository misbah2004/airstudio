import { MoveRight } from 'lucide-react';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const HomeHeroSection = () => {
  return (
    <div className="min-h-[450px] p-4 flex flex-col md:flex-row justify-center items-center gap-6">
      {/* Left Images */}
      <div className="flex md:flex-col items-center gap-3">
        <img
          src="/assets/images/bannerheadphone.jpeg"
          alt=""
          className="h-28 md:h-36 rounded-[40%] object-cover"
        />
        <img
          src="/assets/images/bannergirl.jpeg"
          alt=""
          className="h-40 md:h-52 rounded-full rotate-6 object-cover"
        />
      </div>

      {/* Center Content */}
      <div className="flex flex-col justify-center items-center text-center max-w-2xl px-4">
        <h3 className="text-black text-2xl md:text-3xl font-semibold">
          Empowering Businesses,
        </h3>
        <h1 className="text-[#FFB53F] text-4xl md:text-5xl font-semibold">
          Elevating Commerce
        </h1>
        <p className="text-[#858585] text-base md:text-lg mt-2">
          A comprehensive e-commerce platform tailored for small and medium-sized
          businesses in Saudi Arabia, offering seamless solutions for fashion and
          digital products.
        </p>

        {/* Buttons */}
        <div className="mt-5 flex flex-col sm:flex-row gap-3">
          <button className="bg-[#236EDE] text-white px-8 py-2 rounded-xl">
            Shop Now
          </button>
          <button className="px-6 py-2 border border-[#858585] rounded-xl flex items-center gap-2">
            See More <MoveRight />
          </button>
        </div>

        {/* Ratings */}
        <div className="mt-4 flex flex-col items-center">
          <div className="flex gap-1">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="h-5 w-5 bg-[#FFB703] rounded-full block" />
            ))}
          </div>
          <div className="flex items-center gap-2 mt-1 text-sm text-[#858585]">
            <span className="text-xl text-[#858585]">4.9</span>
            <span className="flex text-[#FFB703]">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </span>
            <span>(1.9k Reviews)</span>
          </div>
        </div>
      </div>

      {/* Right Images */}
      <div className="flex flex-col items-center gap-2">
        <img
          src="/assets/images/bannergirl2.png"
          alt=""
          className="h-40 md:h-52 object-cover"
        />
        <img
          src="/assets/images/Apple.png"
          alt=""
          className="h-14 md:h-20 -mt-6 ml-3 object-cover"
        />
      </div>
    </div>
  );
};

export default HomeHeroSection;
