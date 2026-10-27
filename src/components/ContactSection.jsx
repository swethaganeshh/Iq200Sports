import { siteConfig } from '../config/site.js'
import ContactForm from './ContactForm.jsx'
import LocationCards from './LocationCards.jsx'
import { useReveal } from '../hooks/useReveal.js'
import './ContactSection.css'

const ContactSection = () => {
  const [ref, visible] = useReveal()

  return (
    <section className="section contact-section" id="contact" aria-label="Contact and locations">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Get In Touch</span>
          <h2>{siteConfig.contactHeading}</h2>
          <p>{siteConfig.contactSubheading}</p>
        </div>

        <div className={`contact-layout reveal ${visible ? 'is-visible' : ''}`} ref={ref}>
          <LocationCards />
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default ContactSection
