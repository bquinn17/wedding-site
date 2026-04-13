import './App.css'
import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import VenueSection from './components/VenueSection'
import SelfieSection from './components/SelfieSection'
import SnowFarmParallax from './components/SnowFarmParallax'
import AtAGlanceSection from './components/AtAGlanceSection'
import RsvpSection from './components/RsvpSection'
import RegistrySection from './components/RegistrySection'
import { useParallax } from './hooks/useParallax'
import { useScrollAnimation } from './hooks/useScrollAnimation'

function App() {
  useParallax();
  useScrollAnimation();

  return (
    <div className="app">
      <header className="app-header">
        <Navigation />
      </header>
      <main className="app-main">
        <HeroSection />
        <AtAGlanceSection />
        <SnowFarmParallax />
        <RegistrySection />
        <SelfieSection />
        <RsvpSection />
        <VenueSection />
      </main>
    </div>
  )
}

export default App
