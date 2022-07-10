import React from "react";
import { products } from "../data";
import ProductSlider from "./ProductSlider";

const Products = () => {
  const { title, subtitle } = products;

  return (
    <section className="section">
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
