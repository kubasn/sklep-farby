import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartItems from "../cartItems";
import { collection, doc, getDocs, query, where } from "@firebase/firestore";
import db from "../firebase";

const initialState = {
  cartItems: [],
  amount: 0,
  price: 0,
  isLoading: true,
};

export const getOrders = createAsyncThunk("orders/getOrders", (name) => {
  let itemsArray = [];
  const q = query(collection(db, "orders"), where("name", "==", name));
  //
  const querySnapshot = getDocs(q)
    .then((res) => {
      res.forEach((doc) => {
        let item = doc.data();
        item.id = doc.id;
        itemsArray.push(item);
      });
      return { itemsArray };
    })
    .catch((err) => console.log(err));
  return querySnapshot;
});

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
    addItem: (state, action) => {
      const item = action.payload;
      state.cartItems.push(item);
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
  extraReducers: {
    [getOrders.pending]: (state) => {
      state.isLoading = true;
    },
    [getOrders.fulfilled]: (state, action) => {
      console.log(action);
      state.items = action.payload.itemsArray;
      state.isLoading = false;
    },
    [getOrders.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  clearCart,
  removeItem,
  addItem,
  increase,
  decrease,
  calcTotals,
} = cartSlice.actions;

export default cartSlice.reducer;
