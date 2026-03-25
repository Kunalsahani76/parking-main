import { useState } from 'react'
import logo from '../../assets/images/logo.png'
import './Header.css'

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const serviceItems = [
    { label: 'TRAFFIC FLOW & CIRCULATION PLANNING', href: '/services-3' },
    { label: 'SMART & AUTOMATED', href: '/services-2' },
    { label: 'GOVERNMENT & COMPLIANCE ADVISORY', href: '/services-4' },
    { label: 'MULTI-LEVEL & BASEMENT PARKING', href: '/services-5' },
    { label: 'PARKING REVENUE & EFFICIENCY ENHANCEMENT', href: '/services-6' },
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
          aria-expanded={isNavOpen}
          aria-controls="site-header-navigation"
          onClick={() => {
            setIsNavOpen((currentValue) => !currentValue)
            setIsServicesOpen(false)
          }}
        >
          <span />
          <span />
          <span />
          <span className="site-header__menu-label">Menu</span>
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
                    key={item.label}
                    href={item.href}
                    onClick={() => {
                      setIsServicesOpen(false)
                      setIsNavOpen(false)
                    }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>
          <a href="/contact" onClick={() => setIsNavOpen(false)}>
            CONTACT
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
