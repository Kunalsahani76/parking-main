import { useEffect, useRef, useState } from 'react'
import logo from '../../assets/images/logo.png'
import trafficIcon from '../../assets/icons/Traffic Flow & Circulation Planning.png'
import smartIcon from '../../assets/icons/SMART & AUTOMATED PARKING.png'
import complianceIcon from '../../assets/icons/Government & Compliance Advisory.png'
import multilevelIcon from '../../assets/icons/Multi-Level & Basement Parking .png'
import revenueIcon from '../../assets/icons/Parking Revenue & Efficiency Enhancement.png'
import './Header.css'

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const closeTimerRef = useRef(null)

  const serviceItems = [
    { label: 'TRAFFIC FLOW & CIRCULATION PLANNING', href: '/services-2', icon: trafficIcon },
    { label: 'SMART & AUTOMATED PARKING', href: '/services-3', icon: smartIcon },
    { label: 'GOVERNMENT & COMPLIANCE ADVISORY', href: '/services-4', icon: complianceIcon },
    { label: 'MULTI-LEVEL & BASEMENT PARKING', href: '/services-5', icon: multilevelIcon },
    { label: 'PARKING REVENUE & EFFICIENCY ENHANCEMENT', href: '/services-6', icon: revenueIcon },
  ]

  useEffect(() => () => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current)
    }
  }, [])

  const clearServicesCloseTimer = () => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
  }

  const openServicesMenu = () => {
    clearServicesCloseTimer()
    setIsServicesOpen(true)
  }

  const closeServicesMenuWithDelay = () => {
    clearServicesCloseTimer()
    closeTimerRef.current = window.setTimeout(() => {
      setIsServicesOpen(false)
      closeTimerRef.current = null
    }, 180)
  }

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
            onMouseEnter={openServicesMenu}
            onMouseLeave={closeServicesMenuWithDelay}
            onFocus={openServicesMenu}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                clearServicesCloseTimer()
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
                  clearServicesCloseTimer()
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
                      <img src={item.icon} alt="" aria-hidden="true" />
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
            href="/connect-us"
            onClick={() => {
              setIsNavOpen(false)
              setIsServicesOpen(false)
            }}
          >
            Connect Us
          </a>
        </nav>

        <a
          className="site-header__cta"
          href="/connect-us"
          onClick={() => {
            setIsNavOpen(false)
            setIsServicesOpen(false)
          }}
        >
          <span className="site-header__cta-label">Connect Us</span>
          <span className="site-header__cta-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" role="presentation">
              <path d="M20 11.2a8 8 0 0 1-11.8 7L4 19.5l1.4-4A8 8 0 1 1 20 11.2Z" />
              <path d="M9.2 8.8h1.4l.8 2.2-1 1a8.1 8.1 0 0 0 3.6 3.6l1-1 2.2.8v1.4a.8.8 0 0 1-.9.8A11.2 11.2 0 0 1 8.4 9.7a.8.8 0 0 1 .8-.9Z" />
            </svg>
          </span>
        </a>
      </div>
    </header>
  )
}

export default Header
