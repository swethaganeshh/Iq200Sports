import { Target, Dumbbell, Shield, Users } from 'lucide-react'
import { siteConfig } from '../config/site.js'
import { benefits } from '../config/content.js'
import { useReveal } from '../hooks/useReveal.js'
import './BenefitsSection.css'

const iconMap = { Target, Dumbbell, Shield, Users }

const BenefitsSection = () => {
  const [ref, visible] = useReveal()

  return (
    <section className="section section--navy benefits" id="benefits" aria-label="Why choose IQ200 Sports Academy">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Why Choose Us</span>
          <h2>{siteConfig.benefitsHeading}</h2>
          <p>{siteConfig.benefitsSubheading}</p>
        </div>

        <div className={`benefits__grid reveal ${visible ? 'is-visible' : ''}`} ref={ref}>
          {benefits.map((benefit, index) => {
            const Icon = iconMap[benefit.icon]
            return (
              <article
                key={benefit.id}
                className="benefit-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="benefit-card__icon">
                  {Icon && <Icon size={32} />}
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection
