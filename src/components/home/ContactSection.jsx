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
            <p className="contact-section__value">(555) 123-4567</p>
          </div>

          <div className="contact-section__item">
            <h3 className="contact-section__label">Email</h3>
            <p className="contact-section__value">hello@themorningwillow.com</p>
          </div>

          <div className="contact-section__item">
            <h3 className="contact-section__label">Location</h3>
            <p className="contact-section__value">
              City, State or in-person / virtual details
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
