import { Add, Remove } from "@material-ui/icons";
import "./cart.css";
import Banner from "../../components/banner/Banner";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { useSelector, useDispatch } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useState, useEffect, useCallback } from "react";
import { userRequest } from "../../requestMethods";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { incQuantity, decQuantity, removeProduct } from "../../redux/cartRedux";
import cart_img from "../../assets/img/components/cart.png";

const KEY = process.env.REACT_APP_STRIPE;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onToken = (token) => {
    setStripeToken(token);
  };

  const getTotal = useCallback(() => {
    return cart.products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  }, [cart.products]);

  const getQuantity = () => {
    return cart.products.reduce(
      (quantity, product) => quantity + product.quantity,
      0
    );
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 100,
        });
        navigate("/success", { data: res.data });
      } catch {}
    };
    stripeToken && getTotal !== 0 && makeRequest();
  }, [stripeToken, getTotal, navigate]);

  return (
    <div className="cart">
      <Banner />
      <Navbar />
      <div className="cart-wrapper">
        <h1 className="cart-title">Shopping Cart ({getQuantity()})</h1>
        {getTotal() !== 0 ? (
          <div className="cart-order">
            <div className="cart-order-container">
              {cart.products.map((product) => (
                <div className="cart-order-product" key={product._id}>
                  <div className="cart-order-product-img">
                    <img src={product.img} alt="" />
                  </div>
                  <div className="cart-order-product-info">
                    <h3>{product.title}</h3>
                    <p className="cart-order-product-desc">{product.desc}</p>
                    <p
                      className="cart-order-product-delete"
                      onClick={() => dispatch(removeProduct(product._id))}
                    >
                      Remove
                    </p>
                  </div>
                  <div className="cart-order-product-price">
                    <h3>Total cost</h3>
                    <p>${(product.price * product.quantity).toFixed(2)}</p>
                  </div>
                  <div className="cart-order-product-price-mobile">
                    <h3>
                      Total cost:{" "}
                      <span>
                        ${(product.price * product.quantity).toFixed(2)}
                      </span>
                    </h3>
                  </div>
                  <div className="cart-order-product-quantity">
                    <div className="cart-order-product-quantity-box">
                      <h3>Quantity</h3>
                      <div className="cart-order-product-quantity-update">
                        <Remove
                          onClick={() => dispatch(decQuantity(product._id))}
                        />
                        <span className="product-detail-amount">
                          {product.quantity}
                        </span>
                        <Add
                          onClick={() => dispatch(incQuantity(product._id))}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="cart-order-product-quantity-mobile">
                    <div className="cart-order-product-quantity-box-mobile">
                      <h3>
                        Quantity:
                        <span className="cart-order-product-quantity-update-mobile">
                          <Remove
                            onClick={() => dispatch(decQuantity(product._id))}
                          />
                          <span className="product-detail-amount-mobile">
                            {product.quantity}
                          </span>
                          <Add
                            onClick={() => dispatch(incQuantity(product._id))}
                          />
                        </span>
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-order-summary">
              <h1>ORDER SUMMARY</h1>
              <div className="cart-order-summary-item">
                <span>Subtotal</span>
                <span>$ {Number(getTotal()).toFixed(2)}</span>
              </div>
              <div className="cart-order-summary-item">
                <span>Shipping</span>
                <span>$ {Number(getTotal() * 0.1).toFixed(2)}</span>
              </div>
              <div className="cart-order-summary-item">
                <span>Tax</span>
                <span>$ {Number(getTotal() * 0.05).toFixed(2)}</span>
              </div>
              <div className="cart-order-summary-item" id="total">
                <span>Total</span>
                <span>
                  ${" "}
                  {(
                    Number(getTotal()) +
                    Number(getTotal() * 0.1) +
                    Number(getTotal() * 0.05)
                  ).toFixed(2)}
                </span>
              </div>
              <StripeCheckout
                name="Online Christmas shop"
                billingAddress
                shippingAddress
                description={`Your total is $${(
                  Number(getTotal()) +
                  Number(getTotal() * 0.1) +
                  Number(getTotal() * 0.05)
                ).toFixed(2)}`}
                amount={
                  (
                    Number(getTotal()) +
                    Number(getTotal() * 0.1) +
                    Number(getTotal() * 0.05)
                  ).toFixed(2) * 100
                }
                token={onToken}
                stripeKey={KEY}
              >
                <button>CHECKOUT NOW</button>
              </StripeCheckout>
            </div>
          </div>
        ) : (
          <div className="cart-empty">
            <img className="cart-empty-img" src={cart_img} alt="" />
            <div className="cart-empty-text">Your cart is empty</div>
            <Link to="/" className="cart-empty-link">
              <button className="cart-empty-button">Go shopping</button>
            </Link>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
