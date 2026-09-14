import Navbar from "../../components/layout/Navbar/Navbar";
import Footer from "../../components/layout/Footer/Footer";
import "./FaqPage.css";

function FaqPage() {
  return (
    <>
      <Navbar />

      <main className="faq-page">
        <section className="faq-page__hero">
          <div className="faq-page__hero-content">
            <p className="faq-page__eyebrow">Helpful Information</p>

            <h1 className="faq-page__title">Frequently Asked Questions</h1>

            <p className="faq-page__text">
              A few common questions about massage and facial services at The
              Morning Willow.
            </p>
          </div>
        </section>

        <section className="faq-page__questions">
          <div className="faq-page__questions-content">
            <details className="faq-page__item">
              <summary>What should I expect during my first visit?</summary>
              <p>
                Your first visit is a chance to discuss your comfort, goals, and
                any questions you may have before your service begins.
              </p>
            </details>

            <details className="faq-page__item">
              <summary>How do I choose between a massage and a facial?</summary>
              <p>
                Massage is focused on relaxation and body care, while facials
                focus on skin care. If you would like help choosing a service,
                please reach out before booking.
              </p>
            </details>

            <details className="faq-page__item">
              <summary>What should I share before my appointment?</summary>
              <p>
                Please share any sensitivities, allergies, skin concerns,
                injuries, or other information that may help make your
                experience more comfortable.
              </p>
            </details>

            <details className="faq-page__item">
              <summary>How should I prepare for a facial?</summary>
              <p>
                Arrive with any questions you have about your skin. If you are
                concerned about sensitivity, avoid trying new skin-care products
                immediately before your appointment.
              </p>
            </details>

            <details className="faq-page__item">
              <summary>Where is The Morning Willow located?</summary>
              <p>
                The Morning Willow is located at 797 N. Alma School Rd.,
                Chandler, AZ 85224.
              </p>
            </details>

            <details className="faq-page__item">
              <summary>How do I schedule an appointment?</summary>
              <p>
                Appointments can be booked online through{" "}
                <a
                  href="https://practice-bfafcbf8.clinicsense.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  ClinicSense
                </a>
                .
              </p>
            </details>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default FaqPage;
