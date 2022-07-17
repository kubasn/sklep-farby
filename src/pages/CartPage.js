import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import Modal from "../components/Modal";
import { clearCart } from "../features/cartSlice";
import { openModal } from "../features/modalSlice";

const CartPage = () => {
  const { cartItems, price, amount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.modal);

  if (amount < 1) {
    return (
      <div className="mb-12">
        <h2 className="text-center text-4xl mb-6 text-stone-900  ">
          Twój Koszyk jest pusty
        </h2>
        <h3 className="text-center text-2xl text-stone-700 ">Dodaj produkty</h3>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative">
      {isOpen && <Modal />}
      <div className="w-full lg:w-1/3 mx-auto">
        <h2 className="text-4xl font-semibold text-center uppercase text-stone-800 mb-14  ">
          Twoje zakupy
        </h2>
      </div>
      <div>
        {cartItems.map((item, key) => {
          return <CartItem key={key} {...item} />;
        })}
      </div>
      <div className="flex justify-center gap-x-10 text-2xl">
        <span>Do zapłaty:</span>
        <span>{price} złotych</span>
      </div>
      <div className="w-full py-4">
        <button
          onClick={() => dispatch(openModal())}
          className="bg-white border border-1 rounded-[3px] px-2 text-rose-700 border-rose-700 shadow-sm shadow-rose-700 mx-auto uppercase font-semibold block transition-all hover:scale-110 hover:bg-rose-700 hover:text-white hover:font-normal "
        >
          Wyczyść koszyk
        </button>
      </div>
    </div>
  );
};

export default CartPage;
