import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { product } from "../../assets/data/data";
import CartItems from "./CartItems";
import { Button } from "antd";

const Cart = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const closeCart = () => {
    setCartOpen(null);
  };
  return (
    <>
      <div className="card" onClick={() => setCartOpen(!cartOpen)}>
        <BiShoppingBag className="cardIcon" />
        <span className="flexCenter">{/* {quantity} */}2</span>
      </div>
      <div className={cartOpen ? "overlay" : "nonoverlay"}></div>
      <div className={cartOpen ? "cartItem" : "cardhide"}>
        <div className="title flex">
          <h2>Shopping cart</h2>
          <button onClick={closeCart}>
            <AiOutlineClose className="icon" />
          </button>
        </div>
        {product.slice(0, 2).map((item) => (
          <CartItems
            id={item.id}
            cover={item.cover}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            totalPrice={item.totalPrice}
          />
        ))}

        <div className="checkout">
          <button>
            <span>Priceed To Checkout</span>
            <label htmlFor="">210000 vnđ</label>
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
