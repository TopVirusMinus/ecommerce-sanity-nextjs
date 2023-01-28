import React from "react";
import Image from "next/image";
import Link from "next/link";
import Styles from "./HeroBanner.module.css";
import { urlFor } from "../../lib/client";

const HeroBanner = ({ banner }) => {
  return (
    <div className={Styles.hero_banner_container}>
      <div>
        <p className={Styles.banner_product}>{banner.product}</p>
        <h3>{banner.midText}</h3>
        <h1>{banner.largeText1}</h1>
        <Image
          src={urlFor(banner.image).url()}
          alt="headphones"
          className={Styles.hero_banner_image}
          width={555}
          height={555}
        />
        <div>
          <Link href="/product/ID">
            <button type="button">{banner.buttonText}</button>
          </Link>
          <div className={Styles.desc}>
            <h5>{banner.smallText}</h5>
            <p>{banner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
