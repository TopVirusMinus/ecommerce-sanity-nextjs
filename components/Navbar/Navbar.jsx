import React from "react";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useStateContext } from "../../context/StateContext";
import Cart from "../Cart/Cart";
import Styles from "./Navbar.module.css";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className={Styles.navbar_container}>
      <p className={Styles.logo}>
        <Link href="/">Marzouk Headphones</Link>
      </p>
      <button
        type="button"
        className={Styles.cart_icon}
        onClick={() => setShowCart((prev) => !prev)}
      >
        <AiOutlineShoppingCart />
        <span className={Styles.cart_item_qty}>{totalQuantities}</span>
      </button>
      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
