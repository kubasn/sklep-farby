import React from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../features/cartSlice";
import { closeModal } from "../features/modalSlice";

const Modal = () => {
  const dispatch = useDispatch();
  return (
    <aside className="absolute w-full h-full bg-[rgba(0,0,0,0.85)] left-0 top-0 flex justify-center items-center ">
      <div className="  w-1/3   bg-white py-10 px-4">
        <h4 className="text-xl font-semibold py-4">
          Czy napewno chcesz usunąć wszystkie produkty?
        </h4>
        <div className="flex justify-center gap-x-10">
          <button
            onClick={() => {
              dispatch(closeModal());
              dispatch(clearCart());
            }}
            className="text-xl border border-green-700 hover:bg-green-700 hover:text-white transition duration-500 py-1 px-4 rounded-sm shadow-md"
          >
            Tak
          </button>
          <button
            onClick={() => {
              dispatch(closeModal());
            }}
            className="text-xl border border-rose-700 hover:bg-rose-700 hover:text-white transition duration-500  py-1 px-4 rounded-sm shadow-md"
          >
            Nie
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
