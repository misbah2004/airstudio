import { Heart, MoveRight } from "lucide-react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import React, { useState } from "react";
import { data } from "../data/utilites";
import { useSelector, useDispatch } from "react-redux";
import { AddToCart } from "../../features/cartSlice";
import toast from "react-hot-toast";

const ProductsSection = ({
  component,
  head,
  head2,
  head3,
  tophead,
  midhead,
}) => {
  const [like, setLike] = useState({});
  const toggleLike = (id) => {
    setLike((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const productData = data;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.allCart.items);

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

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              {index === 3 && (
                <div className="col-span-full">
                  <h2 className="text-2xl font-bold text-center">{midhead}</h2>
                </div>
              )}
              <div className="w-full rounded-2xl overflow-hidden bg-white object-contain shadow-xs transition">
                <Link
                  to={`/detail/${item.id}`}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-60 object-cover hover:scale-105 duration-300"
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
                      {item.price}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div
                      className="p-1 bg-[#F5F5F5] rounded-full cursor-pointer"
                      onClick={(e) => {
                        toggleLike(item.id);
                      }}
                    >
                      <Heart
                        className={`text-black ${
                          like[item.id] ? "text-white" : ""
                        }`}
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
