import React from "react";
import { Product, FooterBanner, HeroBanner } from "../../components";

const Home = () => {
  return (
    <>
      Hero Banner
      <div className="products-heading">
        <h2>Best Selling Headphones</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {["product1, product2, product3"].map((p) => p)}
      </div>
    </>
  );
};

export default Home;
