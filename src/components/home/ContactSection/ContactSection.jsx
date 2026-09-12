import "./ContactSection.css";

function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-section__content">
        <p className="contact-section__eyebrow">Contact</p>
        <h2 className="contact-section__title">Get in touch</h2>
        <p className="contact-section__text">
          If you have questions about services or would like to connect, use the
          contact information below.
        </p>

        <div className="contact-section__details">
          <div className="contact-section__item">
            <h3 className="contact-section__label">Phone</h3>
            <a className="contact-section__value" href="tel:+14806481621">
              (480) 648-1621
            </a>
          </div>

          <div className="contact-section__item">
            <h3 className="contact-section__label">Email</h3>
            <a
              className="contact-section__value"
              href="mailto:themorningwillowllc@gmail.com"
            >
              themorningwillowllc@gmail.com
            </a>
          </div>

          <div className="contact-section__item">
            <h3 className="contact-section__label">Instagram</h3>
            <a
              className="contact-section__value"
              href="https://www.instagram.com/themorningwillow_/"
              target="_blank"
              rel="noreferrer"
            >
              @themorningwillow_
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
