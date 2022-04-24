import "./productItem.css";
import { Link } from "react-router-dom";
import StarRating from "../rating/Rating";

const ProductItem = ({ item }) => {
  return (
    <div className="product-item">
      <div className="product-item-img-container">
        <Link to={`/product/${item._id}`} className="product-item-link">
          <img className="product-item-img" src={item.img} alt="" />
        </Link>{" "}
      </div>
      <div className="product-item-info">
        <div className="product-item-desc">{item.desc}</div>
        <div className="product-item-brand">{item.brand}</div>
        <span className="product-item-price">${item.price.toFixed(2)}</span>
        <StarRating />
      </div>
    </div>
  );
};

export default ProductItem;
