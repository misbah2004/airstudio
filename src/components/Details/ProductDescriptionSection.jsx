import React from "react";

const ProductDescriptionSection = () => {
  return (
    <div>
      <div className="p-4 flex flex-col  space-y-4">
        <div className="bg-[#EBEBEB] h-10 p-2 shadow-sm ">
          <ul className="flex items-center cursor-pointer gap-4 font-semibold">
            <li className="hover:border-b-2 hover:border-black">Description</li>
            <li className="hover:border-b-2 hover:border-black">Review</li>
            <li className="hover:border-b-2 hover:border-black">Shipping</li>
            <li className="hover:border-b-2 hover:border-black">
              Return Policy
            </li>
          </ul>
        </div>
        <div className="">
            <p className="text-[#000000]">
            Button-up shirt sleeves and a relaxed silhouette. It’s tailored with drapey, crinkle-texture fabric that’s made from LENZING™ ECOVERO™ Viscose — responsibly sourced wood-based fibres produced through a
            process that reduces impact on forests, biodiversity and water supply.
            </p>
        </div>
        <div className="flex space-x-10">
            <div className=" space-y-2">
                <h1 className="font-semibold">Features</h1>
                <li className="text-[#909090]">Front button placket</li>
                <li className="text-[#909090]">Adjustable sleeve tabs</li>
                <li className="text-[#909090]">Babaton embroidered crest at placket and hem</li>

                <div className="flex flex-col space-y-2">
                <h1 className="font-semibold">Materials Care</h1>
                <li className="text-[#909090]">Content: 100% LENZING™ ECOVERO™ Viscose</li>
                <li className="text-[#909090]">Care: Hand wash</li>
                <li className="text-[#909090]">Imported</li>
            </div>
            </div>
            <div className=" flex flex-col gap-y-3">
                <h1 className="font-bold">Materials Care</h1>
                <div className="flex items-center gap-x-2 ">
                    <span className="h-8 w-8 border border-black flex items-center justify-center rounded-full"><img src="/assets/images/description1.png" alt="" /></span>
                    <span className="text-[#909090]">Machine wash max. 30ºC. Short spin.</span>
                </div>
                <div className="flex items-center gap-x-2 ">
                    <span className="h-8 w-8 border border-black flex items-center justify-center rounded-full"><img src="/assets/images/description2.png" alt="" /></span>
                    <span className="text-[#909090]">Iron maximum 110ºC.</span>
                </div>
                <div className="flex items-center gap-x-2 ">
                    <span className="h-8 w-8 border border-black flex items-center justify-center rounded-full"><img src="/assets/images/description3.png" alt="" /></span>
                    <span className="text-[#909090]">Do not bleach/bleach.</span>
                </div>
                <div className="flex items-center gap-x-2 ">
                    <span className="h-8 w-8 border border-black flex items-center justify-center rounded-full"><img src="/assets/images/description4.png" alt="" /></span>
                    <span className="text-[#909090]">Do not dry clean.</span>
                </div>
                <div className="flex items-center gap-x-2 ">
                    <span className="h-8 w-8 border border-black flex items-center justify-center rounded-full"><img src="/assets/images/description5.png" alt="" /></span>
                    <span className="text-[#909090]">Tumble dry, medium hear.</span>
                </div>
            </div>
           
        </div>
      </div>
    </div>
  );
};

export default ProductDescriptionSection;
