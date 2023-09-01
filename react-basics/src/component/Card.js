import React from "react";
import "../styles/Card.css";
export default function Card(props) {
  const { title, author, price, img } = props.item;
  console.log(props);
  return (
    <div className="container">
      <div className="cards">
        <div className="image_box">
          <img src={img} alt="image" />
        </div>
        <div className="details">
          <p>{title}</p>
          <p>{author}</p>
          <p> Price -{price}Rs</p>
          <button className="btn btn-primary">Add To Cart</button>
        </div>
      </div>
    </div>
  );
}
