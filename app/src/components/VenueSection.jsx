function VenueSection() {
  return (
    <section id="venue" className="venue-section">
      <div className="venue-content">
        <h2 className="section-title">The Venue</h2>

        <p className="venue-description">
          Northern Vermont has been an especially meaningful place for us over the course of our
          relationship thus far. From multiple visits to Jay and Bolton where Bryan taught Leah
          how to ski, to falling in love over delicious Ben & Jerry's ice cream, to kayaking and
          camping at Little River, and enjoying Stowe in all seasons, Northern Vermont seemed like
          the perfect place to get married.
        </p>
        <p className="venue-description">
          We fell in love with Snow Farm from the second we
          stepped foot on its beautiful grounds, complete with spectacular views of the Adirondacks
          and Lake Champlain, as well as world class wine and spirits. We hope you'll love it as
          much as we do.
        </p>

        <img src="/assets/images/9c608a_4f46c80b727741b0ab89c97f4a108f02~mv2.png" alt="Snow Farm Logo"
             className="venue-logo"/>
      </div>

      <div className="selfie-section">
        <img src="/assets/images/selfie.jpg" alt="Bryan and Leah" className="selfie-image"/>
      </div>
    </section>
  );
}

export default VenueSection;