import React, { useEffect } from "react";
import { features } from "../data";
import Aos from "aos";
import "aos/dist/aos.css";

const Features = () => {
  const { title, image, subtitle, paragraphs, icon } = features;
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <section className="section my-20">
      <div className="container mx-auto">
        <div className="flex flex-col 2xl:flex-row 2xl:gap-x-10 2xl:-order:1">
          <div data-aos="fade-right" className="flex-1 order-1 2xl:-order-1">
            <img className="" src={image.type} alt="" />
          </div>

          <div
            data-aos="fade-left"
            className="flex-1 flex flex-col justify-start"
          >
            <h2 className="text-3xl font-semibold">{title}</h2>
            <p className="text-m leading-7 pt-2 pb-5">{subtitle}</p>
            <div>
              {paragraphs.map((item, key) => {
                const { title, icon, subtitle } = item;
                return (
                  <div className="flex mb-5 last:mb-2">
                    <div className="relative top-1 ">{icon}</div>
                    <div>
                      <span className="font-semibold">{title}</span>
                      <span>{subtitle}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
