import "./productList.css";
import Banner from "../../components/banner/Banner";
import Navbar from "../../components/navbar/Navbar";
import Products from "../../components/products/Products";
import Footer from "../../components/footer/Footer";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const title = cat.replace(/%20/g, " ");
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState();

  const brand = [
    { id: 1, name: "Gifts&Gifts" },
    { id: 2, name: "Royal" },
    { id: 3, name: "Fair" },
  ];

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
    if (value === "All brands") {
      setFilters({});
    }
  };

  return (
    <div className="product-list">
      <Banner />
      <Navbar />
      <div className="product-list-title">Category: {title}</div>
      <div className="product-list-filter-container">
        <div className="product-list-filter">
          <span className="product-list-filter-title">Filter Products:</span>
          <select
            className="product-list-filter-select"
            name="brand"
            onChange={handleFilters}
          >
            <option>All brands</option>
            {brand.map((b) => (
              <option value={b.name} key={b.id}>
                {b.name}
              </option>
            ))}
          </select>
        </div>
        <div className="product-list-filter">
          <span className="product-list-filter-title">Sort Products:</span>
          <select
            className="product-list-filter-select"
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="newest">Newest Arrivals</option>
            <option value="lowtohigh">Price: Low to High</option>
            <option value="hightolow">Price: High to Low</option>
          </select>
        </div>
      </div>
      <Products cat={cat} filters={filters} sort={sort} />
      <Footer />
    </div>
  );
};

export default ProductList;
