import { Link } from "react-router-dom";
import willowMark from "../../assets/images/williowbranchsunmiddle.png";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__content">
        <Link className="site-footer__brand" to="/">
          <img className="site-footer__mark" src={willowMark} alt="" />
          <span className="site-footer__name">The Morning Willow</span>
          <span className="site-footer__services">Massage & Facials</span>
        </Link>

        <nav className="site-footer__links" aria-label="Footer navigation">
          <Link className="site-footer__link" to="/">
            Home
          </Link>
          <Link className="site-footer__link" to="/resources">
            Resources
          </Link>
          <Link className="site-footer__link" to="/faq">
            FAQ
          </Link>
          <Link className="site-footer__link" to="/privacy-policy">
            Privacy Policy
          </Link>
        </nav>

        <p className="site-footer__copyright">
          © {new Date().getFullYear()} The Morning Willow
        </p>
      </div>
    </footer>
  );
}

export default Footer;
