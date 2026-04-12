import LocationsMap, {
  WELCOME_LOCATION,
  WEDDING_LOCATION,
  HOTEL_LOCATION,
  AIRPORT_LOCATION,
} from './LocationsMap';

const TIMELINE = [
  {
    location: WELCOME_LOCATION,
    day: 'Friday',
    date: 'September 18, 2026',
    time: '5:30 – 8:30 PM',
    heading: 'Welcome Party',
    venue: 'Foam Brewers · Burlington, VT',
    description:
      "Kick off the weekend at a lakeside Burlington brewery. Stop by any time to say hello, grab a pint, and meet other guests before the main event. Dress is casual and the vibe is low-key — no need to arrive right at 5:30. Everyone invited to the wedding is welcome.",
  },
  {
    location: WEDDING_LOCATION,
    day: 'Saturday',
    date: 'September 19, 2026',
    time: '4:00 – 10:00 PM',
    heading: 'The Wedding',
    venue: 'Snow Farm Vineyard & Distillery · South Hero, VT',
    description:
      "Please arrive by 4:00 PM so we can start the ceremony at 4:30. Cocktail hour and a seated reception follow on the grounds of a working Lake Champlain island vineyard. Cocktail attire; the ceremony is outdoors on grass, so plan footwear accordingly.",
  },
];

const PLACES = [
  {
    location: HOTEL_LOCATION,
    heading: 'Where to Stay',
    description:
      "We've reserved a block of king and double rooms at the Hampton Inn & Suites in Colchester — about 20 minutes from both the welcome party and the wedding venue. Book by August 1, 2026 to get the group rate.",
  },
  {
    location: AIRPORT_LOCATION,
    heading: 'Flying In',
    description:
      "Burlington International (BTV) is the closest major airport, roughly 15 minutes from the hotel. Plattsburgh, NY (PBG) is a smaller alternative across Lake Champlain if it works better for your routing.",
  },
];

function AtAGlanceSection() {
  return (
    <section id="at-a-glance" className="at-a-glance-section">
      <div className="at-a-glance-content">
        <h2 className="section-title fade-in">At a Glance</h2>
        <p className="info-text fade-in-up">
          Here&rsquo;s your weekend in Vermont &mdash; the two events, where to stay, and how to
          get here, all on one map.
        </p>

        <LocationsMap />

        <h3 className="subsection-title fade-in-left">Weekend Timeline</h3>
        <ol className="timeline">
          {TIMELINE.map(({ location, day, date, time, heading, venue, description }) => (
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
                <h4 className="timeline-heading">
                  {heading} &middot; <span className="timeline-time">{time}</span>
                </h4>
                <p className="timeline-venue">
                  <a href={location.mapsUrl} target="_blank" rel="noopener noreferrer">
                    {venue}
                  </a>
                </p>
                <p className="timeline-description">{description}</p>
              </div>
            </li>
          ))}
        </ol>

        <h3 className="subsection-title fade-in-right">Helpful Places</h3>
        <ul className="places-list">
          {PLACES.map(({ location, heading, description }) => (
            <li key={location.id} className="places-item fade-in-up">
              <div
                className="places-marker"
                style={{ '--marker-color': location.color }}
                aria-hidden="true"
              >
                <span className="places-marker-emoji">{location.emoji}</span>
              </div>
              <div className="places-body">
                <h4 className="places-heading">{heading}</h4>
                <p className="places-venue">
                  <a href={location.mapsUrl} target="_blank" rel="noopener noreferrer">
                    {location.name}
                  </a>
                </p>
                <p className="places-description">{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default AtAGlanceSection;
