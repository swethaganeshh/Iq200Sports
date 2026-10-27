import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqs } from '../config/data.js'
import { siteConfig } from '../config/site.js'
import { useReveal } from '../hooks/useReveal.js'
import './FAQAccordion.css'

const FAQAccordion = () => {
  const [openId, setOpenId] = useState(null)
  const [ref, visible] = useReveal()

  const toggle = (id) => setOpenId(openId === id ? null : id)

  return (
    <section className="section" id="faq" aria-label="Frequently asked questions">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">FAQ</span>
          <h2>{siteConfig.faqHeading}</h2>
          <p>{siteConfig.faqSubheading}</p>
        </div>

        <div className={`faq-list reveal ${visible ? 'is-visible' : ''}`} ref={ref}>
          {faqs.map((faq) => {
            const isOpen = openId === faq.id
            return (
              <div key={faq.id} className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}>
                <button
                  className="faq-item__question"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className="faq-item__icon"
                    size={22}
                    style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }}
                  />
                </button>
                <div
                  className="faq-item__answer-wrap"
                  id={`faq-answer-${faq.id}`}
                  style={{ maxHeight: isOpen ? '300px' : '0' }}
                >
                  <p className="faq-item__answer">{faq.answer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQAccordion
