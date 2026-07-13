import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav>
        <div>The Morning Willow</div>

        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/booking">Booking</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        <NavLink to="/booking">Book Now</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
