import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import './main.css';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);

// app has two pages, a home and a shop
// on both:
// - show a navbar that can be used to switch between the two pages
// on navbar:
// - home
// - shop
// - a basket icon with a number beside it, representing number of items in basket
// on home:
// - a heading
// - a carousel that rotates between a few different images
// - an about section 
// on shop:
// - a heading
// - a bar that displays the number of items currently in the cart
// ---bar doesn't have to have logic to take user to cart but should look like it does
// -a shelf full of product cards
// on product cards:
// - a heading
// - an image
// - an input field to type in a custom value
// - an increment and decrement counter on either side
// - a button to add to cart
