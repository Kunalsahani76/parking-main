import './FloatingContactActions.css'

function FloatingContactActions() {
  return (
    <nav className="floating-contact-actions" aria-label="Quick contact links">
      <a
        className="floating-contact-actions__button floating-contact-actions__button--whatsapp"
        href="https://wa.me/919811207119"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z" />
          <path d="M9 8.5c.2-.5.5-.5.8-.5h.4c.2 0 .3.1.4.4l.7 1.6c.1.2.1.4-.1.6l-.6.7c-.2.2-.2.4 0 .6.5.9 1.2 1.5 2.1 2 .2.1.4.1.6-.1l.7-.8c.2-.2.4-.2.6-.1l1.5.7c.3.1.4.2.4.4 0 .3-.2 1.1-.7 1.5-.5.5-1.2.7-1.9.6-1.1-.2-2.5-.9-3.8-2.1-1.1-1-2.1-2.5-2.3-3.5-.2-1 .1-1.6.5-2Z" />
        </svg>
      </a>
      <a
        className="floating-contact-actions__button floating-contact-actions__button--email"
        href="mailto:principal@parkingadvisor.com"
        aria-label="Send email"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
          <path d="m4.5 7 7.5 6 7.5-6" />
        </svg>
      </a>
      <a
        className="floating-contact-actions__button floating-contact-actions__button--phone"
        href="tel:01135862581"
        aria-label="Call 011 35862581"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6.5 3.5h3l1.4 4-2 1.8a15.3 15.3 0 0 0 5.8 5.8l1.8-2 4 1.4v3a1.8 1.8 0 0 1-2 1.8A16.8 16.8 0 0 1 4.7 5.5a1.8 1.8 0 0 1 1.8-2Z" />
        </svg>
      </a>
      <button
        className="floating-contact-actions__button floating-contact-actions__button--top"
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </button>
    </nav>
  )
}

export default FloatingContactActions
