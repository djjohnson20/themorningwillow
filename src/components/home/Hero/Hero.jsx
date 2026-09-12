import massageImage from "../../../assets/images/womenonmassagetable.jpg";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <div className="hero__copy">
          <p className="hero__eyebrow">Restore. Renew. Realign.</p>

          <h1 className="hero__title">Wellness that nurtures you.</h1>

          <p className="hero__text">
            Massage and facial services designed to help you feel your best
            inside and out.
          </p>
        </div>

        <div className="hero__image-wrapper">
          <img
            className="hero__image"
            src={massageImage}
            alt="Client resting on a massage table during a treatment"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
