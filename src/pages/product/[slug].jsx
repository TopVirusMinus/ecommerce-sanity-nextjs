import React from "react";
import { client, urlFor } from "../../../lib/client";
import Image from "next/image";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
  AiOutlineHeart,
} from "react-icons/ai";
import Product from "../../../components/Product/Product";
import { useState } from "react";
import { useStateContext } from "../../../context/StateContext";
import Styles from "../../styles/productDetails.module.css";
const ProductDetails = ({ product, products }) => {
  const { image, name, details, price } = product;
  const [index, setIndex] = useState(0);
  const { incQty, decQty, qty, onAdd, setShowCart } = useStateContext();

  const handleBuyNow = () => {
    onAdd(product, qty);

    setShowCart(() => true);
  };

  return (
    <div>
      <div className={Styles.product_detail_container}>
        <div>
          <div className="image-container">
            <Image
              src={urlFor(image && image[index]).url()}
              className={Styles.product_detail_image}
              alt="selected product image"
              width={250}
              height={250}
            />
          </div>
          <div className={Styles.small_images_container}>
            {image?.map((item, i) => (
              <Image
                key={i}
                src={urlFor(item).url()}
                alt="mini product images"
                className={
                  i === index
                    ? `${Styles.small_image} ${Styles.selected_image}`
                    : `${Styles.small_image}`
                }
                width={250}
                height={250}
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        <div className={Styles.product_detail_desc}>
          <h1>{name}</h1>
          <div className={Styles.reviews}>
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <h4>Details: </h4>
          <p>{details}</p>
          <p className={Styles.price}>EGP {price}</p>
          <div className={Styles.quantity}>
            <h3>Quantity:</h3>
            <p className={Styles.quantity_desc}>
              <span onClick={() => decQty()} className={Styles.minus}>
                <AiOutlineMinus />
              </span>
              <span className={Styles.num}>{qty}</span>
              <span onClick={() => incQty()} className={Styles.plus}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className={Styles.buttons}>
            <button
              type="button"
              onClick={() => onAdd(product, qty)}
              className={Styles.add_to_cart}
            >
              Add to Cart
            </button>
            <button
              type="button"
              className={Styles.buy_now}
              onClick={() => handleBuyNow()}
            >
              Buy now
            </button>
          </div>
          <button className={Styles.add_to_wishlist}>
            &hearts;
            <span> Add to Wishlist</span>
          </button>
        </div>
      </div>

      <div className={Styles.maylike_products_wrapper}>
        <h2>You may also like</h2>
        <div className={Styles.marquee}>
          <div
            className={`${Styles.maylike_products_container} ${Styles.track}`}
          >
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const otherProductsQuery = '*[_type == "product"]';
  const products = await client.fetch(otherProductsQuery);
  const paths = products.map((p) => {
    return {
      params: {
        slug: p.slug.current,
      },
    };
  });
  return { paths, fallback: "blocking" };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const currentProductQuery = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const otherProductsQuery = '*[_type == "product"]';

  const product = await client.fetch(currentProductQuery);
  const products = await client.fetch(otherProductsQuery);

  return {
    props: { product, products },
  };
};

export default ProductDetails;
