import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__content">
        <div className="site-footer__brand">
          <h2 className="site-footer__title">The Morning Willow</h2>
          <p className="site-footer__text">
            Massage, facial, and life coaching.
          </p>
        </div>

        <div className="site-footer__group">
          <h3 className="site-footer__heading">Quick Links</h3>
          <div className="site-footer__links">
            <Link className="site-footer__link" to="/">
              Home
            </Link>
            <Link className="site-footer__link" to="/services">
              Services
            </Link>
            <Link className="site-footer__link" to="/booking">
              Booking
            </Link>
            <Link className="site-footer__link" to="/faq">
              FAQ
            </Link>
            <Link className="site-footer__link" to="/contact">
              Contact
            </Link>
          </div>
        </div>

        <div className="site-footer__group">
          <h3 className="site-footer__heading">Policies</h3>
          <div className="site-footer__links">
            <Link className="site-footer__link" to="/privacy-policy">
              Privacy Policy
            </Link>
            <Link className="site-footer__link" to="/hipaa-rights">
              HIPAA Rights
            </Link>
            <Link
              className="site-footer__link"
              to="/notice-of-privacy-practices"
            >
              Notice of Privacy Practices
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
