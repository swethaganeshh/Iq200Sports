import { ArrowRight } from 'lucide-react'
import './SportCard.css'

const SportCard = ({ sport, onClick, delay = 0 }) => {
  return (
    <article
      className="sport-card"
      onClick={onClick}
      style={{ animationDelay: `${delay}s` }}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${sport.name}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick()
        }
      }}
    >
      <div className="sport-card__img-wrap">
        <img src={sport.image} alt={sport.alt} loading="lazy" />
        <div className="sport-card__overlay" />
        <h3 className="sport-card__name">{sport.name}</h3>
      </div>
      <div className="sport-card__body">
        <p>{sport.short}</p>
        <button className="btn btn--ghost sport-card__link">
          Know More <ArrowRight size={16} />
        </button>
      </div>
    </article>
  )
}

export default SportCard
