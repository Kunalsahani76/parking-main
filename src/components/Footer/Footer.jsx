import logo from '../../assets/icons/main.jpeg'
import './Footer.css'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Case Studies', href: '/success-story' },
  { label: 'Contact', href: '/contact' },
]

const serviceLinks = [
  { label: 'Traffic Management', href: '/services' },
  { label: 'Revenue Audits', href: '/services' },
  { label: 'Design Consulting', href: '/services' },
  { label: 'Feasibility Studies', href: '/services' },
  { label: 'Traffic Flow & Circulation Planning', href: '/services/traffic-flow-circulation-planning' },
  { label: 'Smart & Automated Parking', href: '/services/smart-automated-parking' },
  { label: 'Government & Compliance Advisory', href: '/services/government-compliance-advisory' },
  { label: 'Multi-Level & Basement Parking', href: '/services/multilevel-basement-parking-design' },
  { label: 'Parking Revenue & Efficiency Enhancement', href: '/services/parking-revenue' },
]

const contactItems = [
  {
    text: 'Corp. Office - Unit 301 Ithum Tower A sector 62 Noida',
    href: 'https://maps.app.goo.gl/FMXc2oACiYZU9htG9',
    icon: (
      <svg viewBox="0 0 24 24" role="presentation">
        <path
          d="M12 21s6-4.8 6-11a6 6 0 1 0-12 0c0 6.2 6 11 6 11Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="10" r="2.4" fill="none" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    text: 'Regd. Office - 57, naval nagar , aligarh road, hathras  pin code 204101',
    href: 'https://maps.app.goo.gl/qEekLrViGZFEbfdy9',
    icon: (
      <svg viewBox="0 0 24 24" role="presentation">
        <path
          d="M12 21s6-4.8 6-11a6 6 0 1 0-12 0c0 6.2 6 11 6 11Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="10" r="2.4" fill="none" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    text: '+91 8368431399',
    href: 'tel:+918368431399',
    icon: (
      <svg viewBox="0 0 24 24" role="presentation">
        <path
          d="M5 4h3l1.6 4-2 1.8a15 15 0 0 0 6.6 6.6L16 14l4 1.6v3a2 2 0 0 1-2.2 2A17 17 0 0 1 3.4 6.2 2 2 0 0 1 5 4Z"
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
    text: 'principal@parkingadvisor.com',
    href: 'mailto:principal@parkingadvisor.com',
    icon: (
      <svg viewBox="0 0 24 24" role="presentation">
        <path
          d="M4 6h16v12H4z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="m5 7 7 6 7-6"
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
    text: 'GST: 09AQVPK4425A1ZS',
    href: null,
    icon: (
      <svg viewBox="0 0 24 24" role="presentation">
        <rect
          x="4"
          y="3"
          width="16"
          height="18"
          rx="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M8 8h8M8 12h8M8 16h5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
]

function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="site-footer__inner">
          <div className="site-footer__grid">
            <div className="site-footer__brand">
              <a className="site-footer__logo" href="/" aria-label="The Parking Advisor home">
                <img src={logo} alt="The Parking Advisor" />
              </a>
              <h3>The Parking Advisor</h3>
              <p>
                Leading the way in parking asset optimization and future-ready
                facility design.
              </p>

              <div className="site-footer__socials" aria-label="Social links">
                <a href="https://www.linkedin.com" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" role="presentation">
                    <path
                      d="M6.5 8.5V18M6.5 5.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM11 18V8.5h4v1.7c.6-1 1.7-1.9 3.5-1.9 3 0 3.5 2 3.5 4.7V18h-4v-4.2c0-1 0-2.3-1.5-2.3s-1.7 1.1-1.7 2.2V18Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a href="https://x.com" aria-label="X">
                  <svg viewBox="0 0 24 24" role="presentation">
                    <path
                      d="m4 4 6.2 8.3L4.4 20H8l4-5.3L16 20h4l-6.4-8.5L19.3 4H16l-3.6 4.8L8.8 4Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4>Quick Links</h4>
              <ul className="site-footer__list">
                {quickLinks.map((item) => (
                  <li key={item.label}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4>Services</h4>
              <ul className="site-footer__list">
                {serviceLinks.map((item) => (
                  <li key={item.label}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4>Contact Us</h4>
              <ul className="site-footer__contact-list">
                {contactItems.map((item) => (
                  <li key={item.text}>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noreferrer">
                        <span className="site-footer__contact-icon" aria-hidden="true">
                          {item.icon}
                        </span>
                        <span>{item.text}</span>
                      </a>
                    ) : (
                      <span>
                        <span className="site-footer__contact-icon" aria-hidden="true">
                          {item.icon}
                        </span>
                        <span>{item.text}</span>
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="site-footer__bottom">
            <p>&copy; 2026 The Parking Advisor. All rights reserved.</p>
            <div className="site-footer__legal">
              <a href="/">Privacy Policy</a>
              <a href="/">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
