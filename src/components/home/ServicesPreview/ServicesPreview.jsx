import "./ServicesPreview.css";

function ServicesPreview() {
  return (
    <section className="services-preview" id="services">
      <div className="services-preview__content">
        <div className="services-preview__heading">
          <p className="services-preview__eyebrow">The Rituals</p>
          <h2 className="services-preview__title">Slow, intentional care</h2>
        </div>

        <div className="services-preview__cards">
          <article className="services-preview__card">
            <p className="services-preview__card-type">90 Minutes</p>
            <h3 className="services-preview__card-title">The Long Exhale</h3>
            <p className="services-preview__card-text">
              A slow, full-body massage with unhurried pressure that follows the
              breath rather than the clock.
            </p>
          </article>

          <article className="services-preview__card">
            <p className="services-preview__card-type">75 Minutes</p>
            <h3 className="services-preview__card-title">
              Morning Light Facial
            </h3>
            <p className="services-preview__card-text">
              A restorative facial built around gentle botanicals and lymphatic
              work, leaving skin quiet, soft, and awake.
            </p>
          </article>

          <article className="services-preview__card">
            <p className="services-preview__card-type">60 Minutes</p>
            <h3 className="services-preview__card-title">The Willow Hour</h3>
            <p className="services-preview__card-text">
              Focused work through the neck, shoulders, and jaw, the places that
              carry everyone else&apos;s weight.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default ServicesPreview;
