import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Problem from './components/Problem'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import EmailModal from './components/EmailModal'
// Future imports (commented out for MVP):
// import Solution from './components/Solution'
// import Benefits from './components/Benefits'
// import CTA from './components/CTA'

function App() {
  const [isEmailModalOpen, setEmailModalOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState(null)

  const openEmailModal = (plan) => {
    setSelectedPlan(plan)
    setEmailModalOpen(true)
  }

  const closeEmailModal = () => {
    setEmailModalOpen(false)
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />

      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Pricing onSelectPlan={openEmailModal} />
        <FinalCTA />

        {/* Future sections - uncomment when ready */}
        {/* <Solution /> */}
        {/* <Benefits /> */}
        {/* <CTA /> */}
      </main>

      <Footer />
      <EmailModal isOpen={isEmailModalOpen} plan={selectedPlan} onClose={closeEmailModal} />
    </div>
  )
}

export default App
