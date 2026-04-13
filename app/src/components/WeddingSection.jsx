import { buildIcsDataUri, buildGoogleCalendarUrl } from '../utils/calendar';

const WEDDING_EVENT = {
  uid: 'wedding-2026-09-19@bryanandleah',
  title: "Bryan & Leah's Wedding",
  description: 'Please arrive by 4:00 PM. Ceremony begins at 4:30 PM, followed by cocktail hour and reception until 10:00 PM.',
  location: 'Snow Farm Vineyard & Distillery, 190 W Shore Rd, South Hero, VT 05486',
  // Sept 19, 2026, 4:00 PM EDT (UTC-4) = 20:00 UTC
  start: new Date(Date.UTC(2026, 8, 19, 20, 0, 0)),
  // Sept 19, 2026, 10:00 PM EDT = Sept 20, 02:00 UTC
  end: new Date(Date.UTC(2026, 8, 20, 2, 0, 0)),
};

const WELCOME_PARTY_EVENT = {
  uid: 'welcome-party-2026-09-18@bryanandleah',
  title: "Bryan & Leah's Welcome Party",
  description: 'Informal welcome party the evening before the wedding. Everyone is welcome!',
  location: 'Foam Brewers, Burlington, VT',
  // Sept 18, 2026, 5:30 PM EDT = 21:30 UTC
  start: new Date(Date.UTC(2026, 8, 18, 21, 30, 0)),
  // Sept 18, 2026, 8:30 PM EDT = Sept 19, 00:30 UTC
  end: new Date(Date.UTC(2026, 8, 19, 0, 30, 0)),
};

const WEDDING_ICS = buildIcsDataUri(WEDDING_EVENT);
const WEDDING_GOOGLE = buildGoogleCalendarUrl(WEDDING_EVENT);
const WELCOME_PARTY_ICS = buildIcsDataUri(WELCOME_PARTY_EVENT);
const WELCOME_PARTY_GOOGLE = buildGoogleCalendarUrl(WELCOME_PARTY_EVENT);

function WeddingSection() {
  return (
    <section id="wedding" className="wedding-section">
      <div className="wedding-content">
        <h2 className="section-title fade-in">The Wedding</h2>

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

        <div className="wedding-details">
          <div className="detail-group fade-in-up">
            <h3 className="detail-label">When</h3>
            <p className="detail-text">Saturday, September 19th, 2026</p>
            <p className="detail-text">Please arrive by 4:00 PM &mdash; ceremony begins at 4:30 PM</p>
            <p className="detail-text">Cocktail hour and reception to follow.</p>
          </div>

          <div className="detail-group fade-in-up">
            <h3 className="detail-label">Where</h3>
            <p className="detail-text">
              <a href="https://maps.app.goo.gl/95xrgDQWuF7CPMqY8" target="_blank" rel="noopener noreferrer">
                Snow Farm Vineyard & Distillery
              </a>
            </p>
            <p className="detail-text">190 W Shore Rd, South Hero, VT 05486</p>
          </div>  
        </div>

        <div className="add-to-calendar fade-in-up">
          <p className="add-to-calendar-label">Add to Calendar</p>
          <div className="booking-button-container">
            <a
              href={WEDDING_GOOGLE}
              target="_blank"
              rel="noopener noreferrer"
              className="booking-button"
            >
              Google Calendar
            </a>
            <a
              href={WEDDING_ICS}
              target="_blank"
              rel="noopener noreferrer"
              className="booking-button"
            >
              Apple Calendar
            </a>
            <a
              href={WEDDING_ICS}
              download="bryan-and-leah-wedding.ics"
              className="booking-button"
            >
              Download .ics
            </a>
          </div>
        </div>

        <img src="/assets/images/9c608a_47d2926591aa4e8da5ff30adbc4303a8~mv2.png" alt="Decorative element"
             className="heart-icon zoom-in"/>

        <div className="welcome-party-note fade-in-up">
          <h3 className="subsection-title">Welcome Party</h3>
          <p className="info-text">
            Join us for an informal welcome party the evening before the wedding. The party will be held at{' '}
            <a href="https://maps.app.goo.gl/tGgvTSm8D7wynTsC7" target="_blank" rel="noopener noreferrer">
              Foam Brewers in Burlington, VT
            </a>{' '}
            on Friday, September 18th, from 5:30 to 8:30 PM. Everyone is welcome! Heavy appitizers and one free 
            drink will be on us.
          </p>
          <div className="add-to-calendar">
            <p className="add-to-calendar-label">Add to Calendar</p>
            <div className="booking-button-container">
              <a
                href={WELCOME_PARTY_GOOGLE}
                target="_blank"
                rel="noopener noreferrer"
                className="booking-button"
              >
                Google Calendar
              </a>
              <a
                href={WELCOME_PARTY_ICS}
                target="_blank"
                rel="noopener noreferrer"
                className="booking-button"
              >
                Apple Calendar
              </a>
              <a
                href={WELCOME_PARTY_ICS}
                download="bryan-and-leah-welcome-party.ics"
                className="booking-button"
              >
                Download .ics
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WeddingSection;
