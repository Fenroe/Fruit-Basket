import productData from "./productData";
import Product from "./Product";

const Shelf = (props) => {
  const renderProducts = () => {
    const renderedProducts = productData.map(data => {
      return (
        <Product 
        src = {data.image} 
        title = {data.productName}
        price = {data.price}
        key = {data.key}
        add = {props.addToCart} />
      )
    })
    return renderedProducts;
  }

  return (
    <div>
      {renderProducts()}
    </div>
  )
}

export default Shelf;
