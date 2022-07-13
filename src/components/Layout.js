import React from "react";
import Home from "../pages/Home";

const Layout = (props) => {
  return (
    <div>
      {props.header}
      {props.menu}
      {props.content}
      {props.footer}
    </div>
  );
};

export default Layout;
