import React, { useEffect } from "react";
import { footer } from "../data";
import {
  BsYoutube,
  BsFacebook,
  BsPinterest,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
// import Aos from "aos";
// import "aos/dist/aos.css";

const Footer = () => {
  const { title, tel1, mail } = footer;
  // useEffect(() => {
  //   Aos.init({ duration: 2000 });
  // }, []);
  return (
    <div className="bg-stone-900 flex">
      <div className="pt-8 pb-36 w-[calc(50%-2px)] flex flex-col items-center">
        <div>
          <p className="text-4xl text-slate-200">{title}</p>
          <div className="flex text-slate-200 gap-4 mt-4 text-4xl  ">
            <BsFacebook className="hover:text-blue-600 transition-all duration-500" />
            <BsYoutube className="hover:text-red-600 transition-all duration-500" />
            <BsPinterest className="hover:text-red-500 transition-all duration-500" />
          </div>
        </div>
      </div>
      <div className="w-1 bg-slate-50  "></div>
      <div className="flex flex-col text-slate-200 pt-8 w-[calc(50%-2px)] items-center">
        <div>
          <h2 className=" text-4xl">Kontakt</h2>
          <div className="flex flex-col text-xl">
            <span>
              <BsFillTelephoneFill className="inline-block relative top-[-2px] mr-1" />
              {tel1}
            </span>
            <span>
              <AiFillMail className="inline-block relative top-[-1px] mr-1" />
              {mail}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
