import { Link } from "react-router-dom";
import logo from "../../assets/images/themorningwillowlogotransp.png";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__content">
        <div className="site-footer__brand">
          <Link className="site-footer__logo-link" to="/">
            <img
              className="site-footer__logo"
              src={logo}
              alt="The Morning Willow"
            />
          </Link>
        </div>

        <div className="site-footer__group">
          <h3 className="site-footer__heading">Quick Links</h3>
          <div className="site-footer__links">
            <Link className="site-footer__link" to="/">
              Home
            </Link>
            <Link className="site-footer__link" to="/resources">
              Resources
            </Link>
            <Link className="site-footer__link" to="/faq">
              FAQ
            </Link>
          </div>
        </div>

        <div className="site-footer__group">
          <h3 className="site-footer__heading">Policies</h3>
          <div className="site-footer__links">
            <Link className="site-footer__link" to="/privacy-policy">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
