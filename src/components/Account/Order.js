import React, { useState } from "react";
import { BiDownArrow } from "react-icons/bi";

const Order = (props) => {
  const [show, setShow] = useState(false);
  return (
    <div className=" text-gray-700  ">
      <div className="flex justify-center gap-x-4 ">
        <div>
          <span className="font-semibold">Numer zamówienia: </span>{" "}
          <span> {props.id} </span>
        </div>
        <div>
          <span className="font-semibold">Kwota do zapłaty: </span>{" "}
          <span>{props.totalPrice}zł</span>
        </div>
        <div>
          <BiDownArrow
            onClick={() => setShow(!show)}
            className="relative top-[6px] hover:text-gray-500 transition-all  cursor-pointer "
          />
        </div>
      </div>
      {show && (
        <div className="flex flex-col mb-2">
          {props.products.map((product) => {
            return (
              <div className="flex">
                <div className="w-1/3 text-left">
                  <span className="font-semibold ">nazwa: </span>
                  <span>{product.name}</span>
                </div>
                <div className="w-1/3 text-center">
                  <span className="font-semibold ">ilość: </span>
                  <span>{product.amount}szt</span>
                </div>
                <div className="w-1/3 text-center">
                  <span className="font-semibold ">cena za szt: </span>
                  <span>{product.price}zł</span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Order;
