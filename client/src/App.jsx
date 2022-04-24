import Main from "./pages/Main";
import ProductList from "./pages/products/ProductList";
import ProductDetail from "./pages/productDetail/ProductDetail";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Cart from "./pages/cart/Cart";
import Success from "./pages/success/Success";
import Fair from "./pages/fair/Fair";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<Success />} />
        <Route path="/fairs" element={<Fair />} />
      </Routes>
    </Router>
  );
};

export default App;
