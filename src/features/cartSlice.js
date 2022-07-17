import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 0,
  price: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      //state.cartItems = [];
      return { ...state, cartItems: [] };
    },
    removeItem: (state, action) => {
      const id = action.payload;
      state.cartItems = state.cartItems.filter((item) => id !== item.id);
      console.log(action);
    },

    increase: (state, { payload }) => {
      const id = payload;
      const cartItem = state.cartItems.find((item) => item.id === id);
      cartItem.amount++;
    },
    decrease: (state, { payload }) => {
      const id = payload;
      const cartItem = state.cartItems.find((item) => item.id === id);
      cartItem.amount--;
    },
    calcTotals: (state) => {
      let amount = 0;
      let price = 0;

      state.cartItems.forEach((item) => {
        amount += item.amount;
        price += item.price * item.amount;
      });
      state.price = price;
      state.amount = amount;
    },
  },
});

export const { clearCart, removeItem, increase, decrease, calcTotals } =
  cartSlice.actions;

export default cartSlice.reducer;
