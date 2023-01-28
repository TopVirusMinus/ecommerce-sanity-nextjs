import React from "react";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useStateContext } from "../../context/StateContext";
import Cart from "../Cart/Cart";
import Styles from "./Navbar.module.css";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Marzouk Headphones</Link>
      </p>
      <button
        type="button"
        className="cart-icon"
        onClick={() => setShowCart((prev) => !prev)}
      >
        <AiOutlineShoppingCart />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
