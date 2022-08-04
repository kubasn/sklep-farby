import React from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import AccountDetails from "../components/Account/AccountDetails";
import Orders from "../components/Account/Orders";

const Account = () => {
  return (
    <div className="w-full">
      <div className="mx-auto w-1/2 pb-6">
        <p className="text-center text-3xl text-gray-700 py-2  border-b-4 ">
          Mój profil
        </p>
      </div>
      <div className="mx-auto w-1/2 text-2xl text-gray-600">
        <ul className="flex justify-center gap-10">
          <NavLink
            className=" text-2xl relative after:absolute after:w-full after:scale-x-0 after:h-[2px] after:left-0 after:bg-gray-300 after:-bottom-[2px] after:transition-transform after:duration-700 hover:after:scale-x-100 after:origin-bottom-left "
            to="/account"
          >
            <li>Moje dane</li>
          </NavLink>
          <li className="w-[2px] bg-gray-300"></li>
          <NavLink
            className="text-2xl relative after:absolute after:w-full after:scale-x-0 after:h-[2px] after:left-0 after:bg-gray-300 after:-bottom-[2px] after:transition-transform after:duration-700 hover:after:scale-x-100 after:origin-bottom-left "
            to="orders"
          >
            <li>Moje zamówienia</li>
          </NavLink>
        </ul>
      </div>
      <div className="pt-8">
        <Routes>
          <Route path="/orders" element={<Orders />} />
          <Route path="/" element={<AccountDetails />} />
        </Routes>
      </div>
    </div>
  );
};

export default Account;
