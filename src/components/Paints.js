import React from "react";
import { products } from "../data";
import Product from "./Product";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useState } from "react";
import { useEffect } from "react";

const Paints = () => {
  const [page, setPage] = useState(1);
  const [disablePrev, setDisablePrev] = useState(true);
  const [disableNext, setDisableNext] = useState(false);

  const changePage = (sign) => {
    if (sign == "-") {
      console.log(page);
      if (page - 1 == "1") setDisablePrev(true);
      setPage(page - 1);
      setDisableNext(false);
    } else if (sign == "+") {
      if (page + 1 == "2") setDisableNext(true);
      setPage(page + 1);
      setDisablePrev(false);
    }
    console.log(page);
  };

  return (
    <div className="w-full">
      <div className="grid  lg:gap-x-[40px] grid-cols-2 lg:grid-cols-3 w-[96%] mx-auto xl:grid-cols-4 justify-center">
        {products.items[page - 1].page.map((item, key) => {
          return <Product key={key} {...item} />;
        })}
      </div>
      <div className=" mb-8 flex justify-center gap-x-4">
        <button
          onClick={() => changePage("-")}
          disabled={disablePrev}
          className="disabled:text-gray-500 text-[45px] hover:text-emerald-900 transition-all duration-300 hover:cursor-pointer disabled:cursor-default  "
        >
          <BsFillArrowLeftCircleFill className=" " />
        </button>
        <button
          className="disabled:text-gray-500 text-[45px] hover:text-emerald-900 transition-all duration-300 hover:cursor-pointer disabled:cursor-default  "
          disabled={disableNext}
          onClick={() => changePage("+")}
        >
          <BsFillArrowRightCircleFill className="   " />
        </button>
      </div>
    </div>
  );
};

export default Paints;
