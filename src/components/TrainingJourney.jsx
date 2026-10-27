import { Compass, MessageSquare, CircleCheck as CheckCircle, Flag, ArrowRight } from 'lucide-react'
import { siteConfig } from '../config/site.js'
import { journeySteps } from '../config/content.js'
import { useReveal } from '../hooks/useReveal.js'
import './TrainingJourney.css'

const iconMap = { Compass, MessageSquare, CheckCircle, Flag }

const TrainingJourney = () => {
  const [ref, visible] = useReveal()

  return (
    <section className="section journey" id="journey" aria-label="Training journey">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Getting Started</span>
          <h2>{siteConfig.journeyHeading}</h2>
          <p>{siteConfig.journeySubheading}</p>
        </div>

        <div className={`journey__steps reveal ${visible ? 'is-visible' : ''}`} ref={ref}>
          <div className="journey__line" aria-hidden="true" />
          {journeySteps.map((step, index) => {
            const Icon = iconMap[step.icon]
            return (
              <div
                key={step.id}
                className="journey-step"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="journey-step__num">{step.id}</div>
                <div className="journey-step__icon">
                  {Icon && <Icon size={28} />}
                </div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            )
          })}
        </div>

        <div className="journey__cta">
          <a href="#contact" className="btn btn--gold btn--lg">
            {siteConfig.journeyCta} <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default TrainingJourney
