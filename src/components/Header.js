import React from "react";
import { useState } from "react";
import Logo from "../assets/logo.png";
import { CgClose, CgMenuRight } from "react-icons/cg";
import { navigation } from "../data";
import NavBar from "./NavBar";

const Header = () => {
  const [show, setShow] = useState(false);
  const [mobileView, setMobileView] = useState(true);
  return (
    <header
      className={`${
        show ? "bg-stone-800 py-4 lg:py-6 " : "bg-none"
      }  fixed w-full z-10 left-0 py-4 transition-all duration-200`}
    >
      <div className="container mx-auto ">
        <div className="flex justify-between items-center">
          <a href="#">
            <img src={Logo} alt="" width="200px" draggable="false" />
          </a>

          <div className="text-5xl text-white cursor-pointer md:hidden">
            {mobileView ? <CgClose /> : <CgMenuRight />}
          </div>
          <nav className="hidden md:flex">
            <ul className="md:flex md:gap-14">
              {navigation.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      className="text-white text-2xl transition-all hover:border-b"
                      href={item.linkTo}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div
            className={`${
              mobileView ? "left-0" : "-left-full"
            } md:hidden fixed bottom-0 w-full max-w-xs h-screen transition-all `}
          >
            <NavBar />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
