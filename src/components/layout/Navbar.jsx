import { NavLink } from "react-router-dom";
import logo from "../../assets/images/themorningwillowlogo.png";

function Navbar() {
  return (
    <header className="site-header">
      <nav className="site-nav">
        <NavLink className="site-brand" to="/">
          <img className="site-logo" src={logo} alt="The Morning Willow" />
        </NavLink>

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

        <a className="site-nav-cta" href="/#contact">
          Get In Touch
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
