import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div>
        <h2>The Morning Willow</h2>
        <p>Massage, facial, and life coaching</p>
      </div>

      <div>
        <h3>Quick Links</h3>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/booking">Booking</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div>
        <h3>Policies</h3>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/hipaa-rights">HIPAA Rights</Link>
        <Link to="/notice-of-privacy-practices">
          Notice of Privacy Practices
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
