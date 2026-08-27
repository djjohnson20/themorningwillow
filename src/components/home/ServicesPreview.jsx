function ServicesPreview() {
  return (
    <section className="services-preview" id="services">
      <div className="services-preview__content">
        <p className="services-preview__eyebrow">Our Services</p>
        <h2 className="services-preview__title">Care for body and skin.</h2>

        <div className="services-preview__cards">
          <article className="services-preview__card">
            <h3 className="services-preview__card-title">Massage</h3>
            <p className="services-preview__card-text">
              Therapeutic touch to relieve tension, reduce stress, and restore
              balance.
            </p>
          </article>

          <article className="services-preview__card">
            <h3 className="services-preview__card-title">
              Facial (Coming Soon)
            </h3>
            <p className="services-preview__card-text">
              Custom skincare treatments that nourish your skin and renew your
              natural glow.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default ServicesPreview;
