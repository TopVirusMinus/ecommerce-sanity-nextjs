import React from "react";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
const Navbar = () => {
  return (
    <div className="flex justify-between my-2 mx-5 relative">
      <p className="text-gray-500 text-xl">
        <Link href="/">Marzouk Headphones</Link>
      </p>
      <button
        type="button"
        className="text-2xl text-gray-500 cursor-pointer relative border-none bg-transparent transition ease 0.4s hover:scale-[1.1]"
        onClick=""
      >
        <AiOutlineShoppingCart />
        <span className="cart-item-qty">1</span>
      </button>
    </div>
  );
};

export default Navbar;
