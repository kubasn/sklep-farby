import React from "react";
import { contact } from "../data";
import {
  AiOutlineClockCircle,
  AiOutlinePhone,
  AiOutlineMail,
} from "react-icons/ai";

const Contact = () => {
  const { sellingPoints, centralPoint } = contact;

  return (
    <div className=" h-[600px] ">
      <div className="flex justify-around">
        <div>
          <h2 className="text-2xl font-medium -left-4 mb-8 relative ">
            Punkty sprzedaży
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
        <div className="flex flex-col">
          <h2 className="text-2xl font-medium mb-8 -left-4 relative">
            Centrala
          </h2>
          <div className="flex flex-col">
            <h2 className="text-xl font-medium border-b-2">
              {centralPoint.name}
            </h2>
            <span>{centralPoint.location}</span>
            <span>{centralPoint.workingHours}</span>
            <span>{centralPoint.tel}</span>
            <span>{centralPoint.mail}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
