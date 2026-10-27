import { useEffect } from 'react'
import { X, ArrowRight, MessageCircle } from 'lucide-react'
import { contact } from '../config/contact.js'
import './SportDetailModal.css'

const SportDetailModal = ({ sport, onClose }) => {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const whatsappMsg = contact.whatsapp
    ? `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(`I would like to enquire about ${sport.name} coaching at IQ200 Sports Academy.`)}`
    : null

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={`${sport.name} details`}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Close dialog">
          <X size={22} />
        </button>

        <div className="modal__img-wrap">
          <img src={sport.image} alt={sport.alt} />
          <div className="modal__img-overlay" />
          <h2 className="modal__title">{sport.name}</h2>
        </div>

        <div className="modal__body">
          <p className="modal__desc">{sport.description}</p>

          <div className="modal__note">
            <strong>Note:</strong> Coaching schedules, fees, age groups, and batch timings are confirmed
            by the academy on enquiry. Please contact us for the most accurate and up-to-date details.
          </div>

          <div className="modal__actions">
            <a href="#contact" className="btn btn--gold" onClick={onClose}>
              Enquire About Coaching <ArrowRight size={18} />
            </a>
            {whatsappMsg && (
              <a href={whatsappMsg} target="_blank" rel="noopener noreferrer" className="btn btn--navy">
                <MessageCircle size={18} /> WhatsApp
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SportDetailModal
