import React from "react";
import { navigation } from "../data";

const NavBar = () => {
  return (
    <nav className="bg-slate-100 w-full h-full">
      <ul className="text-center text-3xl h-full flex flex-col justify-center gap-y-12">
        {navigation.map((item, index) => {
          return (
            <li className="font-medium" key={index}>
              <a href={item.linkTo}> {item.name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
