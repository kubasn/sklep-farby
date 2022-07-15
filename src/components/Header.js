import React from "react";
import { useState } from "react";
import Logo from "../assets/logo.png";
import { CgClose, CgMenuRight } from "react-icons/cg";
import { navigation } from "../data";
import NavBar from "./NavBar";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ShoppingCard from "./ShoppingCard";
import { BsFillCartFill } from "react-icons/bs";

const Header = () => {
  const [bg, setBg] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  const [showCard, setShowCard] = useState(true);

  const { amount } = useSelector((state) => state.cart);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  }, []);

  return (
    <header
      className={`${
        bg ? "bg-stone-800 py-4 lg:py-6 opacity-95  " : "bg-none "
      }  fixed w-full z-10 left-0 py-4 transition-all duration-200 `}
    >
      <div className="container mx-auto">
        <div className="flex justify-around items-center">
          <a href="#">
            <img src={Logo} alt="" width="200px" draggable="false" />
          </a>

          <div
            onClick={() => setMobileView(!mobileView)}
            className="text-5xl text-white cursor-pointer md:hidden"
          >
            {mobileView ? <CgClose /> : <CgMenuRight />}
          </div>
          <nav className="hidden md:flex ">
            <ul className="md:flex md:gap-14 relative">
              {navigation.map((item, index) => {
                return (
                  <li className="relative" key={index}>
                    <Link
                      className="text-white text-2xl relative after:absolute after:w-full after:scale-x-0 after:h-[2px] after:left-0 after:bg-white after:-bottom-1 after:transition-transform after:duration-700 hover:after:scale-x-100 after:origin-bottom-left "
                      to={item.linkTo}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
              <li
                className="relative flex hover:scale-125 transition-all duration-500 cursor-pointer"
                onClick={() => setShowCard(!showCard)}
              >
                <Link to="cart">
                  <BsFillCartFill className="text-white text-2xl absolute top-[6px]" />
                  <span className="text-white absolute -right-10 -top-1 bg-slate-400 rounded-full w-6 h-6 text-center  ">
                    {amount}
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
          <div
            className={`${
              mobileView ? "left-0" : "-left-full"
            } md:hidden fixed bottom-0 w-full max-w-xs h-screen transition-all duration-700 `}
          >
            <NavBar />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
