import { Link } from "react-router-dom";
import "./ServicesPage.css";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="services-page">
        <section className="services-page__hero">
          <div className="services-page__hero-content">
            <p className="services-page__eyebrow">Services</p>
            <h1 className="services-page__title">
              Care designed for your whole self.
            </h1>
            <p className="services-page__text">
              The Morning Willow offers massage, facial services, and life
              coaching to support restoration, confidence, and personal
              well-being.
            </p>
          </div>
        </section>
        <section className="services-page__list">
          <div className="services-page__list-content">
            <article className="services-page__card">
              <h2 className="services-page__card-title">Massage</h2>
              <p className="services-page__card-text">
                Therapeutic massage sessions designed to help ease tension,
                reduce stress, and support physical restoration.
              </p>
              <p className="services-page__card-details">
                This service can be described in more detail later with session
                options, benefits, and expectations for new clients.
              </p>
            </article>

            <article className="services-page__card">
              <h2 className="services-page__card-title">Facial</h2>
              <p className="services-page__card-text">
                Facial services focused on skincare, renewal, and helping your
                natural glow come through with thoughtful, personalized care.
              </p>
              <p className="services-page__card-details">
                You can later add treatment types, skin goals, recommended visit
                frequency, and any preparation notes here.
              </p>
            </article>

            <article className="services-page__card">
              <h2 className="services-page__card-title">Life Coaching</h2>
              <p className="services-page__card-text">
                Supportive coaching designed to help bring clarity, confidence,
                and direction to the areas of life where you want to grow.
              </p>
              <p className="services-page__card-details">
                This section can later include your coaching approach, focus
                areas, and what clients can expect from sessions.
              </p>
            </article>
          </div>
        </section>

        <section className="services-page__cta">
          <div className="services-page__cta-content">
            <h2 className="services-page__cta-title">
              Ready to book the service that fits you best?
            </h2>
            <p className="services-page__cta-text">
              Take the next step toward rest, renewal, and personal wellness.
            </p>
            <Link className="services-page__cta-button" to="/booking">
              Book Now
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ServicesPage;
