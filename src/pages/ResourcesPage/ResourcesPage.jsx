import "./ResourcesPage.css";
import Navbar from "../../components/layout/Navbar/Navbar";
import Footer from "../../components/layout/Footer/Footer";

const recommendedResources = [
  {
    category: "Physical Therapy",
    title: "Insight Physical Therapy",
    provider: "Dr. Jessica Giardino, PT, DPT, ATC",
    description:
      "Private one-on-one physical therapy sessions individualized to meet your needs.",
    bestFor: "Pain, injury recovery, mobility, strength, and movement",
    link: "https://insightpt.janeapp.com/",
  },
  {
    category: "Nutritional Coaching",
    title: "Wellness & Womb",
    provider: "Samantha Chandler",
    description:
      "Holistic nutrition coaching focused on helping you better understand the connection between nutrition, daily habits, stress, and overall well-being.",
    bestFor:
      "Nutrition education, healthy habits, nourishment, and lifestyle support",
    link: "https://wellnessandwomb.com/",
  },
  {
    category: "Emotional Wellness",
    title: "EFT / Emotional Wellness",
    provider: "Diane Beach",
    description:
      "Guided support focused on slowing down, connecting with emotions, and building awareness of what the body may be communicating.",
    bestFor:
      "Stress, emotional awareness, mind-body connection, and personal growth",
    link: "https://www.dmbhealthconsultant.com/",
  },
  {
    category: "Acupuncture",
    title: "Tempe Community Acupuncture",
    provider: "Dr. Heidi McHardy",
    description:
      "A complementary wellness option for clients seeking support around tension, discomfort, relaxation, and body awareness.",
    bestFor: "Acupuncture, relaxation, overall well-being, and body awareness",
    link: "https://tempeacu.com/",
  },
];

function ResourcesPage() {
  return (
    <>
      <Navbar />

      <main className="resources-page">
        <section className="resources-page__hero">
          <div className="resources-page__hero-content">
            <p className="resources-page__eyebrow">Recommended Resources</p>

            <h1 className="resources-page__title">
              Support for your whole wellness journey.
            </h1>

            <p className="resources-page__text">
              These are trusted resources that support a more holistic approach
              to wellness by considering the connection between the body, mind,
              nervous system, lifestyle, and overall well-being.
            </p>
          </div>
        </section>

        <section className="resources-page__list">
          <div className="resources-page__list-content">
            <div className="resources-page__grid">
              {recommendedResources.map((resource) => (
                <article className="resources-page__card" key={resource.title}>
                  <p className="resources-page__card-category">
                    {resource.category}
                  </p>

                  <h2 className="resources-page__card-title">
                    {resource.title}
                  </h2>

                  <p className="resources-page__card-provider">
                    {resource.provider}
                  </p>

                  <p className="resources-page__card-text">
                    {resource.description}
                  </p>

                  <div className="resources-page__best-for">
                    <p className="resources-page__best-for-label">Best For</p>
                    <p className="resources-page__best-for-text">
                      {resource.bestFor}
                    </p>
                  </div>

                  <a
                    className="resources-page__card-link"
                    href={resource.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Learn More
                  </a>
                </article>
              ))}
            </div>

            <p className="resources-page__disclaimer">
              These recommendations are provided for educational and wellness
              purposes and are not intended to diagnose, treat, or replace
              individualized medical care. Listen to your body and work with an
              appropriately licensed healthcare professional when needed.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default ResourcesPage;
