function Navigation() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navigation">
      <ul>
        <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
        <li><a href="#venue" onClick={(e) => { e.preventDefault(); scrollToSection('venue'); }}>The Venue</a></li>
        <li><a href="#wedding" onClick={(e) => { e.preventDefault(); scrollToSection('wedding'); }}>The Wedding</a></li>
        <li><a href="#getting-there" onClick={(e) => { e.preventDefault(); scrollToSection('getting-there'); }}>Getting There</a></li>
        <li><a href="#rsvp" onClick={(e) => { e.preventDefault(); scrollToSection('rsvp'); }}>RSVP</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;