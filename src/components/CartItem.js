import React from "react";
import { AiFillMinusCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { decrease, increase, removeItem } from "../features/cartSlice";

const CartItem = (props) => {
  const dispatch = useDispatch();
  console.log(props);
  return (
    <div className="flex justify-left lg:justify-center border-b first-of-type:border-t py-4 px-6  w-full lg:w-3/4 mx-auto ">
      <div className="w-full lg:w-1/2 flex flex-col items-center  lg:flex-row">
        <img className="w-1/3 border" src={props.image} />
        <div className="lg:ml-10 w-1/3">
          <h2 className=" text-2xl font-semibold text-center flex justify-center lg:justify-start">
            {props.name}
          </h2>
          <div className="flex flex-col items-center text-center lg:items-start mt-2 xl:ml-3">
            <span className="text-xl">{props.price} zł</span>
            <button
              onClick={() => dispatch(removeItem(props.id))}
              className="bg text-rose-700 capitalize  hover:font-semibold "
            >
              usuń
            </button>
          </div>
        </div>
        <div className="flex xl:ml-1  lg:flex-col items-center justify-center gap-x-5 w-1/3 ">
          <button
            onClick={() => dispatch(increase(props.id))}
            className="bg-gray-900 w-[40px] h-[40px] rounded-full text-white flex justify-center items-center text-2xl hover:bg-lime-600 transition order-2 lg:-order-2"
          >
            +
          </button>

          <span className="text-2xl">{props.amount}</span>
          <button
            onClick={() => {
              if (props.amount === 1) {
                dispatch(removeItem(props.id));
                return;
              }
              dispatch(decrease(props.id));
            }}
            className="bg-gray-900 w-[40px] h-[40px] rounded-full text-white flex justify-center items-center text-2xl hover:bg-red-600 transition -order-1 lg:order-1  "
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
