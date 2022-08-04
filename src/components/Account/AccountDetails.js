import React from "react";
import { useSelector } from "react-redux";

const AccountDetails = () => {
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <div className="w-1/2 mx-auto text-gray-700 mb-12 ">
      <h2 className="text-center mb-2 font-medium">Informacje o użytkowniku</h2>
      <div className="flex flex-col items-center">
        <div>
          <img className="rounded-full" src={user.userImg} alt="zdjecie" />
        </div>
        <div className="my-4 flex flex-col items-center">
          <div className="flex flex-col w-full sm:flex-row sm:gap-x-1">
            <span className="font-medium">Nazwa: </span>
            <span>{user.name}</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:gap-x-1">
            <span className="font-medium">Adres email: </span>
            <span>{user.email}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
