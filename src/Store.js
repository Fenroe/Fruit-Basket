import Navbar from "./components/global/Navbar";
import Shelf from "./components/store/Shelf";
import React, { useState } from "react";

const Store = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart(cart.concat([item]));
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
