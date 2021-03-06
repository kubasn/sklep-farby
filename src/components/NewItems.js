import React, { useEffect } from "react";

import { newInStore } from "../data";
import NewItemsSlider from "./NewItemsSlider";
import Aos from "aos";
import "aos/dist/aos.css";
const NewItems = () => {
  const { title, subtitle, link, icon } = newInStore;
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section data-aos="fade-up" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row relative">
          <div className="flex md:flex-col items-baseline gap-x-6 mb-6 lg:mb-0">
            <h2 className="text-3xl font-semibold max-w-[245px] lg:mt-[30px] lg:mb-[90px]">
              {title}
            </h2>
            <p className="max-w-[245px] lg:mb-12">{subtitle}</p>
            <div className="hidden lg:flex items-center">
              <a
                className="hover:border-b border-slate-600 lg:items-center font-medium transition-all "
                href="#"
              >
                {link}
              </a>
              <div className="relative top-0.5 text-xl">{icon}</div>
            </div>
          </div>
          <div className="lg:max-w-[800px] lg:absolute lg:right-0 xl:max-w-[990px]">
            <NewItemsSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewItems;
