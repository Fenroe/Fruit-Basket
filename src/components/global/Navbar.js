import CartIcon from "./Cart";

const Navbar = (props) => {
  return (
    <div className = 'nav'>
      <ul className = 'site-links'>
        <li className = 'site-links-item'>
          <a className = 'site-links-item' href = './'>Home</a>
        </li>
        <li className = 'site-links-item'>
          <a className = 'site-links-item' href = './store'>Store</a>
        </li>
      </ul>
      {props.cart ? <CartIcon data = {props.cart}/> : null}
    </div>
  )
}

export default Navbar;
