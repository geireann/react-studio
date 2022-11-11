// TODO: create a component that displays a single bakery

import "./BakeryItem.css";
// import { useState } from "react";

export const BakeryItem = (props) => {

  return (
    <div className="bakeryItem-container">
      <div className="item-image">
        <img className="image" src={props.image} alt={props.name}></img>
      </div>
      <div className="item-info">
        <div className="item-name">{props.name}</div>
        <div className="item-description">{props.description}</div>
        <div className="price-container">
          <div className="item-price">${props.price}</div>
          <div className="addToCart-button" onClick={props.addToCart}>Add To Cart</div>
        </div>
      </div>
    </div>
  );
}

export default BakeryItem;
