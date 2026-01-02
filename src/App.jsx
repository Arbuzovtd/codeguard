import Header from './components/Header'
import Hero from './components/Hero'
import Problem from './components/Problem'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
// Future imports (commented out for MVP):
// import Solution from './components/Solution'
// import Benefits from './components/Benefits'
// import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Pricing />
        <FinalCTA />

        {/* Future sections - uncomment when ready */}
        {/* <Solution /> */}
        {/* <Benefits /> */}
        {/* <CTA /> */}
      </main>

      <Footer />
    </div>
  )
}

export default App
