import React, { useRef } from "react";
import Link from "next/link";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import toast from "react-hot-toast";

import { useStateContext } from "../../context/StateContext";
import { urlFor } from "../../lib/client";
import getStripe from "../../lib/getStripe";
import Image from "next/image";
import Styles from "./Cart.module.css";
const Cart = () => {
  const cartRef = useRef();
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    toggleCartItemQuantity,
    onRemove,
  } = useStateContext();

  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItems),
    });

    if (response.statusCode === 500) return;

    const data = await response.json();
    toast.loading("Redirecting...");

    stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <div className={Styles.cart_wrapper} ref={cartRef}>
      <div className={Styles.cart_container}>
        <button
          type="button"
          className={Styles.cart_heading}
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft />
          <span className={Styles.heading}>Your Cart</span>
          <span className={Styles.cart_num_items}>
            ({totalQuantities} items)
          </span>
        </button>

        {cartItems.length < 1 && (
          <div className={Styles.empty_cart}>
            <AiOutlineShopping size={150} />
            <h3>Your shopping bag is empty</h3>
            <Link href="/">
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className={Styles.btn}
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}

        <div className={Styles.product_container}>
          {cartItems.length >= 1 &&
            cartItems.map((item) => (
              <div className={Styles.product} key={item._id}>
                <Image
                  src={urlFor(item?.image[0]).url()}
                  className={Styles.cart_product_image}
                  alt="product"
                  width={250}
                  height={250}
                />
                <div className={Styles.item_desc}>
                  <div className={`${Styles.flex} ${Styles.top}`}>
                    <h5>{item.name}</h5>
                    <h4>EGP {item.price}</h4>
                  </div>
                  <div className={`${Styles.flex} ${Styles.bottom}`}>
                    <div>
                      <p className="quantity-desc">
                        <span
                          className="minus"
                          onClick={() =>
                            toggleCartItemQuantity(item._id, "dec")
                          }
                        >
                          <AiOutlineMinus />
                        </span>
                        <span className="num">{item.quantity}</span>
                        <span
                          className="plus"
                          onClick={() =>
                            toggleCartItemQuantity(item._id, "inc")
                          }
                        >
                          <AiOutlinePlus />
                        </span>
                      </p>
                    </div>
                    <button
                      type="button"
                      className={Styles.remove_item}
                      onClick={() => onRemove(item)}
                    >
                      <TiDeleteOutline />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {cartItems.length >= 1 && (
          <div className={Styles.cart_bottom}>
            <div className={Styles.total}>
              <h3>Subtotal:</h3>
              <h3>EGP {totalPrice}</h3>
            </div>
            <div className={Styles.btn_container}>
              <Link href="/success">
                <button
                  type="button"
                  className={Styles.btn}
                  onClick={() => setShowCart(() => false)}
                >
                  Pay On Delivery
                </button>
              </Link>
              <button
                type="button"
                className={Styles.btn}
                onClick={handleCheckout}
              >
                Pay with Card
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
