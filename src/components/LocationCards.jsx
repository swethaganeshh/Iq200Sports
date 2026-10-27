import { MapPin, Clock, ArrowUpRight } from 'lucide-react'
import { locations, contact } from '../config/contact.js'
import { Phone, Mail, MessageCircle, User } from 'lucide-react'
import './LocationCards.css'

const LocationCards = () => {
  const whatsappLink = contact.whatsapp
    ? `https://wa.me/${contact.whatsapp}`
    : null

  return (
    <div className="locations-panel">
      <div className="locations-list">
        {locations.map((loc) => (
          <div key={loc.id} className="location-card">
            <div className="location-card__header">
              <MapPin size={22} className="location-card__pin" />
              <h3>{loc.city}</h3>
            </div>
            <div className="location-card__body">
              <div className="location-card__row">
                <strong>Address</strong>
                <span>{loc.address}</span>
              </div>
              <div className="location-card__row">
                <strong>Hours</strong>
                <span>{loc.hours}</span>
              </div>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.mapsQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="location-card__map-link"
              >
                View on Google Maps <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="contact-methods">
        <h3>Contact Us Directly</h3>
        {contact.contactPerson && (
          <div className="contact-method contact-method--person">
            <span className="contact-method__icon"><User size={20} /></span>
            <div>
              <strong>Contact Person</strong>
              <span>{contact.contactPerson}</span>
            </div>
          </div>
        )}
        <a href={`tel:${contact.phone}`} className="contact-method">
          <span className="contact-method__icon"><Phone size={20} /></span>
          <div>
            <strong>Phone</strong>
            <span>{contact.phone}</span>
          </div>
        </a>
        <a href={`mailto:${contact.email}`} className="contact-method">
          <span className="contact-method__icon"><Mail size={20} /></span>
          <div>
            <strong>Email</strong>
            <span>{contact.email}</span>
          </div>
        </a>
        {whatsappLink && (
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="contact-method contact-method--whatsapp">
            <span className="contact-method__icon"><MessageCircle size={20} /></span>
            <div>
              <strong>WhatsApp</strong>
              <span>{contact.whatsappDisplay}</span>
            </div>
          </a>
        )}
      </div>
    </div>
  )
}

export default LocationCards


export default LocationCards