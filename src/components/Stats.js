import React from "react";

import { statsDetails } from "../data";

const Stats = () => {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] backdrop-blur-md p-7 rounded-md ">
      <div className="flex flex-wrap  sm:flex-row text-slate-800">
        {statsDetails.map((item, index) => {
          return (
            <div
              className="'min-h-[70px] w-3/6 lg:flex-1 py-3   odd:border-r lg:odd:border-r lg:even:border-r last:border-none flex flex-col justify-center border-slate-500 capitalize "
              key={index}
            >
              <span className="text-2xl font-semibold max-width-[100px] mx-auto">
                {item.value}
              </span>
              <span className="lg:text-xl">{item.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stats;
