import React from "react";
import { client, urlFor } from "../../../lib/client";
import Image from "next/image";

const ProductDetails = ({ product, products }) => {
  const { image, name, details, price } = product;

  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <Image
              src={urlFor(image && image[0]).url()}
              width={250}
              height={250}
              alt="product"
            />
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
