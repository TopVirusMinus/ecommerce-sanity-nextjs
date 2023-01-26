import React from "react";
import { Product, FooterBanner, HeroBanner } from "../../components";
import { client } from "../../lib/client";

const Home = ({ allProducts, allBanners }) => {
  // console.log("allProducts ", allProducts);
  // console.log("allBanners ", allBanners);

  return (
    <>
      <HeroBanner banner={allBanners.length && allBanners[0]} />
      <div className="products-heading">
        <h2>Best Selling Headphones</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {allProducts?.map((product) => (
          <Product key={allProducts._id} product={product} />
        ))}
      </div>
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
