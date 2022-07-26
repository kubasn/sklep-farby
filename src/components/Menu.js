import React, { useEffect } from "react";

import { menuDetails } from "../data";
import { useNavigate } from "react-router-dom";
import Stats from "./Stats";
import Aos from "aos";
import "aos/dist/aos.css";
const { title, subtitle, buttonText } = menuDetails;

const Menu = () => {
  const navigate = useNavigate();
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section
      className="h-[850px] w-full bg-menu bg-cover text-slate-100 bg-no-repeat text- 
    pt-[175px] pb-[254px] relative mb-12 lg:bg-center lg:mb-28"
    >
      <div data-aos="fade-up" className="container mx-auto text-center ">
        <h1 className="text-2xl mx-auto font-semibold mb-[30px] lg:text-[54px] lg:leading-tight lg:max-w-[888px] ">
          {title}
        </h1>
        <h2 className="mb-[30px] max-w-[627px] mx-auto lg:text-xl">
          {subtitle}
        </h2>
        <button
          onClick={() => navigate("/paints")}
          className="bg-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.6)] px-[25px] py-[8px] mb-[160px] text-xl rounded-md backdrop-blur-md transition duration-500 lg:px-[80px] lg:py-[18px] lg:mb-[194px] "
        >
          {buttonText}
        </button>
        <div>
          <Stats />
        </div>
      </div>
    </section>
  );
};

export default Menu;
