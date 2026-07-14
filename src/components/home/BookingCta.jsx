import { Link } from "react-router-dom";

function BookingCta() {
  return (
    <section className="booking-cta">
      <div className="booking-cta__content">
        <h2 className="booking-cta__title">Ready to feel like you again?</h2>
        <p className="booking-cta__text">
          Book your appointment and take the first step toward feeling your
          best.
        </p>
        <Link className="booking-cta__button" to="/booking">
          Book Now
        </Link>
      </div>
    </section>
  );
}

export default BookingCta;
