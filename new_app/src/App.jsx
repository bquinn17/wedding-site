import './App.css'
import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import VenueSection from './components/VenueSection'
import WeddingSection from './components/WeddingSection'
import GettingThereSection from './components/GettingThereSection'
import RegistrySection from './components/RegistrySection'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <Navigation />
      </header>
      <main className="app-main">
        <HeroSection />
        <VenueSection />
        <WeddingSection />
        <GettingThereSection />
        <RegistrySection />
      </main>
    </div>
  )
}

export default App
