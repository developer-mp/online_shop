import "./categoryItem.css";
import { Link } from "react-router-dom";

const CategoryItem = ({ item }) => {
  return (
    <div className="category-item">
      <div className="category-item-container">
        <h2 className="category-item-title">{item.title}</h2>
        <Link to={`/products/${item.title}`}>
          <img className="category-item-img" src={item.img} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default CategoryItem;
