import { Quote, Star, Info } from 'lucide-react'
import { testimonials } from '../config/data.js'
import { siteConfig } from '../config/site.js'
import { useReveal } from '../hooks/useReveal.js'
import './TestimonialSection.css'

const TestimonialSection = () => {
  const [ref, visible] = useReveal()

  return (
    <section className="section section--light" id="testimonials" aria-label="Testimonials">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Testimonials</span>
          <h2>{siteConfig.testimonialsHeading}</h2>
          <p>{siteConfig.testimonialsSubheading}</p>
        </div>

        <div className={`testimonial-grid reveal ${visible ? 'is-visible' : ''}`} ref={ref}>
          {testimonials.map((item) => (
            <article key={item.id} className="testimonial-card">
              {item.placeholder && (
                <div className="testimonial-card__badge">
                  <Info size={14} /> Sample
                </div>
              )}
              <Quote className="testimonial-card__quote-icon" size={40} />
              <p className="testimonial-card__text">{item.text}</p>
              {item.rating && (
                <div className="testimonial-card__rating">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
              )}
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">
                  {item.name.charAt(1) || 'A'}
                </div>
                <div>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection
