import { Add, Remove } from "@material-ui/icons";
import "./productDetail.css";
import Banner from "../../components/banner/Banner";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useLocation } from "react-router-dom";
import { publicRequest } from "./../../requestMethods";
import { useState, useEffect } from "react";
import { addProduct } from "../../redux/cartRedux";
import { useDispatch } from "react-redux";
import StarRating from "./../../components/rating/Rating";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetail = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const productAdded = () => {
    dispatch(addProduct({ ...product, quantity }));
    toast.success("A product has been added");
  };

  return (
    <div className="product-detail">
      <Banner />
      <Navbar />
      <div className="product-detail-wrapper">
        <div className="product-detail-img-container">
          <img className="product-detail-img" src={product.img} alt="" />
        </div>
        <div className="product-detail-info">
          <h4 className="product-detail-title">{product.title}</h4>
          <div className="product-detail-brand">Brand: {product.brand}</div>
          <StarRating />
          <div className="product-detail-price">
            Price: <span>${product.price?.toFixed(2)}</span>
          </div>
          <p className="product-detail-desc">{product.desc}</p>

          <div className="product-detail-amount-wrapper">
            <div className="product-detail-amount-container">
              <Remove onClick={() => handleQuantity("dec")} />
              <span className="product-detail-amount">{quantity}</span>
              <Add onClick={() => handleQuantity("inc")} />
            </div>
          </div>
          <button className="product-detail-button" onClick={productAdded}>
            Add to Cart
          </button>
          <ToastContainer />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
