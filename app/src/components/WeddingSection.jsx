function WeddingSection() {
  return (
    <section id="wedding" className="wedding-section">
      <div className="wedding-content">
        <h2 className="section-title fade-in">The Wedding</h2>

        <div className="wedding-details">
          <div className="detail-group fade-in-up">
            <h3 className="detail-label">When</h3>
            <p className="detail-text">Saturday, September 19th, 2026, 4:30 PM</p>
          </div>

          <div className="detail-group fade-in-up">
            <h3 className="detail-label">Where</h3>
            <p className="detail-text">
              <a href="https://maps.app.goo.gl/95xrgDQWuF7CPMqY8" target="_blank" rel="noopener noreferrer">
                Snow Farm Vineyard & Distillery
              </a>
            </p>
            <p className="detail-text">190 W Shore Rd, South Hero, VT 05486</p>
            <div className="map-container fade-in-up">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.5216431875197!2d-73.333023!3d44.626801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cca6a4d7f5d9b67%3A0xa3dea3647a8df8d6!2sSnow%20Farm%20Vineyard%20%26%20Distillery!5e1!3m2!1sen!2sus!4v1767197076904!5m2!1sen!2sus"
                width="600"
                height="450"
                style={{border: 0}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Snow Farm Vineyard Location"
              ></iframe>
            </div>
          </div>
        </div>

        <img src="/assets/images/9c608a_47d2926591aa4e8da5ff30adbc4303a8~mv2.png" alt="Decorative element"
             className="heart-icon zoom-in"/>

        <div className="welcome-party-note fade-in-up">
          <h3 className="subsection-title">Welcome Party</h3>
          <p className="info-text">
            Join us for an informal welcome party the evening before the wedding, Friday, September 18th in the
            Burlington, VT area. Details to follow.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WeddingSection;