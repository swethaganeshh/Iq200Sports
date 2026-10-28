import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Twitter, ArrowRight } from 'lucide-react'
import Logo from './Logo.jsx'
import { siteConfig } from '../config/site.js'
import { navLinks, contact, locations, socialLinks } from '../config/contact.js'
import { sports } from '../config/sports.js'
import './Footer.css'

const socialIcons = {
  facebook: Facebook,
  instagram: Instagram,
  youtube: Youtube,
  twitter: Twitter,
}

const Footer = () => {
  const year = new Date().getFullYear()
  const activeSocials = Object.entries(socialLinks).filter(([, url]) => url)

  return (
    <footer className="footer" aria-label="Site footer">
      <div className="container footer__inner">
        <div className="footer__col footer__col--brand">
          <Logo size={48} />
          <p className="footer__desc">{siteConfig.description}</p>
          <div className="footer__contact">
            <a href={`tel:${contact.phone}`} className="footer__contact-item">
              <Phone size={16} /> {contact.phone}
            </a>
            <a href={`mailto:${contact.email}`} className="footer__contact-item">
              <Mail size={16} /> {contact.email}
            </a>
            <div className="footer__contact-item">
              <MapPin size={16} /> Chennai 
            </div>
          </div>
        </div>

        <div className="footer__col">
          <h4>Navigation</h4>
          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Sports</h4>
          <ul className="footer__sports">
            {sports.slice(0, 6).map((sport) => (
              <li key={sport.id}>
                <a href="#sports">{sport.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Locations</h4>
          <ul>
            {locations.map((loc) => (
              <li key={loc.id}>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.mapsQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {loc.city}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn--gold footer__cta">
            Enquire Now <ArrowRight size={16} />
          </a>

          {activeSocials.length > 0 && (
            <div className="footer__social">
              {activeSocials.map(([platform, url]) => {
                const Icon = socialIcons[platform]
                return Icon ? (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit us on ${platform}`}
                  >
                    <Icon size={20} />
                  </a>
                ) : null
              })}
            </div>
          )}
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>&copy; {year} IQ200 Sports Academy. All rights reserved.</p>
          <p className="footer__credit">Train Today. Compete Tomorrow.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
