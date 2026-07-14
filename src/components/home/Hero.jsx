import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <p className="hero__eyebrow">Restore. Renew. Realign.</p>
        <h1 className="hero__title">Wellness that nurtures you.</h1>
        <p className="hero__text">
          Massage, skincare, and life coaching designed to help you feel your
          best inside and out.
        </p>

        <div className="hero__actions">
          <Link className="hero__button" to="/booking">
            Book Now
          </Link>
          <Link className="hero__button hero__button-secondary" to="/services">
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
