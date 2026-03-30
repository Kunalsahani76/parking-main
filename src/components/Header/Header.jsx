import { useState } from 'react'
import logo from '../../assets/images/logo.png'
import './Header.css'

function ServiceIcon({ type }) {
  if (type === 'traffic') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="22" y="6" width="20" height="52" rx="8" />
        <circle cx="32" cy="18" r="4.5" fill="#fff" />
        <circle cx="32" cy="32" r="4.5" fill="#fff" />
        <circle cx="32" cy="46" r="4.5" fill="#fff" />
        <rect x="13" y="12" width="7" height="4" rx="2" />
        <rect x="44" y="12" width="7" height="4" rx="2" />
        <rect x="13" y="30" width="7" height="4" rx="2" />
        <rect x="44" y="30" width="7" height="4" rx="2" />
        <rect x="13" y="48" width="7" height="4" rx="2" />
        <rect x="44" y="48" width="7" height="4" rx="2" />
      </svg>
    )
  }

  if (type === 'smart') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M16 54 23 10h8v44Zm17 0V10h8l7 44Zm-6-20V22h10v12Z" />
        <rect x="28" y="10" width="8" height="8" fill="#fff" />
      </svg>
    )
  }

  if (type === 'compliance') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="10" y="10" width="44" height="44" rx="8" />
        <path d="M22 42V28a5 5 0 0 1 5-5h9V16h8v14a5 5 0 0 0 5 5h3v8h-5a11 11 0 0 1-11-11v-1h-6v11Z" fill="#fff" />
        <path d="m41 24 8 8" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
        <path d="m44 32 5-1v-5" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }

  if (type === 'multilevel') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path d="M19 12h16v8H27v8h8v8h-8v8h8v8H19Z" />
        <path d="M45 12H29v8h8v8h-8v8h8v8h-8v8h16Z" />
        <circle cx="31" cy="35" r="3.5" fill="#fff" />
        <circle cx="31" cy="49" r="3.5" fill="#fff" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <path d="M10 18 22 14v36L10 46Z" />
      <path d="M26 14 38 18v28L26 50Z" />
      <path d="M42 16 54 20v24L42 48Z" />
    </svg>
  )
}

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const serviceItems = [
    { label: 'TRAFFIC FLOW & CIRCULATION PLANNING', href: '/services-2', icon: 'traffic' },
    { label: 'SMART & AUTOMATED', href: '/services-3', icon: 'smart' },
    { label: 'GOVERNMENT & COMPLIANCE ADVISORY', href: '/services-4', icon: 'compliance' },
    { label: 'MULTI-LEVEL & BASEMENT PARKING', href: '/services-5', icon: 'multilevel' },
    { label: 'PARKING REVENUE & EFFICIENCY ENHANCEMENT', href: '/services-6', icon: 'revenue' },
  ]

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="site-header__brand" href="/">
          <img src={logo} alt="The Parking Advisor" />
        </a>

        <button
          type="button"
          className="site-header__menu-button"
          aria-label={isNavOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isNavOpen}
          aria-controls="site-header-navigation"
          onClick={() => {
            setIsNavOpen((currentValue) => !currentValue)
            setIsServicesOpen(false)
          }}
        >
          <span className="site-header__menu-icon" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>

        <nav
          id="site-header-navigation"
          className={`site-header__nav ${isNavOpen ? 'is-open' : ''}`}
          aria-label="Primary"
        >
          <a href="/" onClick={() => setIsNavOpen(false)}>
            HOME
          </a>
          <a href="/about" onClick={() => setIsNavOpen(false)}>
            OUR STORY
          </a>
          <div
            className="site-header__dropdown"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
            onFocus={() => setIsServicesOpen(true)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setIsServicesOpen(false)
              }
            }}
          >
            <div className="site-header__dropdown-header">
              <a
                className="site-header__dropdown-toggle"
                href="/services"
                aria-haspopup="true"
                aria-expanded={isServicesOpen}
                onClick={() => setIsNavOpen(false)}
              >
                SERVICES
              </a>
              <button
                type="button"
                className="site-header__dropdown-trigger"
                aria-label="Toggle services menu"
                aria-expanded={isServicesOpen}
                onClick={(event) => {
                  event.preventDefault()
                  setIsServicesOpen((currentValue) => !currentValue)
                }}
              >
                <span aria-hidden="true">{isServicesOpen ? '−' : '+'}</span>
              </button>
            </div>

            {isServicesOpen && (
              <div className="site-header__dropdown-menu">
                {serviceItems.map((item) => (
                  <a
                    className="site-header__service-card"
                    key={item.label}
                    href={item.href}
                    onClick={() => {
                      setIsServicesOpen(false)
                      setIsNavOpen(false)
                    }}
                  >
                    <span className="site-header__service-icon">
                      <ServiceIcon type={item.icon} />
                    </span>
                    <span className="site-header__service-label">{item.label}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
          <a href="/contact" onClick={() => setIsNavOpen(false)}>
            CONTACT
          </a>
          <a
            className="site-header__mobile-cta"
            href="/contact"
            onClick={() => {
              setIsNavOpen(false)
              setIsServicesOpen(false)
            }}
          >
            Contact Us
          </a>
        </nav>

        <a
          className="site-header__cta"
          href="/contact"
          onClick={() => {
            setIsNavOpen(false)
            setIsServicesOpen(false)
          }}
        >
          Contact Us
        </a>
      </div>
    </header>
  )
}

export default Header
