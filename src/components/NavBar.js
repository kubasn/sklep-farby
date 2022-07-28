import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { navigation } from "../data";
import { selectUserInfo, setLoginInfo } from "../features/userSlice";
import { googleSignIn } from "../firebase";

const NavBar = (props) => {
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
        <li onClick={() => props.handleAuth()} className="font-medium">
          Logowanie
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
