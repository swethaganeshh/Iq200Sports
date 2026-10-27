import Header from './components/Header.jsx'
import HeroSection from './components/HeroSection.jsx'
import AboutSection from './components/AboutSection.jsx'
import SportsGrid from './components/SportsGrid.jsx'
import BenefitsSection from './components/BenefitsSection.jsx'
import TrainingJourney from './components/TrainingJourney.jsx'
import GalleryGrid from './components/GalleryGrid.jsx'
import TestimonialSection from './components/TestimonialSection.jsx'
import FAQAccordion from './components/FAQAccordion.jsx'
import ContactSection from './components/ContactSection.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'

const App = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SportsGrid />
        <BenefitsSection />
        <TrainingJourney />
        <GalleryGrid />
        <TestimonialSection />
        <FAQAccordion />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
