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
        add = {props.addToCart}
        data = {data} />
      )
    })
    return renderedProducts;
  }

  return (
    <div className = 'store-shelf'>
      {renderProducts()}
    </div>
  )
}

export default Shelf;
