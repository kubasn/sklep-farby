import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { newInStore } from "../data";

const NewItemsSlider = () => {
  return (
    <Swiper
      grabCursor={true}
      breakpoints={{
        320: {
          slidesPerView: "auto",
          spaceBetween: 18,
        },
        768: {
          slidesPerView: "auto",
          spaceBetween: 20,
        },
      }}
    >
      {newInStore.products.map((item, key) => {
        return (
          <SwiperSlide className="max-w-[265px]" key={key}>
            <div className="relative">
              <img className="border max-h-64 " src={item.image.type} alt="" />
              <div className="text-center lg:text-xl font-medium">
                {item.name}
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default NewItemsSlider;
