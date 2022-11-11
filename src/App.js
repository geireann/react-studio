import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import { BakeryItem, CartItem } from "./components";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (item) => {
    console.log(item);
    const newCart = cart.concat([item]);
    setCart(newCart);
    setTotal(total + item.price);
  }

  return (
    <div className="App">
      <div className="header">My Bakery</div>
      <div className="main-container">
        <div className="items-container">
          {bakeryData.map((item, index) => {
            // TODO: map bakeryData to BakeryItem components
            // <p>Bakery Item {index}</p> // replace with BakeryItem component
            return <BakeryItem addToCart={() => addToCart(item)} name={item.name} description={item.description} price={item.price} image={item.image}/>
          })}
        </div>

        <div className="cart-container">
          <h2>Cart</h2>
          {/* TODO: render a list of items in the cart */}
          {cart.map((item, index) => {
            return <CartItem name={item.name} description={item.description} price={item.price} image={item.image}/>
          })}
          <div>Cart Total: ${total}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
