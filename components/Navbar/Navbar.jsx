import React, { useEffect } from "react";
import Link from "next/link";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { RiAccountCircleLine } from "react-icons/ri";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { useStateContext } from "../../context/StateContext";
import Cart from "../Cart/Cart";
import Styles from "./Navbar.module.css";
import { UserAuth } from "../../context/AuthContext";
const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const { googleSignIn } = UserAuth();

  const handleGoogleLogin = async () => {
    try {
      await googleSignIn();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={Styles.navbar_container}>
      <p className={Styles.logo}>
        <Link href="/">Marzouk Headphones</Link>
      </p>
      <div className={Styles.right_Navbar_section}>
        <div className={Styles.dropdown}>
          <RiAccountCircleLine size={25} />
          <div className={Styles.dropdown_content}>
            <Link
              href=""
              className={Styles.links}
              onClick={() => handleGoogleLogin()}
            >
              <BiLogIn />
              <p>
                Log In<span style={{ opacity: "0" }}>O</span>
              </p>
            </Link>
            <Link href="" className={Styles.links}>
              <AiOutlineHeart />
              <p>Wishlist</p>
            </Link>
            <Link href="" className={Styles.links}>
              <BiLogOut />
              <p>Log Out</p>
            </Link>
          </div>
        </div>
        <button
          type="button"
          className={Styles.cart_icon}
          onClick={() => setShowCart((prev) => !prev)}
        >
          <AiOutlineShoppingCart />
          <span className={Styles.cart_item_qty}>{totalQuantities}</span>
        </button>
      </div>
      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
