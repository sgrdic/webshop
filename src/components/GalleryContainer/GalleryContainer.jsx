import "./GalleryContainer.css";
import ProductCardChild from "./ProductCardChild"
// import { productsData } from "/mocks/dummyData.js";
import { productsData } from "../../mocks/dummyData";

function GalleryContainer(){
  return <div className="gallery">
    {productsData.map((item) => (
        <ProductCardChild key={item.id} product={item} />
      ))}
  </div>
}

export default GalleryContainer;