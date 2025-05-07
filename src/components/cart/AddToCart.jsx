import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DecrementQuantity,
  IncrementQuantity,
  DeleteFromCart,
  getCartTotal,
} from "../../features/cartSlice";
import { Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

const AddToCart = () => {
  const dispatch = useDispatch();
  dispatch(getCartTotal());

  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allCart
  );
  const cartCount = cart.length;

  return (
    <section className="min-h-screen bg-white mt-10 flex justify-center items-center">
      {cartCount <= 0 && (
        <div className="w-full h-screen flex flex-col justify-center items-center text-4xl">
          <h2>Your Cart Is EMPTY</h2>
          <Link to='/'>
          <button className="bg-gray-400 text-sm px-2 py-2 rounded-sm">Continue Shoping</button>
          </Link>
        </div>
      )}
      {cartCount > 0 && (
        <div className="container mx-auto">
          <div className="flex justify-center items-center">
            <div className="w-full bg-white rounded-2xl shadow-md overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-2/3 p-6">
                  <div className="flex justify-between items-center mb-5">
                    <h1 className="text-2xl font-bold">Shopping Cart</h1>
                    <h6 className="text-gray-500">{cartCount} items</h6>
                  </div>
                  <hr className="my-4" />
                  {cart.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col md:flex-row items-center justify-between mb-6"
                    >
                      <div className="flex items-center gap-4 w-full md:w-auto">
                        <img
                          src={item.img}
                          className="w-24 h-24 rounded-md object-cover"
                          alt={item.title}
                        />
                        <div>
                          <h6 className="text-sm text-gray-500">
                            {item.category}
                          </h6>
                          <h6 className="text-md">{item.name}</h6>
                          <div
                            className="md:mt-0 text-red-500 hover:text-red-800 cursor-pointer"
                            onClick={() => dispatch(DeleteFromCart(item.id))}
                            title="Remove item"
                          >
                            <i className="text-lg">
                              <Trash2 className="text-gray-400 mt-4" />
                            </i>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center mt-4 md:mt-0">
                        <button
                          onClick={() => {
                            if (item.quantity > 0) {
                              dispatch(DecrementQuantity(item.id));
                            }
                          }}
                          className="text-xl px-3 text-gray-600 hover:text-black"
                        >
                          −
                        </button>
                        <input
                          type="number"
                          value={item.quantity}
                          min={0}
                          className="w-14 text-center border rounded mx-2"
                          readOnly
                        />
                        <button
                          onClick={() => dispatch(IncrementQuantity(item.id))}
                          className="text-xl px-3 text-gray-600 hover:text-black"
                        >
                          +
                        </button>
                      </div>
                      <div className="mt-4 md:mt-0">
                        <h6 className="text-md font-medium">{item.price}</h6>
                      </div>
                    </div>
                  ))}
                  <div className="pt-5">
                    <h6 className="text-sm">
                      <a href="/" className="text-gray-700 hover:text-black">
                        <i className="fas fa-long-arrow-alt-left mr-2"></i>Back
                        to shop
                      </a>
                    </h6>
                  </div>
                </div>
                <div className="lg:w-1/3 bg-gray-100 p-6">
                  <h3 className="text-xl font-bold mb-5">Summary</h3>
                  <div className="flex justify-between mb-4">
                    <p className="text-sm">Items</p>
                    <p className="text-sm">{totalQuantity}</p>
                  </div>
                  <hr className="my-4" />
                  <div className="flex justify-between text-lg font-semibold mb-4">
                    <p>Total</p>
                    <p>{totalPrice}</p>
                  </div>
                  <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AddToCart;
