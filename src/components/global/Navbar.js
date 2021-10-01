import Cart from "./Cart";

const Navbar = (props) => {
  return (
    <div>
      <ul>
        <li>
          <a href = './'>Home</a>
        </li>
        <li>
          <a href = './store'>Store</a>
        </li>
      </ul>
      {props.cart ? <Cart data = {props.cart}/> : null}
    </div>
  )
}

export default Navbar;
