import { useEffect, useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { contact } from '../config/contact.js'
import './WhatsAppButton.css'

const WhatsAppButton = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!contact.whatsapp) return null

  const link = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
    'I would like to enquire about coaching at IQ200 Sports Academy.'
  )}`

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`whatsapp-fab ${visible ? 'whatsapp-fab--visible' : ''}`}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={26} />
      <span className="whatsapp-fab__label">Chat with us</span>
      <span className="whatsapp-fab__pulse" />
    </a>
  )
}

export default WhatsAppButton
