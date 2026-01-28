import "./GalleryContainer.css";
import "./ProductCardChild"

function GalleryContainer(){
  return <div className="gallery">
    {ProductsData.map((item) => (
        <ProductCardChild data={item} />
      ))}
  </div>
}

export default GalleryContainer;