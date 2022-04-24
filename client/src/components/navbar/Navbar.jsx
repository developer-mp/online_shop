import "./navbar.css";
import { Badge } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../redux/apiCalls";
import { Dropdown, DropdownButton } from "react-bootstrap";

const Navbar = () => {
  const user = useSelector((state) => state.user.currentUser);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const getCount = () => {
    return cart.products.reduce(
      (count, product) => count + product.quantity,
      0
    );
  };

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="navbar-menu">
      <div className="navbar-wrapper">
        <div className="navbar-left">
          <div className="navbar-logo">Online Christmas market</div>
          <Link to="/" className="navbar-item-link">
            <div className="navbar-item">Home</div>
          </Link>
          <Link to="/fairs" className="navbar-item-link">
            <div className="navbar-item">Fairs</div>
          </Link>
        </div>
        <div className="navbar-right">
          <div className="navbar-search-container">
            <Search className="navbar-search" />
            <input
              className="navbar-input"
              placeholder="What are you looking for?"
            />
          </div>
          {user ? (
            <DropdownButton id="navbar-dropdown" title={user.username}>
              <Dropdown.Item href="/">My account</Dropdown.Item>
              <Dropdown.Item href="/" onClick={handleLogout}>
                Logout
              </Dropdown.Item>
            </DropdownButton>
          ) : (
            <Link to="/login" className="navbar-item-link">
              <div className="navbar-item">Login</div>
            </Link>
          )}
          <div className="navbar-item">Orders</div>
          <Link to="/cart">
            <div className="navbar-item">
              <Badge badgeContent={getCount()} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </div>
          </Link>
          <div className="navbar-hamburger">
            {user ? (
              <div className="navbar-mobile">
                <DropdownButton id="navbar-dropdown" title={<MenuIcon />}>
                  <Dropdown.Item href="/">My account</Dropdown.Item>
                  <Dropdown.Item href="/">Home</Dropdown.Item>
                  <Dropdown.Item href="/fairs">Fairs</Dropdown.Item>
                  <Dropdown.Item href="/cart">Orders</Dropdown.Item>
                  <Dropdown.Item href="/" onClick={handleLogout}>
                    Logout
                  </Dropdown.Item>
                </DropdownButton>
                <Link to="/cart">
                  <div className="navbar-item-cart">
                    <Badge badgeContent={getCount()} color="primary">
                      <ShoppingCartOutlined />
                    </Badge>
                  </div>
                </Link>
              </div>
            ) : (
              <div className="navbar-mobile">
                <div className="navbar-mobile-logo">
                  Online Christmas market
                </div>
                <DropdownButton id="navbar-dropdown" title={<MenuIcon />}>
                  <Dropdown.Item className="navbar-dropdown-item" href="/">
                    Home
                  </Dropdown.Item>
                  <Dropdown.Item className="navbar-dropdown-item" href="/fairs">
                    Fairs
                  </Dropdown.Item>
                  <Dropdown.Item className="navbar-dropdown-item" href="/cart">
                    Orders
                  </Dropdown.Item>
                  <Dropdown.Item className="navbar-dropdown-item" href="/login">
                    Login
                  </Dropdown.Item>
                </DropdownButton>
                <Link to="/cart">
                  <div className="navbar-item-cart">
                    <Badge badgeContent={getCount()} color="primary">
                      <ShoppingCartOutlined />
                    </Badge>
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
