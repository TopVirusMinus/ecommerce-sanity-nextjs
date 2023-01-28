import React from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "../../lib/client";
import Styles from "./Product.module.css";

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <Link href={`/product/${slug.current}`}>
      <div className={Styles.product_card}>
        <Image
          src={urlFor(image && image[0]).url()}
          width={250}
          height={250}
          className={Styles.product_image}
          alt="product"
        />
        <p className={Styles.product_name}>{name}</p>
        <p className={Styles.product_price}>EGP {price}</p>
      </div>
    </Link>
  );
};

export default Product;
