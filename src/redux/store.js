import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import cartReducer from "../features/cartSlice";
import modalReducer from "../features/modalSlice";
import paintsReducer from "../features/paintsSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
    paints: paintsReducer,
  },
});

export default store;
