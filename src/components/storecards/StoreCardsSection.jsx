import React from "react";
import { storeCardSection } from "../data/utilites";
import { Star } from "lucide-react";

const StoreCardsSection = () => {
  return (
    <>
        {storeCardSection.map((items) => (
          <div className="w-sm bg-white shadow-lg rounded-xl flex flex-col p-4">
            <img src={items.img} alt="" className="object-cover h-[240px]" />
            <h1 className="text-center font-semibold">{items.heading}</h1>
            <span className="flex justify-center text-[#FFA900] flex-nowrap">
              <Star />
              <Star />
              <Star />
              <span className="flex text-[#5F5D5D] flex-nowrap">
                <Star />
                <Star />
              </span>
            </span>
          </div>
        ))}
    </>
  );
};

export default StoreCardsSection;
