import React, { useState } from "react";

const Product = (props) => {

  const [quantity, setQuantity] = useState([props.data]);

  const increaseQuantity = () => {
    if (quantity.length < 99) {
      setQuantity(quantity.concat([props.data]));
    }
  }

  const decreaseQuantity = () => {
    if (quantity.length > 1) {
       setQuantity(quantity.slice(1));
    }    
  }

  const assignQuantity = (amount) => {
    let parsedAmount = Number.parseInt(amount);
    if (parsedAmount > 99) {
      parsedAmount = 99;
    }
    if (!parsedAmount) {
      parsedAmount = 1;
    }
    const newQuantity = [];
    for (let i = 0; i < parsedAmount; i += 1) {
      newQuantity.push(props.data);
    }
    setQuantity(newQuantity);
  }

  return (
    <div className = 'product-card'>
      <h2 className = 'product-card-heading'>{props.title}</h2>
      <img className = 'product-card-image' src = {props.src} alt = {props.title} />
      <p className = 'product-card-price'>£{((props.price * quantity.length) / 100).toFixed(2)}</p>
      <div className = 'product-quantity-container'>
        <i className = 'fas fa-minus product-card-icon' onClick = {() => decreaseQuantity()}/>
        <input className = 'product-card-input' value = {quantity.length} onChange = {(evt) => assignQuantity(evt.target.value)} />
        <i className = 'fas fa-plus product-card-icon' onClick = {() => increaseQuantity()}/>
      </div>
      <button className = 'product-card-button' onClick = {() => props.add(quantity)}>Add To Cart</button>
    </div>
  )
}

export default Product;
