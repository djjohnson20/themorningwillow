function ServicesPreview() {
  return (
    <section className="services-preview" id="services">
      <div className="services-preview__content">
        <p className="services-preview__eyebrow">Our Services</p>
        <h2 className="services-preview__title">
          Care for body, skin, and mind.
        </h2>

        <div className="services-preview__cards">
          <article className="services-preview__card">
            <h3 className="services-preview__card-title">Massage</h3>
            <p className="services-preview__card-text">
              Therapeutic touch to relieve tension, reduce stress, and restore
              balance.
            </p>
          </article>

          <article className="services-preview__card">
            <h3 className="services-preview__card-title">Facial</h3>
            <p className="services-preview__card-text">
              Custom skincare treatments that nourish your skin and renew your
              natural glow.
            </p>
          </article>

          <article className="services-preview__card">
            <h3 className="services-preview__card-title">Life Coaching</h3>
            <p className="services-preview__card-text">
              Personalized guidance to help you gain clarity, confidence, and
              direction.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default ServicesPreview;
