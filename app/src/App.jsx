import './App.css'
import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import VenueSection from './components/VenueSection'
import SelfieSection from './components/SelfieSection'
import WeddingSection from './components/WeddingSection'
import SnowFarmParallax from './components/SnowFarmParallax'
import GettingThereSection from './components/GettingThereSection'
import RsvpSection from './components/RsvpSection'
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
        <WeddingSection />
        <SnowFarmParallax />
        <GettingThereSection />
        <SelfieSection />
        <RsvpSection />
        <VenueSection />
      </main>
    </div>
  )
}

export default App
