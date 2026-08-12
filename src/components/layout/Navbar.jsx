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
        </div>

        <a className="site-nav-cta" href="#contact">
          Get In Touch
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
