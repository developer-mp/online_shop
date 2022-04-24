import "./products.css";
import ProductItem from "../productItem/ProductItem";
import { useState, useEffect } from "react";
import { publicRequest } from "./../../requestMethods";

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest.get(`/products?category=${cat}`);
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
      );
    } else if (sort === "lowtohigh") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <div className="products">
      {filteredProducts.map((item) => (
        <ProductItem item={item} cat={cat} key={item._id} />
      ))}
    </div>
  );
};

export default Products;
