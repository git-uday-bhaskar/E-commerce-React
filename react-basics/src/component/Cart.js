import React from "react";
import { useState } from "react";
import "../styles/cart.css";

export default function Cart({ cart, setCart }) {
  const [price, setPrice] = useState(0);
  return (
    <article>
      {cart.map((item) => {
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} />
            <p>{item.title}</p>
          </div>
        </div>;
      })}
    </article>
  );
}
