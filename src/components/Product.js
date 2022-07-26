import React from "react";
import { useState } from "react";
import { HiPlus, HiMinus } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../features/cartSlice";

const Product = (props) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <div className="relative mb-10">
        <div className="hover:border cursor-pointer hover:rounded-sm  w-44 sm:w-64 h-46 sm:h-66 hover:border-teal-900">
          <img className="w-full h-[250px] " src={props.image} alt="" />
          {!checked ? (
            <HiPlus
              onClick={() => {
                dispatch(addItem(props));
                setChecked(true);
              }}
              className="text-xl bg-slate-900 rounded-full text-white absolute top-[10px] left-[150px] sm:left-[230px]  hover:cursor-pointer hover:bg-slate-500"
            />
          ) : (
            <HiMinus
              onClick={() => {
                dispatch(removeItem(props.id));
                setChecked(false);
              }}
              className="text-xl bg-slate-900 rounded-full text-white absolute top-[10px] left-[150px] sm:left-[230px]  hover:cursor-pointer hover:bg-slate-500"
            />
          )}
        </div>
        <div className="flex flex-col mt-2 text-left">
          <span className="font-bold">{props.name}</span>
          <div className="flex gap-2">
            <span>
              <label className="font-semibold">Cena:</label> {props.price} zł
            </span>
            <span>
              <label className="font-semibold">Pojemność:</label>{" "}
              {props.capacity}L
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
