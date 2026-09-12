import facialImage from "../../../assets/images/womenfacehandsontempels.jpg";
import towelsImage from "../../../assets/images/towelsandleaves.jpg";
import "./PhilosophySection.css";

function PhilosophySection() {
  return (
    <section className="philosophy-section">
      <div className="philosophy-section__content">
        <div className="philosophy-section__main-image-wrapper">
          <img
            className="philosophy-section__main-image"
            src={facialImage}
            alt="Client receiving a relaxing facial treatment"
          />
        </div>

        <div className="philosophy-section__copy">
          <p className="philosophy-section__eyebrow">The Philosophy</p>

          <h2 className="philosophy-section__title">
            Rooted, resilient, and gently held.
          </h2>

          <p className="philosophy-section__text">
            The willow bends without breaking. Its branches fall like a soft,
            protective canopy, the same feeling we build into every treatment:
            unhurried hands, warm linen, and a room that asks nothing of you.
          </p>

          <p className="philosophy-section__text">
            A quiet, intentional self-care experience where you can slow down,
            release tension, and reconnect with yourself.
          </p>

          <img
            className="philosophy-section__supporting-image"
            src={towelsImage}
            alt="Folded towels and greenery in a calm treatment space"
          />
        </div>
      </div>
    </section>
  );
}

export default PhilosophySection;
