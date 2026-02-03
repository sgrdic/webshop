import "./ProductCardChild.css";

function ProductCardChild({product}){
  return <div className="productCard">
    
    <img width={400} src={product.image}></img>
    <p>Name: {product.name}</p>
    <p>Category: {product.category}</p>
    <p>Price: {product.price}$</p>
    
    <p>{product.inStock ? <button className="inStock">Add To Cart</button> : <button className="outOfStock">Out Of Stock</button>}</p>
    <p>{product.isNew ? <div className="isNew">New</div> : <div className="notNew"></div>}</p>
    <p>{product.isOnSale ? <div className="onSale">Sale</div> : <div className="notOnSale"></div>}</p>
  </div>
}

export default ProductCardChild;