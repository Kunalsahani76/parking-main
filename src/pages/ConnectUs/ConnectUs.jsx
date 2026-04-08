import { useState } from 'react'
import './ConnectUs.css'

const initialFormData = {
  fullName: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
}

function ConnectUs() {
  const [formData, setFormData] = useState(initialFormData)

  function handleChange(event) {
    const { name, value } = event.target

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    const whatsappMessage = [
      'Hello The Parking Advisor,',
      '',
      `Full Name: ${formData.fullName}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `Subject: ${formData.subject}`,
      `Message: ${formData.message}`,
    ].join('\n')

    const whatsappUrl = `https://wa.me/919811207119?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="connect-us-page">
      <div className="connect-us-card">
        <h1>Send us a message</h1>

        <form className="connect-us-form" onSubmit={handleSubmit}>
          <label className="connect-us-form__field">
            <span>Full Name</span>
            <input
              name="fullName"
              type="text"
              placeholder="John Doe"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </label>

          <label className="connect-us-form__field">
            <span>Email</span>
            <input
              name="email"
              type="email"
              placeholder="john@company.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label className="connect-us-form__field">
            <span>Phone</span>
            <input
              name="phone"
              type="tel"
              placeholder="+91 000 000 0000"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </label>

          <label className="connect-us-form__field">
            <span>Subject</span>
            <input
              name="subject"
              type="text"
              placeholder="Consulting Inquiry"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </label>

          <label className="connect-us-form__field connect-us-form__field--full">
            <span>Message</span>
            <textarea
              name="message"
              rows="6"
              placeholder="Tell us about your project..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>

          <button className="connect-us-form__submit" type="submit">
            <span>Send Message</span>
            <span aria-hidden="true">↗</span>
          </button>
        </form>
      </div>

      <section className="connect-us-cta" aria-labelledby="connect-us-cta-title">
        <div className="connect-us-cta__inner">
          <h2 id="connect-us-cta-title">
            Ready to optimize your parking
            <span>space?</span>
          </h2>
        </div>
      </section>
    </section>
  )
}

export default ConnectUs
