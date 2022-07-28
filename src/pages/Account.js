import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import AccountDetails from "../components/Account/AccountDetails";

const Account = () => {
  return (
    <div className="w-full">
      <div className="mx-auto w-1/2  pb-40">
        <p className="text-center text-3xl text-gray-700 py-2  border-b-4 ">
          Mój profil
        </p>
      </div>
      <div>
        <ul className="flex">
          <Link to="details">
            <li>Moje dane</li>
          </Link>
          <Link to="orders">
            <li>Moje zamówienia</li>
          </Link>
        </ul>
      </div>
      <div>
        <Routes>
          <Route path="/details" element={<AccountDetails />} />
        </Routes>
      </div>
    </div>
  );
};

export default Account;
