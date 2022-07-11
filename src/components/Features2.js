import React, { useEffect } from "react";
import { features2 } from "../data";
import Aos from "aos";
import "aos/dist/aos.css";

const Features2 = () => {
  const { title, image, subtitle } = features2;

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="section my-20">
      <div className="container mx-auto">
        <div className="flex flex-col 2xl:flex-row 2xl:gap-x-10">
          <div
            data-aos="fade-right"
            className="flex-1 flex flex-col justify-start"
          >
            <h2 className="text-3xl font-semibold">{title}</h2>
            <p className="text-m leading-7 pt-2 pb-5">{subtitle}</p>
          </div>
          <div data-aos="fade-left" className="flex-1">
            <img className="" src={image.type} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features2;
