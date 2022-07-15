import React from "react";
import { AiFillMinusCircle } from "react-icons/ai";

const CartItem = (props) => {
  console.log(props);
  return (
    <div className="flex justify-left sm:justify-center border-b first-of-type:border-t py-4 px-6  w-full sm:w-3/4 mx-auto ">
      <div className="w-full sm:w-1/2 flex flex-col items-center  sm:flex-row">
        <img className="w-[200px] border" src={props.image.type} />
        <div className="sm:ml-10 w-full">
          <h2 className=" text-2xl font-semibold flex justify-center sm:justify-start">
            {props.name}
          </h2>
          <div className="flex flex-col items-center sm:items-start mt-2 ml-3">
            <span className="text-xl">{props.price} zł</span>
            <button className="bg text-rose-700 capitalize  hover:font-semibold ">
              usuń
            </button>
          </div>
        </div>
        <div className="flex sm:flex-col items-center justify-center gap-x-5 ">
          <button className="bg-gray-900 w-[50px] h-[50px] rounded-full text-white flex justify-center items-center text-2xl hover:bg-lime-600 transition">
            +
          </button>

          <span className="text-2xl">{props.amount}</span>
          <button className="bg-gray-900 w-[50px] h-[50px] rounded-full text-white flex justify-center items-center text-2xl hover:bg-red-600 transition  ">
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
