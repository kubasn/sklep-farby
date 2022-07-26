import React from "react";
import Product from "./Product";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useState } from "react";
import { useEffect } from "react";

const Paints = (props) => {
  return (
    <div className="w-full">
      <div className="grid  lg:gap-x-[40px] grid-cols-2 lg:grid-cols-3 w-[96%] mx-auto xl:grid-cols-4 justify-center">
        {props.items.map((item, key) => {
          return <Product key={key} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Paints;
