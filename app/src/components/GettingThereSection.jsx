function GettingThereSection() {
  return (
    <section id="getting-there" className="getting-there-section">
      <div className="getting-there-content">
        <h2 className="section-title fade-in">Getting There</h2>

        <h3 className="subsection-title fade-in-left">Transportation</h3>
        <p className="info-text fade-in-up">
          For those who are flying to Vermont, there are major airports in Burlington, VT and
          nearby in Plattsburgh, NY
        </p>

        <h3 className="subsection-title fade-in-right">Accommodation</h3>
        <p className="info-text fade-in-up">
          We have secured a block of king and double rooms at the{' '}
          <a href="https://maps.app.goo.gl/zRAyCyxL5dzZguwk8" target="_blank" rel="noopener noreferrer">
            Hampton Inn & Suites in Colchester, VT
          </a>
          . You can use this link to book a room with our block discount:
        </p>
        <div className="booking-button-container fade-in-up">
          <a
            href="https://www.hilton.com/en/book/reservation/deeplink/?ctyhocn=BTVMVHX&groupCode=CHH90N&arrivaldate=2026-09-18&departuredate=2026-09-20&cid=OM,WW,HILTONLINK,EN,DirectLink&fromId=HILTONLINKDIRECT"
            target="_blank"
            rel="noopener noreferrer"
            className="booking-button"
          >
            Book Your Room
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15 3h6v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default GettingThereSection;