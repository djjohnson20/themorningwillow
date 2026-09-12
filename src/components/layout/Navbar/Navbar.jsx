import { NavLink } from "react-router-dom";
import willowMark from "../../../assets/images/williowbranchsunmiddle.png";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="site-header">
      <div className="site-header__content">
        <NavLink className="site-brand" to="/">
          <img className="site-brand__mark" src={willowMark} alt="" />

          <span className="site-brand__text">
            <span className="site-brand__name">The Morning Willow</span>
            <span className="site-brand__services">Massage & Facials</span>
          </span>
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

        <a
          className="site-nav-booking"
          href="https://practice-bfafcbf8.clinicsense.com"
          target="_blank"
          rel="noreferrer"
        >
          Reserve
        </a>
      </div>
    </header>
  );
}

export default Navbar;
