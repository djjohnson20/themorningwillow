import "./BookingPage.css";
import Navbar from "../../components/layout/Navbar.jsx";
import Footer from "../../components/layout/Footer.jsx";

function BookingPage() {
  return (
    <>
      <Navbar />

      <main className="booking-page">
        <section className="booking-page__hero">
          <div className="booking-page__hero-content">
            <p className="booking-page__eybrow">Booking</p>
            <h1 className="booking-page__tile">
              Schedule the care that fits your needs.
            </h1>
            <p className="booking-page__text">
              Choose the service that best supports your wellness goals. A
              custom booking experience will be added here as the project grows.
            </p>
          </div>
        </section>

        <section className="booking-page__services">
          <div className="booking-page__services-content">
            <h2 className="booking-page__section-title">Choose a service</h2>

            <div className="booking-page__service-list">
              <article className="booking-page__service-card">
                <h3 className="booking-page__service-title">Massage</h3>
                <p className="booking-page__service-text">
                  Therapeutic massage focused on easing tension, reducing
                  stress, and supporting restoration.
                </p>
              </article>

              <article className="booking-page__service-card">
                <h3 className="booking-page__service-title">Facial</h3>
                <p className="booking-page__service-text">
                  Personalized facial care designed to refresh skin and support
                  natural glow.
                </p>
              </article>

              <article className="booking-page__service-card">
                <h3 className="booking-page__service-title">Life Coaching</h3>
                <p className="booking-page__service-text">
                  Supportive coaching for clarity, confidence, and personal
                  direction.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="booking-page__calendar">
          <div className="booking-page__calendar-content">
            <h2 className="booking-page__section-title">Booking calendar</h2>
            <div className="booking-page__calendar-placeholder">
              <p className="booking-page__calendar-text">
                Your custom booking calendar and appointment selection
                experience will live here.
              </p>
            </div>
          </div>
        </section>

        <section className="booking-page__help">
          <div className="booking-page__help-content">
            <h2 className="booking-page__section-title">Need help booking?</h2>
            <p className="booking-page__help-text">
              If you are unsure which service is right for you, contact support
              information can be added here later to help guide the next step.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default BookingPage;
