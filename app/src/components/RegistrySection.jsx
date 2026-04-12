function RegistrySection() {
  return (
    <section id="registry" className="registry-section">
      <div className="registry-content">
        <h2 className="section-title fade-in">Registry</h2>
        <p className="info-text fade-in-up">
          In lieu of a traditional wedding registry, we would be honored if you would consider
          supporting{' '}
          <a href="https://pathwaystogo.org/" target="_blank" rel="noopener noreferrer">
            Pathways Togo
          </a>, an organization that is near and dear to our hearts.
        </p>
        <div className="booking-button-container fade-in-up">
          <a
            href="https://secure.actblue.com/donate/gennquinnwedding"
            target="_blank"
            rel="noopener noreferrer"
            className="booking-button"
          >
            Donate
          </a>
        </div>
      </div>
    </section>
  );
}

export default RegistrySection;
