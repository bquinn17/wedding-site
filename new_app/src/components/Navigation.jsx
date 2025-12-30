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
        <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>HOME</a></li>
        <li><a href="#venue" onClick={(e) => { e.preventDefault(); scrollToSection('venue'); }}>THE VENUE</a></li>
        <li><a href="#wedding" onClick={(e) => { e.preventDefault(); scrollToSection('wedding'); }}>THE WEDDING</a></li>
        <li><a href="#getting-there" onClick={(e) => { e.preventDefault(); scrollToSection('getting-there'); }}>GETTING THERE</a></li>
        <li><a href="#registry" onClick={(e) => { e.preventDefault(); scrollToSection('registry'); }}>REGISTRY</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;