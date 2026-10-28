import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import Logo from './Logo.jsx'
import { navLinks, contact } from '../config/contact.js'
import { useScrollPosition } from '../hooks/useReveal.js'
import './Header.css'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrolled = useScrollPosition()

  const closeMenu = () => setMenuOpen(false)

  const handleNavClick = (e, href) => {
    closeMenu()
  }

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__bar">
        <div className="container header__inner">
          <a
  href="#home"
  className="header__logo"
  onClick={closeMenu}
  aria-label="IQ200 Sports Academy home"
>
  <img
    src="/1q200.png"
    alt="IQ200 Sports Academy"
    className="header__logo-image"
  />
</a>

          <nav className="header__nav" aria-label="Main navigation">
            <ul>
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header__actions">
            <a href="#contact" className="btn btn--gold header__cta">
              Enquire Now
            </a>
            <button
              className="header__toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`} id="mobile-menu">
        <nav aria-label="Mobile navigation">
          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn--gold mobile-menu__cta" onClick={closeMenu}>
            Enquire Now
          </a>
          {contact.phone && (
            <a href={`tel:${contact.phone}`} className="mobile-menu__phone" onClick={closeMenu}>
              <Phone size={18} /> {contact.phone}
            </a>
          )}
        </nav>
      </div>

      {menuOpen && <div className="mobile-menu__overlay" onClick={closeMenu} aria-hidden="true" />}
    </header>
  )
}

export default Header
