import React from "react";
import { ArrowRightIcon, Star } from "lucide-react";

const HomeHeroSection = () => {
  return (
    <div className="grid grid-cols-12 gap-2 md:px-10 lg:px-0 py-12 bg-white sm:py-10 mt-10">
      <div className="col-span-2  hidden lg:block ">
        <img
          src="/assets/images/bannerheadphone.jpeg"
          className="relative left-40 mb-10 rounded-[50%] h-15 w-20    "
          alt=""
        />

        <img
          src="/assets/images/owal.png"
          className=" relative bottom-25   h-70 max-w-max "
          alt=""
        />
      </div>

      <div className="col-span-12 relative lg:col-span-8 w-full">
        <h1 className="text-center font-semibold lg:text-4xl sm: text-xl">
          Empowering Businesses,
        </h1>

        <h1 className="text-center text-amber-500 lg:text-5xl  sm: text-3xl font-medium ">
          Elevating Commerce
        </h1>
        <p className="text-center mt-7  text-gray-500 sm:text-md tracking-wide lg:text-2xl">
          A comprehensive e-commerce platform tailored for small and
          medium-sized <br /> businesses in Saudi Arabia, offering seamless solutions for fashion and <br />  digital products.{" "}
        </p>

        <div className="sm:col-end-3 hidden lg:block absolute">
          <img
            src="/public/assets/images/shop/hand.png"
            className="relative h-20"
            alt=""
          />
        </div>
        <div>
          <span className="flex flex-col sm:flex-row gap-6 mt-9 justify-center items-center">
            <button className="bg-blue-600 rounded-full py-3 px-18 lg:px-6 text-white font-semibold lg:w-45 sm:w-60 ">
              Shop Now!
            </button>
            <button className="border border-gray-400 rounded-full py-2 px-6 flex items-center justify-center text-lg w-60 sm:w-44">
              See More
              <ArrowRightIcon size={22} className="ml-2" />
            </button>
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center mt-5 gap-4">
          <div className="flex items-center">
            <span className="h-5 w-5 block bg-[#FFB703] rounded-full "></span>
            <span className="h-5 w-5 block bg-[#FFB703] rounded-full "></span>
            <span className="h-5 w-5 block bg-[#FFB703] rounded-full "></span>
            <span className="h-5 w-5 block bg-[#FFB703] rounded-full "></span>
          </div>

          <div className="flex items-center gap-1">
            <h3 className="text-lg text-gray-500">4.9</h3>
            <Star className="h-4 w-4 text-orange-300 fill-current" />
            <Star className="h-4 w-4 text-orange-300 fill-current" />
            <Star className="h-4 w-4 text-orange-300 fill-current" />
            <Star className="h-4 w-4 text-orange-300 fill-current" />
          </div>

          <p className="text-sm text-gray-500">(1.9k Reviews)</p>
        </div>
      </div>

      <div className=" w-full col-span-2 hidden lg:block">
        <img
          src="/assets/images/bannergirl2.png"
          className="mt-[-35%] w-80 h-60"
          alt=""
        />
        <img
          src="/assets/images/Apple.png"
          className="h-20 w-20 mt-[-30px] rounded-full mr-12"
          alt=""
        />
      </div>
    </div>
  );
};

export default HomeHeroSection;
