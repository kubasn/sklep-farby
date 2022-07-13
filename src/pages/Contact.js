import React, { useEffect } from "react";
import { contact } from "../data";
import {
  AiOutlineClockCircle,
  AiOutlinePhone,
  AiOutlineMail,
} from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const { sellingPoints, centralPoint } = contact;

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div className=" h-[600px] ">
      <div className="flex justify-around">
        <div data-aos="fade-right">
          <h2 className="text-2xl font-medium -left-4 mb-8 relative flex ">
            <ImLocation className="relative top-1" /> Punkty sprzedaży
          </h2>
          {sellingPoints.map((item, index) => {
            return (
              <div className="flex flex-col mb-3">
                <h2 className="text-xl font-medium border-b-2">{item.name}</h2>
                <span>{item.location}</span>
                <span className="flex">
                  <AiOutlineClockCircle className="relative top-1 mr-2" />
                  {item.workingHours}
                </span>
                <span className="flex">
                  <AiOutlinePhone className="relative top-1 mr-2" />
                  {item.tel}
                </span>
                <span className="flex">
                  <AiOutlineMail className="relative top-1 mr-2" />
                  {item.mail}
                </span>
              </div>
            );
          })}
        </div>
        <div className="w-1 h-[550px] bg-stone-900"></div>
        <div data-aos="fade-left" className="flex flex-col">
          <h2 className="text-2xl font-medium mb-8 -left-4 relative flex">
            <ImLocation className="relative top-1" /> Centrala
          </h2>
          <div className="flex flex-col">
            <h2 className="text-xl font-medium border-b-2">
              {centralPoint.name}
            </h2>
            <span>{centralPoint.location}</span>
            <span className="flex">
              <AiOutlineClockCircle className="relative top-1 mr-2" />
              {centralPoint.workingHours}
            </span>
            <span className="flex">
              <AiOutlinePhone className="relative top-1 mr-2" />
              {centralPoint.tel}
            </span>
            <span className="flex">
              <AiOutlineMail className="relative top-1 mr-2" />
              {centralPoint.mail}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
