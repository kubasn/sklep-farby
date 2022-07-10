import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import styled from "styled-components";
import { products } from "../data";
import { HiPlus } from "react-icons/hi";
import "../slider.css";

import { Navigation, Pagination } from "swiper";
const { items } = products;
const ProductSlider = () => {
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      pagination={{ clickable: true }}
      navigation={true}
      className="productSlider min-h-[700px]"
    >
      {items.map((page, key) => {
        return (
          <SwiperSlide key={key}>
            <div className="grid  lg:gap-x-[30px] grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {page.page.map((item, key1) => {
                const { image, icon, name, price, capacity } = item;
                return (
                  <div className="relative mb-10">
                    <div className="hover:border cursor-pointer hover:rounded-sm  w-44 sm:w-64 h-46 sm:h-66 hover:border-teal-900">
                      <img className=" " src={image.type} alt="" />
                      <HiPlus className="text-xl bg-slate-900 rounded-full text-white absolute top-[10px] left-[150px] sm:left-[230px]  hover:cursor-pointer hover:bg-slate-500" />
                    </div>
                    <div className="flex flex-col mt-2 text-left">
                      <span className="font-bold">{name}</span>
                      <div className="flex gap-2">
                        <span>
                          <label className="font-semibold">Cena:</label> {price}{" "}
                          zł
                        </span>
                        <span>
                          <label className="font-semibold">Pojemność:</label>{" "}
                          {capacity}L
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ProductSlider;
