import React from "react";
import Image from "next/image";
import Link from "next/link";
import Styles from "./HeroBanner.module.css";
import { urlFor } from "../../lib/client";

const HeroBanner = ({ banner }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{banner.product}</p>
        <h3 className="text-7xl mt-1" id="midText">
          {banner.midText}
        </h3>
        <h1 className="text-white text-9xl ml-[-20px] uppercase">
          {banner.largeText1}
        </h1>
        <Image
          src={urlFor(banner.image).url()}
          alt="headphones"
          className="hero-banner-image"
          width={555}
          height={555}
        />
        <div>
          <Link href="/product/ID">
            <button type="button">{banner.buttonText}</button>
          </Link>
          <div className="desc">
            <h5>{banner.smallText}</h5>
            <p>{banner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
