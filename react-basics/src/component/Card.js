import React from "react";
import "../styles/Card.css";
import { useState } from "react";
export default function Card(props) {
  const { title, author, price, img } = props.item;
  const { cart, setCart } = props.props;
  // const [cart, setCart] = useState([]);
  const handleClick = () => {
    setCart((cartItem) => [...cartItem, props.item]);
  };
  // console.log(props);
  return (
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>{author}</p>
        <p> Price -{price}Rs</p>
        <button onClick={() => handleClick()}>Add To Cart</button>
      </div>
    </div>
  );
}
