import Navbar from "../../components/layout/Navbar/Navbar";
import Footer from "../../components/layout/Footer/Footer";
import "./PrivacyPolicyPage.css";

function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />

      <main className="privacy-policy-page">
        <section className="privacy-policy-page__content">
          <p className="privacy-policy-page__eyebrow">The Morning Willow</p>
          <h1 className="privacy-policy-page__title">Privacy Policy</h1>
          <p className="privacy-policy-page__effective-date">
            Effective date: [Add date here]
          </p>

          <div className="privacy-policy-page__body">
            <section>
              <h2>Overview</h2>
              <p>
                The Morning Willow respects your privacy. This policy explains
                how we handle information you choose to share when contacting us
                or using this website.
              </p>
            </section>

            <section>
              <h2>Information You May Share</h2>
              <p>
                When you contact us by phone or email, you may choose to share
                your name, contact details, and information related to your
                inquiry.
              </p>
            </section>

            <section>
              <h2>How We Use Information</h2>
              <p>
                We use information you share to respond to your questions,
                communicate about services, and provide client support.
              </p>
            </section>

            <section>
              <h2>Sharing Your Information</h2>
              <p>
                We do not sell your personal information. We only share
                information when required by law or when necessary to provide a
                service you request.
              </p>
            </section>

            <section>
              <h2>Changes to This Policy</h2>
              <p>
                We may update this policy as our website and services change.
                Any updates will be posted on this page.
              </p>
            </section>

            <section>
              <h2>Contact Us</h2>
              <p>
                For questions about this Privacy Policy, contact The Morning
                Willow at [add business email].
              </p>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default PrivacyPolicyPage;
