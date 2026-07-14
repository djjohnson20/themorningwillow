function FaqPreview() {
  return (
    <section className="faq-preview">
      <div className="faq-preview__content">
        <p className="faq-preview__eyebrow">FAQ</p>
        <h2 className="faq-preview__title">Common Questions</h2>

        <div className="faq-preview__list">
          <article className="faq-preview__item">
            <h3 className="faq-preview__question">
              What should I expect during my first visit?
            </h3>
            <p className="faq-preview__answer">
              You will be welcomed in, guided through the service process, and
              given time to ask any questions before your appointment begins.
            </p>
          </article>

          <article className="faq-preview__item">
            <h3 className="faq-preview__question">
              How do I know which service is right for me?
            </h3>
            <p className="faq-preview__answer">
              Service descriptions and future consultation details can help
              guide your choice based on your goals and comfort level.
            </p>
          </article>

          <article className="faq-preview__item">
            <h3 className="faq-preview__question">
              Do you offer gift certificates?
            </h3>
            <p className="faq-preview__answer">
              Gift certificate details can be added here if that becomes part of
              the business offering.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default FaqPreview;
