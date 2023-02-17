import React, { useEffect } from "react";
import { Product, FooterBanner, HeroBanner } from "../../components";
import { client } from "../../lib/client";
import Styles from "../styles/index.module.css";
import { db } from "../../config/firebase";

import { collection, getDocs } from "firebase/firestore";
const Home = ({ allProducts, allBanners }) => {
  // console.log("allProducts ", allProducts);
  // console.log("allBanners ", allBanners);
  const userCollectionRef = collection(db, "Users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      console.log("Got Data From FIRESTORE");
      console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  return (
    <>
      <HeroBanner banner={allBanners.length && allBanners[0]} />
      <div className={Styles.products_heading}>
        <h2>Best Selling Headphones</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className={Styles.products_container}>
        {allProducts?.map((product) => (
          <Product key={product._id} product={product} />
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
