function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <p className="hero__eyebrow">Restore. Renew. Realign.</p>
        <h1 className="hero__title">Wellness that nurtures you.</h1>
        <p className="hero__text">
          Massage and facial services designed to help you feel your best inside
          and out.
        </p>

        <div className="hero__actions">
          <a className="hero__button" href="#contact">
            Get In Touch
          </a>
          <a className="hero__button hero__button-secondary" href="#services">
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
