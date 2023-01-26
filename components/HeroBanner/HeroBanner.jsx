import React from "react";
import Image from "next/image";
import Link from "next/link";
import Styles from "./HeroBanner.module.css";
import { urlFor } from "../../lib/client";

const HeroBanner = ({ banner }) => {
  return (
    <div
      className={`${Styles.hero_banner_container} py-20 px-10 bg-[#dcdcdc] relative rounded-xl w-full leading-5 h-1/4 `}
    >
      <div>
        <p className="text-sm font-semibold">{banner.product}</p>
        <h3 className="text-7xl mt-1" id="midText">
          {banner.midText}
        </h3>
        <h1 className="text-white text-9xl ml-[-20px] uppercase">
          {banner.largeText1}
        </h1>
        <Image
          src={urlFor(banner.image).url()}
          alt="headphones"
          className={`absolute top-[0%] right-[20%] h-[450px] w-[450px] ${Styles.hero_banner_image}}`}
          width={555}
          height={555}
        />
        <div>
          <Link href="/product/ID">
            <button
              className="rounded-2xl bg-red-600 text-white px-8 cursor-pointer z-50 font-medium py-4 mt-10 border-none text-sm"
              type="button"
            >
              {banner.buttonText}
            </button>
          </Link>
          <div className="absolute fle flex-col leading-6 right-[10%] bottom-[5%] w-80 text-slate-900">
            <h5 className="mb-3 font-bold text-base text-end ">
              {banner.smallText}
            </h5>
            <p
              className={`${Styles.desc} text-slate-500 font-thin align text-end`}
            >
              {banner.desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
