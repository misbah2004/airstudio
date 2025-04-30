import React from "react";

const ProductDescriptionSection = () => {
  return (
    <div className="p-5">
      <div className=" p-5 flex flex-col border border-gray-200 space-y-4">
        {/* Tabs */}
        <div className="bg-[#EBEBEB] shadow-sm">
          <ul className="flex p-2  gap-4 font-semibold text-sm sm:text-base cursor-pointer">
            <li className="hover:border-b-2 hover:border-black">Description</li>
            <li className="hover:border-b-2 hover:border-black">Review</li>
            <li className="hover:border-b-2 hover:border-black">Shipping</li>
            <li className="hover:border-b-2 hover:border-black">Return Policy</li>
          </ul>
        </div>

        {/* Description Text */}
        <div>
          <p className="text-[#000000] text-sm sm:text-base">
            Button-up shirt sleeves and a relaxed silhouette. It’s tailored with
            drapey, crinkle-texture fabric that’s made from LENZING™ ECOVERO™
            Viscose — responsibly sourced wood-based fibres produced through a
            process that reduces impact on forests, biodiversity and water supply.
          </p>
        </div>

        {/* Details and Care Section */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Features and Material Info */}
          <div className="w-full lg:w-1/3 space-y-4">
            <div className="space-y-2">
              <h1 className="font-semibold">Features</h1>
              <ul className="list-disc list-inside text-[#909090] text-sm sm:text-base">
                <li>Front button placket</li>
                <li>Adjustable sleeve tabs</li>
                <li>Babaton embroidered crest at placket and hem</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h1 className="font-semibold">Materials Care</h1>
              <ul className="list-disc list-inside text-[#909090] text-sm sm:text-base">
                <li>Content: 100% LENZING™ ECOVERO™ Viscose</li>
                <li>Care: Hand wash</li>
                <li>Imported</li>
              </ul>
            </div>
          </div>

          {/* Care Instructions with Icons */}
          <div className="w-full lg:w-1/2 flex flex-col gap-y-3">
            <h1 className="font-bold">Materials Care</h1>

            {[
              { img: "description1.png", text: "Machine wash max. 30ºC. Short spin." },
              { img: "description2.png", text: "Iron maximum 110ºC." },
              { img: "description3.png", text: "Do not bleach/bleach." },
              { img: "description4.png", text: "Do not dry clean." },
              { img: "description5.png", text: "Tumble dry, medium heat." },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-x-2">
                <span className="h-8 w-8 border border-black flex items-center justify-center rounded-full">
                  <img
                    src={`/assets/images/${item.img}`}
                    alt=""
                    className="h-5 w-5 object-contain"
                  />
                </span>
                <span className="text-[#909090] text-sm sm:text-base">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescriptionSection;
