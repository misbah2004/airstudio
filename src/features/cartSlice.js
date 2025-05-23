import { createSlice } from "@reduxjs/toolkit";
import { data } from "../components/data/utilites";

const initialState = {
  cart: [],
  items: data,
  totalQuantity: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddToCart: (state, action) => {
      const findIndex = state.cart.findIndex((item) => item.id === action.payload.id);
      if (findIndex >= 0) {
        state.cart[findIndex].quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    IncrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item) item.quantity += 1;
    },
    DecrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
    },

    DeleteFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },

    getCartTotal: (state) => {
      let { totalQuantity, totalPrice } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const priceString = cartItem.price || "0";
          const price = parseFloat(priceString.replace(/[^0-9.]/g, "")) || 0;
          const quantity = parseInt(cartItem.quantity) || 0;
          const itemTotal = price * quantity;
    
          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuantity += quantity;
          return cartTotal;
        },
        {
          totalPrice: 0,
          totalQuantity: 0,
        }
      );
    
      state.totalPrice = parseInt(totalPrice.toFixed(2));
      state.totalQuantity = totalQuantity;
    },    
  },
});

export const {
  AddToCart,
  IncrementQuantity,
  DecrementQuantity,
  DeleteFromCart,
  getCartTotal,
} = cartSlice.actions;

export default cartSlice.reducer;
