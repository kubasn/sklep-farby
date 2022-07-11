import React, { useEffect } from "react";
import { products } from "../data";
import ProductSlider from "./ProductSlider";
import Aos from "aos";
import "aos/dist/aos.css";

const Products = () => {
  const { title, subtitle } = products;
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section data-aos="fade-down" className="section">
      <div className="container mx-auto">
        <div>
          <h2 className="text-4xl w-1/2 mx-auto mb-12 border-b-2 pb-6 text-center font-semibold">
            {title}
          </h2>
          <p>{subtitle}</p>
        </div>
        <ProductSlider />
      </div>
    </section>
  );
};

export default Products;
