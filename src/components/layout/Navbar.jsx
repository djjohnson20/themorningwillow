import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="site-header">
      <nav className="site-nav">
        <NavLink className="site-brand" to="/">
          The Morning Willow
        </NavLink>

        <div className="site-nav-links">
          <NavLink className="site-nav-link" to="/">
            Home
          </NavLink>
          <NavLink className="site-nav-link" to="/services">
            Services
          </NavLink>
          <NavLink className="site-nav-link" to="/booking">
            Booking
          </NavLink>
          <NavLink className="site-nav-link" to="/faq">
            FAQ
          </NavLink>
          <NavLink className="site-nav-link" to="/contact">
            Contact
          </NavLink>
        </div>

        <NavLink className="site-nav-cta" to="/booking">
          Book Now
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
