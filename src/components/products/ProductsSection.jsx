import { Heart, MoveRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import React from "react";
import { data } from "../data/utilites";

const ProductsSection = ({
  component,
  head,
  head2,
  head3,
  tophead,
  midhead,
}) => {
  return (
    <div className="bg-[#FCFCFC] py-10 px-4 sm:px-8  flex">
      <div>{component}</div>
      <div className="w-full flex flex-col justify-center">
        {/* Header */}
        <div className="w-full flex justify-between items-center flex-wrap gap-y-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-[#FFB53F]">
              {head}
            </h1>
            <p className="text-sm text-[#555]">{head2}</p>
          </div>
          <Link
            to=""
            className="flex items-center text-[#236EDE] gap-1 font-medium"
          >
            {head3}
          </Link>
        </div>
        <div className="w-full text-center text-2xl font-semibold">
          {tophead}
        </div>
        
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:px-15 px-0 md:grid-cols-3 gap-6">
          {data.map((item, index) => (
            <React.Fragment key={index}>
              {index === 3 && (
                <div className="col-span-full">
                  <h2 className="text-2xl font-bold text-center">
                  {midhead}
                  </h2>
                </div>
              )}
              <Link to="/detail" className="w-full">
                <div className="w-full rounded-2xl overflow-hidden bg-white  shadow-xs transition">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-60 object-cover hover:scale-105 duration-300"
                  />
                  <div className="p-4 flex justify-between items-start">
                    <div>
                      <h2 className="text-lg font-medium">{item.name}</h2>
                      <p className="text-[#236EDE] text-base font-semibold">
                        {item.price}
                      </p>
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
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
