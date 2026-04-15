import { useState } from 'react'
import contactBanner from '../../assets/images/contactbanner.png'
import lobbyImage from '../../assets/images/lobby.jpg'
import { redirectToWhatsApp } from '../../utils/whatsapp'
import './Contact.css'

const contactCards = [
  {
    title: 'Phone',
    detail: '+91 +91-011 35862581',
    href: 'tel:+91+91-011 35862581',
    icon: (
      <svg viewBox="0 0 24 24" role="presentation">
        <path
          d="M6.6 4.5h3l1.2 4-1.8 1.8a15.7 15.7 0 0 0 4.7 4.7l1.8-1.8 4 1.2v3a1.5 1.5 0 0 1-1.7 1.5A17.3 17.3 0 0 1 5.1 6.2 1.5 1.5 0 0 1 6.6 4.5Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Email',
    detail: 'principal@parkingadvisor.com',
    href: 'mailto:principal@parkingadvisor.com',
    icon: (
      <svg viewBox="0 0 24 24" role="presentation">
        <path
          d="M4 7.5h16v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 16.5Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="m5 8 7 5 7-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Location',
    detail: 'Infrastructure Hub, India',
    href: 'https://maps.google.com/?q=Infrastructure+Hub+India',
    icon: (
      <svg viewBox="0 0 24 24" role="presentation">
        <path
          d="M12 20s6-5.3 6-10a6 6 0 1 0-12 0c0 4.7 6 10 6 10Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="10" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
]

const initialFormData = {
  fullName: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
}

function Contact() {
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
    redirectToWhatsApp(formData)
  }

  return (
    <section className="contact-page">
      <div className="contact-hero">
        <img
          className="contact-hero__image"
          src={contactBanner}
          alt="Contact banner"
        />
        <div className="contact-hero__overlay">
          <div className="contact-hero__content">
            <h1>GET IN TOUCH</h1>
            <p>
              Let&apos;s discuss your parking solutions and build the future of urban
              infrastructure together.
            </p>
          </div>
        </div>
      </div>

      <section className="contact-info">
        <div className="contact-info__grid">
          {contactCards.map((card) => (
            <a
              key={card.title}
              className="contact-info__card"
              href={card.href}
              target={card.title === 'Location' ? '_blank' : undefined}
              rel={card.title === 'Location' ? 'noreferrer' : undefined}
            >
              <span className="contact-info__icon" aria-hidden="true">
                {card.icon}
              </span>
              <span className="contact-info__text">
                <strong>{card.title}</strong>
                <small>{card.detail}</small>
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="contact-message">
        <div className="contact-message__grid">
          <div className="contact-message__panel">
            <h2>Send us a message</h2>

            <form className="contact-form" onSubmit={handleSubmit}>
              <label className="contact-form__field">
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

              <label className="contact-form__field">
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

              <label className="contact-form__field">
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

              <label className="contact-form__field">
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

              <label className="contact-form__field contact-form__field--full">
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

              <button className="contact-form__submit" type="submit">
                <span>Send Message</span>
                <span aria-hidden="true">↗</span>
              </button>
            </form>
          </div>

          <div className="contact-message__visual">
            <img src={lobbyImage} alt="Parking facility with directional floor markings" />
          </div>
        </div>
      </section>

      <section className="contact-map">
        <div className="contact-map__canvas">
          <div className="contact-map__roads" aria-hidden="true">
            <span className="contact-map__road contact-map__road--curve-left" />
            <span className="contact-map__road contact-map__road--curve-right" />
            <span className="contact-map__road contact-map__road--vertical" />
            <span className="contact-map__road contact-map__road--horizontal" />
          </div>

          <div className="contact-map__marker">
            <div className="contact-map__label">Our Location</div>
            <span className="contact-map__dot" />
          </div>
        </div>
      </section>

      <section className="contact-cta">
        <div className="contact-cta__inner">
          <h2>
            Ready to optimize your parking
            <span>space?</span>
          </h2>
          <a className="contact-cta__button" href="/contact">
            <span>Contact Us</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </section>
  )
}

export default Contact
