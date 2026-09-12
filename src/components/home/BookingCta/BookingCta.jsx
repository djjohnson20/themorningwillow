import "./BookingCta.css";

function BookingCta() {
  return (
    <section className="booking-cta">
      <div className="booking-cta__content">
        <p className="booking-cta__eyebrow">Reservations</p>

        <h2 className="booking-cta__title">Give yourself the morning.</h2>

        <a
          className="booking-cta__button"
          href="https://practice-bfafcbf8.clinicsense.com"
          target="_blank"
          rel="noreferrer"
        >
          Reserve
        </a>
      </div>
    </section>
  );
}

export default BookingCta;
