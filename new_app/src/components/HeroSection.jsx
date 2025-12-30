function HeroSection() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-image">
        <img src="/assets/images/lake_champlain.jpg" alt="Lake Champlain" />
      </div>

      <div className="hero-content">
        <div className="hero-box">
          <div className="decorative-images">
            <img src="/assets/images/9c608a_9a506a62e136414bbb7c1df06e981721~mv2.png" alt="Decorative left" className="decorative-left" />
            <img src="/assets/images/9c608a_2355b4068cd14551b705e9c289b12262~mv2.png" alt="Decorative right" className="decorative-right" />
          </div>

          <h1 className="names">Bryan  &  Leah</h1>

          <h2 className="save-date">Save The Date!</h2>

          <img src="/assets/images/9c608a_47d2926591aa4e8da5ff30adbc4303a8~mv2.png" alt="Decorative element" className="heart-icon" />

          <h3 className="invitation">Joyfully invite you to their wedding celebration</h3>

          <h2 className="wedding-date">Sep 19, 2026</h2>

          <div className="venue-info">
            <p>Please join us at</p>
            <p>Snow Farm Vineyard</p>
            <p>South Hero, VT</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;