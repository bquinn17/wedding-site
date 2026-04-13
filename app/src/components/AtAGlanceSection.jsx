import LocationsMap, {
  WELCOME_LOCATION,
  WEDDING_LOCATION,
  HOTEL_LOCATION,
  AIRPORT_LOCATION,
} from './LocationsMap';
import { buildIcsDataUri, buildGoogleCalendarUrl } from '../utils/calendar';

const GoogleCalendarIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path fill="#fff" d="M10 10h28v28H10z" />
    <path fill="#1a73e8" d="M38 38H10V10h28v28zM10 6a4 4 0 00-4 4v28a4 4 0 004 4h28a4 4 0 004-4V10a4 4 0 00-4-4H10z" />
    <path fill="#1a73e8" d="M20.46 28.87c-.58-.39-.98-.96-1.2-1.72l1.63-.67c.12.46.34.82.64 1.07.3.26.67.38 1.1.38.44 0 .81-.13 1.11-.4.3-.27.46-.61.46-1.03 0-.43-.16-.77-.48-1.04-.32-.27-.73-.4-1.22-.4h-.94V23.5h.84c.42 0 .78-.11 1.07-.34.29-.23.43-.54.43-.93 0-.35-.13-.63-.38-.84-.26-.21-.58-.31-.97-.31-.38 0-.69.1-.92.3-.23.2-.4.46-.5.74l-1.62-.67c.18-.5.5-.94.97-1.32.47-.38 1.08-.57 1.83-.57.55 0 1.05.11 1.49.32.44.21.79.51 1.04.89.25.38.37.81.37 1.28 0 .48-.12.89-.35 1.22-.23.34-.52.6-.85.78v.1c.44.18.8.47 1.09.85.29.38.43.84.43 1.37 0 .53-.14 1.01-.41 1.42-.27.42-.65.74-1.13.98-.48.23-1.02.35-1.62.35-.7 0-1.34-.2-1.92-.6z" />
    <path fill="#1a73e8" d="M28.29 22.36l-1.8 1.3-.9-1.37 3.24-2.34h1.25v9.84h-1.79z" />
    <path fill="#ea4335" d="M32 42l10-10-5-2-5 2-2 5z" />
    <path fill="#34a853" d="M4 38v4a4 4 0 004 4h24V38z" />
    <path fill="#1967d2" d="M42 10V6h-4v4" />
    <path fill="#fbbc04" d="M42 10h-4v28h4z" />
    <path fill="#188038" d="M42 38h-4v4h4z" />
  </svg>
);

const AppleIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
  </svg>
);

const WEDDING_EVENT = {
  uid: 'wedding-2026-09-19@bryanandleah',
  title: "Bryan & Leah's Wedding",
  description:
    'Please arrive by 4:00 PM. Ceremony begins at 4:30 PM, followed by cocktail hour and reception until 10:00 PM.',
  location: 'Snow Farm Vineyard & Distillery, 190 W Shore Rd, South Hero, VT 05486',
  start: new Date(Date.UTC(2026, 8, 19, 20, 0, 0)),
  end: new Date(Date.UTC(2026, 8, 20, 2, 0, 0)),
};

const WELCOME_PARTY_EVENT = {
  uid: 'welcome-party-2026-09-18@bryanandleah',
  title: "Bryan & Leah's Welcome Party",
  description: 'Informal welcome party the evening before the wedding. Everyone is welcome!',
  location: 'Foam Brewers, Burlington, VT',
  start: new Date(Date.UTC(2026, 8, 18, 21, 30, 0)),
  end: new Date(Date.UTC(2026, 8, 19, 0, 30, 0)),
};

const TIMELINE = [
  {
    location: WELCOME_LOCATION,
    day: 'Friday',
    date: 'September 18, 2026',
    time: '5:30 – 8:30 PM',
    heading: 'Welcome Party',
    venue: 'Foam Brewers · Burlington, VT',
    description:
      "Kick off the weekend at a lakeside Burlington brewery. Stop by any time to say hello, grab a drink, and meet other guests before the main event. Heavy appetizers and one drink will be on us. The vibe is low-key and dress is casual. Everyone invited to the wedding is welcome.",
    event: WELCOME_PARTY_EVENT,
    icsFilename: 'bryan-and-leah-welcome-party.ics',
  },
  {
    location: WEDDING_LOCATION,
    day: 'Saturday',
    date: 'September 19, 2026',
    time: '4:00 – 10:00 PM',
    heading: 'The Wedding',
    venue: 'Snow Farm Vineyard & Distillery · South Hero, VT',
    description:
      "Please arrive by 4:00 PM so we can start the ceremony at 4:30, followed by cocktail hour and a seated reception on the grounds of a working Lake Champlain island vineyard. Semi-formal attire; the ceremony is outdoors on grass, so plan footwear accordingly.",
    event: WEDDING_EVENT,
    icsFilename: 'bryan-and-leah-wedding.ics',
  },
];

function AtAGlanceSection() {
  return (
    <section id="at-a-glance" className="at-a-glance-section">
      <div className="at-a-glance-content">
        <h2 className="section-title fade-in">Wedding Weekend in Vermont</h2>
        <p className="info-text fade-in-up">
          Here is an overview of the weekend in Vermont: the ceremony and welcome party, 
          where to stay, and how to get here, all on one map.
        </p>

        <LocationsMap />

        <h3 className="subsection-title fade-in-left">Weekend Timeline</h3>
        <ol className="timeline">
          {TIMELINE.map(
            ({ location, day, date, time, heading, venue, description, event, icsFilename }) => (
              <li key={location.id} className="timeline-item fade-in-up">
                <div
                  className="timeline-marker"
                  style={{ '--marker-color': location.color }}
                  aria-hidden="true"
                >
                  <span className="timeline-marker-emoji">{location.emoji}</span>
                </div>
                <div className="timeline-body">
                  <div className="timeline-day">
                    {day} &middot; {date}
                  </div>
                  <h4 className="timeline-heading">{heading}</h4>
                  <div className="timeline-time">{time}</div>
                  <p className="timeline-venue">
                    <a href={location.mapsUrl} target="_blank" rel="noopener noreferrer">
                      {venue}
                    </a>
                  </p>
                  <p className="timeline-description">{description}</p>
                  <div className="timeline-calendar">
                    <span className="add-to-calendar-label">Add to Calendar</span>
                    <div className="booking-button-container calendar-buttons">
                      <a
                        href={buildGoogleCalendarUrl(event)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="booking-button booking-button-small"
                      >
                        <GoogleCalendarIcon />
                        Google
                      </a>
                      <a
                        href={buildIcsDataUri(event)}
                        download={icsFilename}
                        className="booking-button booking-button-small"
                      >
                        <AppleIcon />
                        Apple
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            ),
          )}
        </ol>

        <h3 className="subsection-title fade-in-right">Where to Stay &amp; How to Get Here</h3>

        <div className="places-list">
          <div className="places-item fade-in-up">
            <div
              className="places-marker"
              style={{ '--marker-color': HOTEL_LOCATION.color }}
              aria-hidden="true"
            >
              <span className="places-marker-emoji">{HOTEL_LOCATION.emoji}</span>
            </div>
            <div className="places-body">
              <h4 className="places-heading">Where to Stay</h4>
              <p className="places-venue">
                <a href={HOTEL_LOCATION.mapsUrl} target="_blank" rel="noopener noreferrer">
                  Hampton Inn &amp; Suites · Colchester, VT
                </a>
              </p>
              <p className="places-description">
                We&rsquo;ve reserved a block of king and double rooms about 15 minutes from the
                the welcome party and 25 minutes from the wedding venue. Book by{' '}
                <strong>August 1, 2026</strong> to get the group rate.
              </p>
              <div className="booking-button-container">
                <a
                  href="https://www.hilton.com/en/book/reservation/deeplink/?ctyhocn=BTVMVHX&groupCode=CHH90N&arrivaldate=2026-09-18&departuredate=2026-09-20&cid=OM,WW,HILTONLINK,EN,DirectLink&fromId=HILTONLINKDIRECT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="booking-button"
                >
                  Book Your Room
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15 3h6v6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 14L21 3"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="places-item fade-in-up">
            <div
              className="places-marker"
              style={{ '--marker-color': AIRPORT_LOCATION.color }}
              aria-hidden="true"
            >
              <span className="places-marker-emoji">{AIRPORT_LOCATION.emoji}</span>
            </div>
            <div className="places-body">
              <h4 className="places-heading">Flying In</h4>
              <p className="places-venue">
                <a href={AIRPORT_LOCATION.mapsUrl} target="_blank" rel="noopener noreferrer">
                  Burlington International Airport (BTV)
                </a>
              </p>
              <p className="places-description">
                BTV is the closest major airport, roughly 15 minutes from the hotel. Plattsburgh,
                NY (PBG) is a smaller alternative across Lake Champlain.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AtAGlanceSection;
