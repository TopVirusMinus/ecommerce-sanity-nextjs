import React, { useEffect } from "react";
import Link from "next/link";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineUser,
} from "react-icons/ai";
import { RiAccountCircleLine } from "react-icons/ri";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { useStateContext } from "../../context/StateContext";
import Cart from "../Cart/Cart";
import Styles from "./Navbar.module.css";
import { UserAuth } from "../../context/AuthContext";
const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const { logOut, user } = UserAuth();
  console.log(`USER: ${JSON.stringify(user)}`);
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err);
    }
  };

  console.log(`UID ${user?.uid}`);
  return (
    <div className={Styles.navbar_container}>
      <p className={Styles.logo}>
        <Link href="/">Marzouk Headphones</Link>
      </p>
      <div className={Styles.right_Navbar_section}>
        <div className={Styles.dropdown}>
          <RiAccountCircleLine size={25} />
          <div className={Styles.dropdown_content}>
            {!user?.displayName ? (
              <Link href="/login" className={Styles.links}>
                <BiLogIn />
                <p>
                  Log In<span style={{ opacity: "0" }}>O</span>
                </p>
              </Link>
            ) : (
              <Link href="" className={Styles.links}>
                <AiOutlineUser style={{ cursor: "pointer" }} />
                <p>{user.displayName.split(" ")[0]}</p>
              </Link>
            )}
            <Link href="" className={Styles.links}>
              <AiOutlineHeart />
              <p>Wishlist</p>
            </Link>
            <Link href="" className={Styles.links} onClick={() => logOut()}>
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
