import { useState } from 'react'
import { Send, CircleCheck as CheckCircle, CircleAlert as AlertCircle } from 'lucide-react'
import { sports } from '../config/sports.js'
import { locations } from '../config/contact.js'
import './ContactForm.css'

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    sport: '',
    location: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
 const [status, setStatus] = useState('idle')
// idle | submitting | success | error

  const validate = () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Please enter your name.'
    if (!form.phone.trim()) {
      newErrors.phone = 'Please enter a phone number.'
    } else if (!/^[+\d\s()-]{7,15}$/.test(form.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number.'
    }
    if (!form.sport) newErrors.sport = 'Please select a preferred sport.'
    if (!form.location) newErrors.location = 'Please select a preferred location.'
    if (!form.message.trim()) newErrors.message = 'Please enter a message.'
    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e) => {
  e.preventDefault()

  const newErrors = validate()

  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors)
    setStatus('error')
    return
  }

  setStatus('submitting')

  try {
    const response = await fetch('https://formspree.io/f/xbgggvrg', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: form.name,
        phone: form.phone,
        sport: form.sport,
        location: form.location,
        message: form.message,
      }),
    })

    if (response.ok) {
      setStatus('success')
      setErrors({})
      setForm({
        name: '',
        phone: '',
        sport: '',
        location: '',
        message: '',
      })
    } else {
      setStatus('error')
    }
  } catch (error) {
    setStatus('error')
  }
}

  return (
    <div className="contact-form-wrap">
      <h3 className="contact-form-wrap__title">Send Us an Enquiry</h3>
      <p className="contact-form-wrap__sub">
        Fill in the form below and we will get back to you with coaching details.
      </p>

      {status === 'success' && (
        <div className="contact-form__alert contact-form__alert--success" role="alert">
          <CheckCircle size={20} />
          <div>
            <strong>Thank you for your enquiry!</strong>
            <p>
              We have received your message and will respond as soon as possible. 
            </p>
          </div>
        </div>
      )}

      {status === 'error' && Object.keys(errors).length > 0 && (
        <div className="contact-form__alert contact-form__alert--error" role="alert">
          <AlertCircle size={20} />
          <span>Please correct the highlighted fields and try again.</span>
        </div>
      )}

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="contact-form__field">
          <label htmlFor="name">Parent / Student Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter full name"
            aria-invalid={!!errors.name}
            className={errors.name ? 'has-error' : ''}
          />
          {errors.name && <span className="field-error">{errors.name}</span>}
        </div>

        <div className="contact-form__field">
          <label htmlFor="phone">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="e.g. +91 98765 43210"
            aria-invalid={!!errors.phone}
            className={errors.phone ? 'has-error' : ''}
          />
          {errors.phone && <span className="field-error">{errors.phone}</span>}
        </div>

        <div className="contact-form__row">
          <div className="contact-form__field">
            <label htmlFor="sport">Preferred Sport *</label>
            <select
              id="sport"
              name="sport"
              value={form.sport}
              onChange={handleChange}
              aria-invalid={!!errors.sport}
              className={errors.sport ? 'has-error' : ''}
            >
              <option value="">Select a sport</option>
              {sports.map((sport) => (
                <option key={sport.id} value={sport.name}>{sport.name}</option>
              ))}
            </select>
            {errors.sport && <span className="field-error">{errors.sport}</span>}
          </div>

          <div className="contact-form__field">
            <label htmlFor="location">Preferred Location *</label>
            <select
              id="location"
              name="location"
              value={form.location}
              onChange={handleChange}
              aria-invalid={!!errors.location}
              className={errors.location ? 'has-error' : ''}
            >
              <option value="">Select a location</option>
              {locations.map((loc) => (
                <option key={loc.id} value={loc.city}>{loc.city}</option>
              ))}
            </select>
            {errors.location && <span className="field-error">{errors.location}</span>}
          </div>
        </div>

        <div className="contact-form__field">
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about the student's age, experience level, and what you are looking for."
            rows={4}
            aria-invalid={!!errors.message}
            className={errors.message ? 'has-error' : ''}
          />
          {errors.message && <span className="field-error">{errors.message}</span>}
        </div>

        <button
  type="submit"
  className="btn btn--gold btn--lg contact-form__submit"
  disabled={status === 'submitting'}
>
  {status === 'submitting' ? 'Sending...' : 'Send Enquiry'}
  <Send size={18} />
</button>
      </form>
    </div>
  )
}

export default ContactForm
