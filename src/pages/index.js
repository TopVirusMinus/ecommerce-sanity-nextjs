import React from "react";
import { Product, FooterBanner, HeroBanner } from "../../components";
import { client } from "../../lib/client";

const Home = ({ allProducts, allBanners }) => {
  return (
    <>
      <HeroBanner />
      <div className="products-heading">
        <h2>Best Selling Headphones</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {allProducts?.map((product) => product.name)}
      </div>
      <FooterBanner />
    </>
  );
};

export const getServerSideProps = async () => {
  const allProductsQuery = '*[_type == "product"]';
  const allProducts = await client.fetch(allProductsQuery);

  const allBannersQuery = '*[_type == "banner"]';
  const allBanners = await client.fetch(allBannersQuery);

  return {
    props: { allProducts, allBanners },
  };
};

export default Home;
