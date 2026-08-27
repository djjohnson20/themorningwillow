function LocationSection() {
  return (
    <section className="location-section">
      <div className="location-section__content">
        <div className="location-section__details">
          <p className="location-section__eyebrow">Location</p>
          <h2 className="location-section__title">Visit The Morning Willow</h2>

          <address className="location-section__address">
            797 N. Alma School Rd.
            <br />
            Chandler, AZ 85224
          </address>

          <a
            className="location-section__directions"
            href="https://www.google.com/maps/search/?api=1&query=797+N+Alma+School+Rd,+Chandler,+AZ+85224"
            target="_blank"
            rel="noreferrer"
          >
            Get directions
          </a>
        </div>

        <div className="location-section__map">
          <iframe
            title="The Morning Willow location in Chandler, Arizona"
            src="https://www.google.com/maps?q=797+N+Alma+School+Rd,+Chandler,+AZ+85224&output=embed"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default LocationSection;
