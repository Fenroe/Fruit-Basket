const Product = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <img src = {props.src} alt = {props.title} />
      <p>{props.price}</p>
      <button onClick = {props.add}>Add To Cart</button>
    </div>
  )
}

export default Product;
