import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import "./ClientInformationPolicyPage.css";

function ClientInformationPolicyPage() {
  return (
    <>
      <Navbar />

      <main className="client-information-policy-page">
        <section className="client-information-policy-page__content">
          <p className="client-information-policy-page__eyebrow">
            The Morning Willow
          </p>

          <h1 className="client-information-policy-page__title">
            Client Information Policy
          </h1>

          <p className="client-information-policy-page__effective-date">
            Effective date: [Add date here]
          </p>

          <div className="client-information-policy-page__body">
            <section>
              <h2>Overview</h2>
              <p>
                The Morning Willow values your privacy and handles client
                information with care. This policy explains how information
                shared during appointment scheduling and intake may be used.
              </p>
            </section>

            <section>
              <h2>Information We May Collect</h2>
              <p>
                To schedule appointments and provide services, we may collect
                information you choose to provide, such as your name, contact
                details, appointment preferences, and relevant information from
                intake forms.
              </p>
            </section>

            <section>
              <h2>How We Use Your Information</h2>
              <p>
                Client information may be used to schedule and prepare for
                appointments, communicate about services, support a comfortable
                experience, and maintain business records.
              </p>
            </section>

            <section>
              <h2>Access to Client Information</h2>
              <p>
                Access to client information is limited to the people who need
                it to support scheduling, communication, and the services
                provided by The Morning Willow.
              </p>
            </section>

            <section>
              <h2>Sharing Information</h2>
              <p>
                The Morning Willow does not sell client information. Information
                is only shared when required by law or when you give permission
                for a specific purpose.
              </p>
            </section>

            <section>
              <h2>Your Responsibility</h2>
              <p>
                Please provide accurate information and let us know if any
                relevant details change before an appointment. You may contact
                us with questions about information you have shared.
              </p>
            </section>

            <section>
              <h2>Updates to This Policy</h2>
              <p>
                This policy may be updated as services, scheduling tools, or
                business practices change. The most current version will be
                available on this page.
              </p>
            </section>

            <section>
              <h2>Contact Us</h2>
              <p>
                For questions about this Client Information Policy, contact The
                Morning Willow at [add business email].
              </p>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ClientInformationPolicyPage;
