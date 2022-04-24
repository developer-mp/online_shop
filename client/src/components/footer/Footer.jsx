import { Facebook, Instagram, Twitter } from "@material-ui/icons";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-bottom">
      <div className="footer">
        <div className="footer-left">
          <h1>Online Christmas market</h1>
          <p>
            Shop at our online Christmas market and find the perfect gift for
            your family and loved ones. We offer a variaty of unique, handmade,
            and original products from individuals and small businesses. Check
            out our seasonal outdoor fairs and marketplaces in and around the
            city.
          </p>
          <div className="footer-social-media">
            <div className="footer-social-media-icon">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                className="footer-social-media-icon-link"
              >
                <Facebook />
              </a>
            </div>
            <div className="footer-social-media-icon">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="footer-social-media-icon-link"
              >
                <Instagram />
              </a>
            </div>
            <div className="footer-social-media-icon">
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                className="footer-social-media-icon-link"
              >
                <Twitter />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-center">
          <h3 className="footer-title">Links</h3>
          <ul className="footer-list">
            <li className="footer-list-item">Home</li>
            <li className="footer-list-item">Cart</li>
            <li className="footer-list-item">Product categories</li>
            <li className="footer-list-item">My Account</li>
            <li className="footer-list-item">Order tracking</li>
            <li className="footer-list-item">Gift cards</li>
          </ul>
        </div>
        <div className="footer-right">
          <h3 className="footer-title">Let us help you</h3>
          <ul className="footer-list">
            <li className="footer-list-item">Contact us</li>
            <li className="footer-list-item">Payment options</li>
            <li className="footer-list-item">Shipping rates</li>
            <li className="footer-list-item">Return policies</li>
            <li className="footer-list-item">Become a member</li>
            <li className="footer-list-item">Terms</li>
          </ul>
        </div>
      </div>
      <div className="footer-mobile">
        <h1>Online Christmas market</h1>
        <div className="footer-social-media">
          <div className="footer-social-media-icon">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              className="footer-social-media-icon-link"
            >
              <Facebook />
            </a>
          </div>
          <div className="footer-social-media-icon">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="footer-social-media-icon-link"
            >
              <Instagram />
            </a>
          </div>
          <div className="footer-social-media-icon">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
              className="footer-social-media-icon-link"
            >
              <Twitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
