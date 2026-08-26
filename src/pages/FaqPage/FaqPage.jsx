import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
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
                focus on skin care. Reach out before your appointment if you
                would like help choosing the service that feels right for you.
              </p>
            </details>

            <details className="faq-page__item">
              <summary>What should I share before my appointment?</summary>
              <p>
                Please let us know about any sensitivities, allergies, skin
                concerns, injuries, or other information that may help make your
                experience more comfortable.
              </p>
            </details>

            <details className="faq-page__item">
              <summary>How should I prepare for a facial?</summary>
              <p>
                Arrive with any questions you have about your skin. Avoid trying
                new skin-care products immediately before your appointment if
                you are concerned about sensitivity.
              </p>
            </details>

            <details className="faq-page__item">
              <summary>How do I schedule an appointment?</summary>
              <p>
                Contact The Morning Willow by phone or email to ask about
                availability and schedule your service.
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
