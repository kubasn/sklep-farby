import React from "react";
import Features from "../components/Features";
import Features2 from "../components/Features2";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Menu from "../components/Menu";
import NewItems from "../components/NewItems";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";

const Home = (props) => {
  return (
    <div>
      <Features />
      <NewItems />
      <Features2 />
      <Products />
      <Newsletter />
    </div>
  );
};

export default Home;
