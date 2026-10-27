import { useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import './Lightbox.css'

const Lightbox = ({ images, index, onClose, onNext, onPrev }) => {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNext()
      if (e.key === 'ArrowLeft') onPrev()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onNext, onPrev])

  const current = images[index]

  return (
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true" aria-label="Image viewer">
      <button className="lightbox__close" onClick={onClose} aria-label="Close image viewer">
        <X size={28} />
      </button>
      <button className="lightbox__nav lightbox__nav--prev" onClick={(e) => { e.stopPropagation(); onPrev() }} aria-label="Previous image">
        <ChevronLeft size={32} />
      </button>
      <button className="lightbox__nav lightbox__nav--next" onClick={(e) => { e.stopPropagation(); onNext() }} aria-label="Next image">
        <ChevronRight size={32} />
      </button>

      <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
        <img src={current.src} alt={current.alt} />
        <p className="lightbox__caption">{current.alt}</p>
        <span className="lightbox__counter">{index + 1} / {images.length}</span>
      </div>
    </div>
  )
}

export default Lightbox
