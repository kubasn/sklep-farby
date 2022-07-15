import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import cartReducer from "../features/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
