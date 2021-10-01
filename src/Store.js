import Navbar from "./components/global/Navbar";
import Shelf from "./components/store/Shelf";
import React, { useState } from "react";

const Store = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (items) => {
    setCart(cart.concat(items));
  };

  return (
    <div>
      <Navbar cart = {cart}/>
      <h1>Hello from Store</h1>
      <Shelf addToCart = {addToCart}/>
    </div>
  )
}

export default Store;
