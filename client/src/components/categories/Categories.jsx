import "./categories.css";
import CategoryItem from "../categoryItem/CategoryItem";
import { useState, useEffect } from "react";
import { publicRequest } from "./../../requestMethods";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await publicRequest.get("/categories");

        setCategories(res.data);
      } catch (err) {}
    };
    getCategories();
  }, []);

  return (
    <div className="categories">
      <div className="categories-list">
        {categories.map((item) => (
          <CategoryItem item={item} key={item._id} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
