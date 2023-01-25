import React from "react";
import Image from "next/image";
import Link from "next/link";
import Styles from "./HeroBanner.module.css";

const HeroBanner = () => {
  return (
    <div className={Styles.hero_banner_container}>
      <div>
        <p className={Styles.beats_solo}>SMALL TEXT</p>
        <h3>Mid Text</h3>
        <Image src="" alt="headphones" className={Styles.hero_banner_image} />
        <div>
          <Link href="/product/ID">
            <button type="button">BUTTON TEXT</button>
          </Link>
          <div className={Styles.desc}>
            <h5>Description</h5>
            <p>DESCRIPTION</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
