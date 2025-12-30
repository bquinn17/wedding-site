function WeddingSection() {
  return (
    <section id="wedding" className="wedding-section">
      <div className="wedding-content">
        <h2 className="section-title">The Wedding</h2>

        <div className="wedding-details">
          <div className="detail-group">
            <h3 className="detail-label">When</h3>
            <p className="detail-text">Sep 19th, 2026, 4:30 PM</p>
          </div>

          <div className="detail-group">
            <h3 className="detail-label">Where</h3>
            <p className="detail-text">
              <a href="https://maps.app.goo.gl/95xrgDQWuF7CPMqY8" target="_blank" rel="noopener noreferrer">
                Snow Farm Vineyard & Distillery
              </a>
            </p>
            <p className="detail-text">190 W Shore Rd, South Hero, VT 05486</p>
          </div>
        </div>

        <img src="/assets/images/9c608a_47d2926591aa4e8da5ff30adbc4303a8~mv2.png" alt="Decorative element" className="heart-icon" />
      </div>
    </section>
  );
}

export default WeddingSection;