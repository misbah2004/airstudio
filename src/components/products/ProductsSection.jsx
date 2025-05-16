import { Heart, MoveRight } from "lucide-react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { data } from "../data/utilites";
import { useSelector, useDispatch } from "react-redux";
import { AddToCart } from "../../features/cartSlice";
import toast from "react-hot-toast";


const ProductsSection = ({component,head,head2,head3,tophead,midhead,selectedCategory}) => {
  const [like, setLike] = useState({});
  const toggleLike = (id) => {
    setLike((prev) => ({...prev, [id]: !prev[id] }));
  };

  const dispatch = useDispatch();
  const items = useSelector((state) => state.allCart.items);

  const filteredItems = 
  selectedCategory && selectedCategory !== "All"
  ?items.filter(item =>  item.category === selectedCategory)
  :items;
  
  return (
    <div className="bg-[#FCFCFC] py-10 px-4 sm:px-8 flex">
      <div>{component}</div>
      <div className="w-full px-6 flex flex-col justify-center">
        <div className="w-full flex justify-between items-center flex-wrap gap-y-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-[#FFB53F] ">
              {head}
            </h1>
            <p className="text-sm text-[#555]">{head2}</p>
          </div>
          <p className="flex items-center text-[#236EDE] gap-1 font-medium">
            {head3}
          </p>
        </div>

        <div className="w-full text-center text-2xl font-semibold">
          {tophead}
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <React.Fragment key={index}>
              {index === 3 && (
                <div className="col-span-full">
                  <h2 className="text-2xl font-bold text-center">{midhead}</h2>
                </div>
              )}
              <div className="w-full rounded-2xl overflow-hidden shadow-xs transition">
                <Link
                  to={`/detail/${item.id}`}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-60 object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </Link>

                <div className="p-4 flex justify-between items-start">
                  <div>
                    <Link
                      to={`/detail/${item.id}`}
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      <h2 className="text-lg font-medium">{item.name}</h2>
                    </Link>
                    <p className="text-[#236EDE] text-base font-semibold">
                      {item.price.startsWith("$")
                        ? item.price
                        : `$${item.price}`}
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <div
                      className="p-1 bg-[#F5F5F5] rounded-full cursor-pointer"
                      onClick={() => toggleLike(item.id)}
                      title="Add to Wishlist"
                    >
                      <Heart
                        className={`${
                          like[item.id] ? "text-yellow-400" : "text-gray-400"
                        } transition duration-200`}
                      />
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        dispatch(AddToCart(item));
                        toast.success(`${item.name} added to cart!`, {
                          duration: 2000,
                          position: "top-center",
                        });
                      }}
                      className="bg-[#FFB53F] text-sm text-white px-4 py-1 rounded-full"
                      title="Add to Cart"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
