import React, { useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import toast from "react-hot-toast";

import { useStateContext } from "../../context/StateContext";
import { urlFor } from "../../lib/client";
import Image from "next/image";
import Styles from "../styles/deliverycheckout.module.scss";
const DeliveryCheckout = () => {
  const cartRef = useRef();
  const router = useRouter();

  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    toggleCartItemQuantity,
    onRemove,
  } = useStateContext();
  return (
    <>
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
                        onClick={() => toggleCartItemQuantity(item._id, "dec")}
                      >
                        <AiOutlineMinus />
                      </span>
                      <span className="num">{item.quantity}</span>
                      <span
                        className="plus"
                        onClick={() => toggleCartItemQuantity(item._id, "inc")}
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
                onClick={() => {
                  setShowCart(() => false);
                  router.push("/checkout");
                }}
              >
                Pay On Delivery
              </button>
            </Link>
            <button
              disabled={true}
              type="button"
              className={Styles.btn}
              onClick={handleCheckout}
            >
              Pay with Card
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default DeliveryCheckout;
