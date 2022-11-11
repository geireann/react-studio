// TODO: create a component that displays a single bakery

import "./CartItem.css";
// import { useState } from "react";

export const CartItem = (props) => {

  return (
    <div className="cartItem-container">
      {/* <div className="item-image">
        <img className="image" src={props.image} alt={props.name}></img>
      </div> */}
      <div className="item-info">
        <div className="cart-item">
          <div className="item-name">{props.name}</div>
          <div className="item-price">${props.price}</div>
        </div>
        <div className="item-description">{props.description}</div>
      </div>
    </div>
  );
}

export default CartItem;
