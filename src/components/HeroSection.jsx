import { ArrowRight, Phone } from 'lucide-react'
import { siteConfig } from '../config/site.js'
import { contact } from '../config/contact.js'
import './HeroSection.css'

const HeroSection = () => {
  return (
    <section className="hero" id="home" aria-label="Welcome to IQ200 Sports Academy">
      <div className="hero__bg">
        <img
          src="https://images.pexels.com/photos/38616232/pexels-photo-38616232.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600"
          alt="Two soccer players competing during a match on a green field"
          className="hero__img"
          fetchPriority="high"
        />
        <div className="hero__overlay" />
        <div className="hero__pattern" />
      </div>

      <div className="container hero__content">
        <span className="hero__label">{siteConfig.brandLabel}</span>
        <h1 className="hero__headline">{siteConfig.heroHeadline}</h1>
        <p className="hero__subtext">{siteConfig.heroSubtext}</p>
        <div className="hero__actions">
          <a href="#sports" className="btn btn--gold btn--lg">
            {siteConfig.heroPrimaryCta} <ArrowRight size={20} />
          </a>
          <a href="#contact" className="btn btn--outline btn--lg">
            {siteConfig.heroSecondaryCta}
          </a>
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-num">12</span>
            <span className="hero__stat-label">Sports</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-num">6</span>
            <span className="hero__stat-label">Location</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-num">All</span>
            <span className="hero__stat-label">Age Groups</span>
          </div>
        </div>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span></span>
      </div>
    </section>
  )
}

export default HeroSection
