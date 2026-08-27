import { NavLink } from "react-router-dom";
import logo from "../../assets/images/themorningwillowlogotransp.png";

function Navbar() {
  return (
    <header className="site-header">
      <div className="site-header__content">
        <NavLink className="site-brand" to="/">
          <img className="site-logo" src={logo} alt="The Morning Willow" />
        </NavLink>

        <nav className="site-nav" aria-label="Main navigation">
          <div className="site-nav-links">
            <NavLink className="site-nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="site-nav-link" to="/resources">
              Resources
            </NavLink>
            <NavLink className="site-nav-link" to="/faq">
              FAQ
            </NavLink>
          </div>
        </nav>
        <a className="site-nav-booking" href="ADD-BOOKING-LINK-HERE">
          Book Appointment
        </a>
      </div>
    </header>
  );
}

export default Navbar;
