import React from "react";
import "../styles/Navbar.css";

export default function Navbar({ size }) {
  return (
    <nav>
      <div className="nav_box">
        <span className="my_shop"> My Shopping </span>
        <div className="cart">
          <span>
            <i className="fas fa-cart-plus"></i>
          </span>
          <span className="size">{size}</span>
        </div>
      </div>
    </nav>
  );
}
