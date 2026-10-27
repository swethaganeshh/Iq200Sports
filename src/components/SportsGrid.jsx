import { useState } from 'react'
import { sports } from '../config/sports.js'
import { siteConfig } from '../config/site.js'
import SportCard from './SportCard.jsx'
import SportDetailModal from './SportDetailModal.jsx'
import { useReveal } from '../hooks/useReveal.js'
import './SportsGrid.css'

const SportsGrid = () => {
  const [selectedSport, setSelectedSport] = useState(null)
  const [gridRef, gridVisible] = useReveal()

  const openModal = (sport) => setSelectedSport(sport)
  const closeModal = () => setSelectedSport(null)

  return (
    <section className="section" id="sports" aria-label="Sports and coaching">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Sports & Coaching</span>
          <h2>Explore Our 12 Sports</h2>
          <p>
            From team sports to individual disciplines, find the coaching that matches your passion.
            Click any sport to learn more and enquire.
          </p>
        </div>

        <div className={`sports-grid reveal ${gridVisible ? 'is-visible' : ''}`} ref={gridRef}>
          {sports.map((sport, index) => (
            <SportCard
              key={sport.id}
              sport={sport}
              onClick={() => openModal(sport)}
              delay={index * 0.05}
            />
          ))}
        </div>
      </div>

      {selectedSport && (
        <SportDetailModal sport={selectedSport} onClose={closeModal} />
      )}
    </section>
  )
}

export default SportsGrid
