import React from "react";
import { useState } from "react";
import Logo from "../assets/logo.png";

const Header = () => {
  const [show, setShow] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  return (
    <div
      className={`${
        show ? "bg-stone-800 py-4 lg:py-6" : "bg-none"
      } fixed w-full z-10 left-0 py-8 transition-all duration-200`}
    >
      <div className="container mx-auto">
        <div>
          <a href="#">
            <img src={Logo} alt="" width="200px" draggable="false" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
