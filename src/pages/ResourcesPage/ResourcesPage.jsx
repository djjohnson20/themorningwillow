import "./ResourcesPage.css";
import Navbar from "../../components/layout/Navbar/Navbar";
import Footer from "../../components/layout/Footer/Footer";

function ResourcesPage() {
  return (
    <>
      <Navbar />

      <main className="resources-page">
        <section className="resources-page__hero">
          <div className="resources-page__hero-content">
            <p className="resources-page__eyebrow">Resources</p>
            <h1 className="resources-page__title">
              Supportive reading for wellness, care, and personal growth.
            </h1>
            <p className="resources-page__text">
              This space will hold informative articles, reflections, and
              helpful resources that can be added over time.
            </p>
          </div>
        </section>
        <section className="resources-page__list">
          <div className="resources-page__list-content">
            <div className="resources-page__grid">
              <article className="resources-page__card">
                <p className="resources-page__card-category">Wellness</p>
                <h2 className="resources-page__card-title">
                  Creating space for rest in everyday life
                </h2>
                <p className="resources-page__card-text">
                  A future article about slowing down, reducing stress, and
                  building more intentional rest into your routine.
                </p>
                <p className="resources-page__card-link">Coming Soon</p>
              </article>

              <article className="resources-page__card">
                <p className="resources-page__card-category">Skincare</p>
                <h2 className="resources-page__card-title">
                  Simple habits that support healthy skin
                </h2>
                <p className="resources-page__card-text">
                  A future article focused on approachable skincare practices
                  that support long-term skin health and confidence.
                </p>
                <p className="resources-page__card-link">Coming Soon</p>
              </article>

              <article className="resources-page__card">
                <p className="resources-page__card-category">Personal Growth</p>
                <h2 className="resources-page__card-title">
                  Building clarity through reflection
                </h2>
                <p className="resources-page__card-text">
                  A future resource about reflection, mindset, and creating
                  direction in seasons of change.
                </p>
                <p className="resources-page__card-link">Coming Soon</p>
              </article>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ResourcesPage;
