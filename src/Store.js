import Navbar from "./components/global/Navbar";
import Shelf from "./components/store/Shelf";
import React, { useState } from "react";

const Store = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (items) => {
    setCart(cart.concat(items));
  };

  return (
    <div className = 'store-page'>
      <Navbar cart = {cart}/>
      <Shelf addToCart = {addToCart}/>
    </div>
  )
}

export default Store;
