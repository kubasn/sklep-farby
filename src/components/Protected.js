import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

const Protected = ({ children }) => {
  const user = useSelector((state) => state.user);

  const navigate = useNavigate();

  if (!user.name) {
    return (
      <div className="">
        <div className="bg-rose-200 w-3/4 mx-auto mb-12 py-4 text-center rounded-sm">
          <p className="text-2xl">
            <span className="text-rose-500 font-medium">Zaloguj się</span>
            <span className="text-rose-400">, aby zobatrzyć zawartość</span>
          </p>
        </div>
      </div>
    );
  }

  return children;
};

export default Protected;
