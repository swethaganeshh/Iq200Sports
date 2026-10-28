import { useState } from 'react'
import { galleryImages } from '../config/data.js'
import { siteConfig } from '../config/site.js'
import Lightbox from './Lightbox.jsx'
import { useReveal } from '../hooks/useReveal.js'
import './GalleryGrid.css'

const GalleryGrid = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const [gridRef, gridVisible] = useReveal()

  const openLightbox = (index) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  const nextImage = () => setLightboxIndex((prev) => (prev + 1) % galleryImages.length)
  const prevImage = () => setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)

  return (
    <section className="section section--light" id="gallery" aria-label="Gallery">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Gallery</span>
          <h2>{siteConfig.galleryHeading}</h2>
          <p>{siteConfig.gallerySubheading}</p>
        </div>

        <div className={`gallery-grid reveal ${gridVisible ? 'is-visible' : ''}`} ref={gridRef}>
          {galleryImages.map((img, index) => (
            <button
              key={index}
              className={`gallery-item gallery-item--${img.span}`}
              onClick={() => openLightbox(index)}
              aria-label={`Open image: ${img.alt}`}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="gallery-item__overlay" />
            </button>
          ))}
        </div>

        
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={galleryImages}
          index={lightboxIndex}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </section>
  )
}

export default GalleryGrid
