const Cart = (props) => {
  return (
    <div className = 'cart'>
      <p className = 'cart-quantity'>{props.data.length}</p>
      <i className = 'fas fa-shopping-cart' />
    </div>
  )
}

export default Cart;
