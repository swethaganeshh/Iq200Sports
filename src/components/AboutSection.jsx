import { siteConfig } from '../config/site.js'
import { aboutHighlights } from '../config/content.js'
import { useReveal } from '../hooks/useReveal.js'
import './AboutSection.css'

const AboutSection = () => {
  const [headRef, headVisible] = useReveal()
  const [cardsRef, cardsVisible] = useReveal()

  return (
    <section className="section section--light" id="about" aria-label="About IQ200 Sports Academy">
      <div className="container">
        <div className="about__layout">
          <div className={`about__intro reveal ${headVisible ? 'is-visible' : ''}`} ref={headRef}>
            <span className="eyebrow">About Us</span>
            <h2>{siteConfig.aboutHeading}</h2>
            <p className="about__lead">{siteConfig.aboutLead}</p>
            <p className="about__body">{siteConfig.aboutBody}</p>
          </div>

          <div className={`about__cards reveal ${cardsVisible ? 'is-visible' : ''}`} ref={cardsRef}>
            {aboutHighlights.map((item) => (
              <article key={item.id} className="about-card">
                <div className="about-card__img">
                  <img src={item.image} alt={item.alt} loading="lazy" />
                  <div className="about-card__overlay" />
                </div>
                <div className="about-card__body">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
