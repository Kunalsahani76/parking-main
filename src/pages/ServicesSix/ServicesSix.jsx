import bannerImage from '../../assets/images/banner.jpg'
import benefitsImage from '../../assets/images/parkingdesign.jpg'
import supportImage from '../../assets/images/HB1.jpg'
import './ServicesSix.css'

const revenueMattersItems = [
  {
    title: 'Revenue Stream',
    description:
      'Converting underutilized space into consistent, scalable income channels.',
    icon: (
      <svg viewBox="0 0 64 64" role="presentation">
        <rect x="14" y="22" width="36" height="20" rx="2" />
        <circle cx="32" cy="32" r="5" />
        <path d="M20 22v20M44 22v20" />
      </svg>
    ),
  },
  {
    title: 'Reduced Costs',
    description:
      'Operational streamlining through automation, reducing manual overheads.',
    icon: (
      <svg viewBox="0 0 64 64" role="presentation">
        <path d="m16 22 10 10 8-8 14 14" />
        <path d="M42 38h10V28" />
      </svg>
    ),
  },
  {
    title: 'Utilization',
    description:
      'Maximizing occupancy rates through smart demand forecasting.',
    icon: (
      <svg viewBox="0 0 64 64" role="presentation">
        <path d="M18 40a14 14 0 1 1 28 0Z" />
        <path d="m32 40 8-12" />
        <circle cx="32" cy="40" r="2.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: 'Leakage Control',
    description:
      'Plugging financial holes with ironclad digital tracking and audits.',
    icon: (
      <svg viewBox="0 0 64 64" role="presentation">
        <path d="M32 14 46 20v12c0 10-6 16-14 20-8-4-14-10-14-20V20Z" />
        <path d="m25 33 5 5 10-11" />
      </svg>
    ),
  },
  {
    title: 'Profitability',
    description:
      'Securing the long-term asset value of your physical infrastructure.',
    icon: (
      <svg viewBox="0 0 64 64" role="presentation">
        <path d="M18 50h28" />
        <path d="M20 26h24" />
        <path d="M22 26v24M42 26v24" />
        <path d="m18 22 14-8 14 8" />
      </svg>
    ),
  },
]

const scopeItems = [
  {
    number: '01',
    title: 'Pricing Strategy & Revenue Models',
    points: [
      'Hourly, daily, and subscription pricing models',
      'Dynamic pricing based on demand',
      'Zonal pricing strategies',
      'Peak vs off-peak pricing optimization',
      'Competitive benchmarking',
    ],
  },
  {
    number: '02',
    title: 'Technology Integration & Automation',
    points: [
      'Automated billing and ticketing systems',
      'Digital payment integration (UPI, cards, wallets)',
      'ANPR-based billing systems',
      'Revenue tracking dashboards',
      'Access control systems',
    ],
  },
  {
    number: '03',
    title: 'Operational Efficiency Optimization',
    points: [
      'Manpower reduction strategies',
      'Process automation',
      'Entry/exit time reduction',
      'Queue management improvement',
      'Cost optimization planning',
    ],
  },
  {
    number: '04',
    title: 'Performance Monitoring & Analytics',
    points: [
      'Occupancy rate tracking',
      'Revenue per slot and per sq.ft analysis',
      'Peak hour usage insights',
      'Data-driven reporting',
      'Predictive demand analysis',
    ],
  },
  {
    number: '05',
    title: 'Revenue Leakage Control',
    points: [
      'Elimination of manual errors',
      'Audit systems and checks',
      'Secure transaction systems',
      'Monitoring unauthorized usage',
    ],
  },
]

const standardsItems = [
  {
    title: 'Ramp Design',
    points: [
      'Gradient: 1:8 (maximum), 1:10 preferred',
      'Minimum ramp width: 3.5m-6.0m',
      'Transition zones for smooth vehicle entry',
    ],
  },
  {
    title: 'Basement Dimensions',
    points: [
      'Minimum clear height: 2.4m-3.0m',
      'Structural grid alignment for optimal layout',
      'Adequate aisle width for maneuverability',
    ],
  },
  {
    title: 'Ventilation Standards',
    points: [
      'Mechanical ventilation based on ACH calculations',
      'CO level monitoring systems',
      'Exhaust and fresh air balancing',
    ],
  },
  {
    title: 'Fire Safety Compliance',
    points: [
      'Fire tender access width: minimum 6m',
      'Smoke extraction systems',
      'Sprinkler and hydrant coverage',
    ],
  },
]

const applicationItems = [
  {
    title: 'RESIDENTIAL',
    icon: (
      <svg viewBox="0 0 64 64" role="presentation">
        <path d="M16 28 32 16l16 12" />
        <path d="M22 26v18h20V26" />
        <path d="M28 44V32h8v12" />
        <path d="M46 20h6v24h-6" />
        <path d="M48 26h2M48 32h2M48 38h2" />
      </svg>
    ),
  },
  {
    title: 'COMMERCIAL',
    icon: (
      <svg viewBox="0 0 64 64" role="presentation">
        <path d="M18 18h20v28H18Z" />
        <path d="M38 24h12v22H38Z" />
        <path d="M24 24h4M24 30h4M24 36h4M32 24h4M32 30h4M32 36h4" />
        <path d="M42 30h4M42 36h4" />
      </svg>
    ),
  },
  {
    title: 'MALLS',
    icon: (
      <svg viewBox="0 0 64 64" role="presentation">
        <path d="M22 24h20v22H22Z" />
        <path d="M26 24v-4a6 6 0 1 1 12 0v4" />
        <path d="M18 24h28" />
      </svg>
    ),
  },
  {
    title: 'HOSPITALS',
    icon: (
      <svg viewBox="0 0 64 64" role="presentation">
        <rect x="18" y="18" width="28" height="28" rx="2" />
        <path d="M32 24v16M24 32h16" />
      </svg>
    ),
  },
  {
    title: 'AIRPORTS',
    icon: (
      <svg viewBox="0 0 64 64" role="presentation">
        <path d="m16 36 32-8" />
        <path d="m28 30-4-8" />
        <path d="m38 28 8-8" />
        <path d="M20 44h24" />
      </svg>
    ),
  },
  {
    title: 'TRANSIT HUBS',
    icon: (
      <svg viewBox="0 0 64 64" role="presentation">
        <rect x="20" y="16" width="24" height="28" rx="4" />
        <path d="M20 26h24M24 48h16M26 44l-4 6M38 44l4 6" />
        <path d="M26 22h4M34 22h4" />
      </svg>
    ),
  },
]

const approachItems = [
  {
    title: 'SYSTEM ASSESSMENT',
    icon: (
      <svg viewBox="0 0 64 64" role="presentation">
        <rect x="20" y="16" width="24" height="32" rx="2" />
        <path d="M26 24h8M26 32h8M26 40h8" />
        <path d="m36 24 3 3 5-5" />
      </svg>
    ),
  },
  {
    title: 'REVENUE GAP IDENTIFICATION',
    icon: (
      <svg viewBox="0 0 64 64" role="presentation">
        <rect x="22" y="22" width="20" height="20" />
      </svg>
    ),
  },
  {
    title: 'STRATEGY DESIGN',
    icon: (
      <svg viewBox="0 0 64 64" role="presentation">
        <path d="M32 16v32" />
        <path d="m24 44 8-16 8 16" />
        <circle cx="32" cy="20" r="2" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: 'TECHNOLOGY INTEGRATION',
    icon: (
      <svg viewBox="0 0 64 64" role="presentation">
        <path d="M22 16v32M32 16v32M42 16v32" />
        <rect x="18" y="22" width="8" height="8" rx="1" />
        <rect x="28" y="34" width="8" height="8" rx="1" />
        <rect x="38" y="24" width="8" height="8" rx="1" />
      </svg>
    ),
  },
  {
    title: 'PERFORMANCE MONITORING',
    icon: (
      <svg viewBox="0 0 64 64" role="presentation">
        <path d="M18 40a14 14 0 1 1 28 0Z" />
        <path d="m32 40 9-10" />
      </svg>
    ),
  },
]

const benefitsItems = [
  'Increased parking revenue',
  'Reduced operational costs',
  'Better occupancy and utilization',
  'Elimination of revenue leakage',
  'Improved user experience',
]

function ServicesSix() {
  return (
    <section className="services-six-page">
      <section className="services-six-banner">
        <div className="services-six-banner__media">
          <img src={bannerImage} alt="Parking revenue and efficiency enhancement" />
        </div>

        <div className="services-six-banner__overlay">
          <div className="services-six-banner__inner">
            <div className="services-six-banner__panel">
              <div className="services-six-banner__copy">
                <span className="services-six-banner__eyebrow">Services 6</span>
                <h1>Parking Revenue &amp; Efficiency Enhancement</h1>
              </div>

              <a className="services-six-banner__cta" href="/contact">
                Get Expert Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="services-six-intro">
        <div className="services-six-intro__inner">
          <p>
            Visionary Vantage Corporation Provides Specialized Parking Revenue
            Optimization And Efficiency Enhancement Services In India, Helping
            Developers, Operators, And Government Bodies Transform Parking Into A
            High-Performing, Revenue-Generating System.
          </p>

          <p>
            In Most Projects, Parking Is Treated As A Utility - Not A Business
            Opportunity. This Results In Revenue Leakage, Inefficient Operations, Poor
            Utilization, And Missed Financial Potential.
          </p>

          <p>
            Our Approach Combines Smart Pricing Strategies, Automation, Operational
            Optimization, And Data-Driven Decision-Making To Ensure Your Parking
            System Delivers Maximum ROI With Minimal Inefficiencies.
            <br />
            We Don&apos;t Just Manage Parking.
          </p>
        </div>
      </section>

      <section className="services-six-matters">
        <div className="services-six-matters__top">
          <h2>WHY REVENUE OPTIMIZATION MATTERS</h2>
        </div>

        <div className="services-six-matters__body">
          <div className="services-six-matters__inner">
            <div className="services-six-matters__grid">
              {revenueMattersItems.map((item) => (
                <article className="services-six-matters__card" key={item.title}>
                  <div className="services-six-matters__icon" aria-hidden="true">
                    {item.icon}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="services-six-scope">
        <div className="services-six-scope__top">
          <h2>OUR SCOPE OF WORK</h2>
        </div>

        <div className="services-six-scope__body">
          <div className="services-six-scope__inner">
            <div className="services-six-scope__grid">
              {scopeItems.map((item) => (
                <article className="services-six-scope__card" key={item.number}>
                  <span className="services-six-scope__number">{item.number}</span>
                  <h3>{item.title}</h3>
                  <div className="services-six-scope__points">
                    {item.points.map((point) => (
                      <p key={point}>{point}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="services-six-standards">
        <div className="services-six-standards__top">
          <h2>TECHNICAL DESIGN STANDARDS (HIGH AUTHORITY SECTION)</h2>
        </div>

        <div className="services-six-standards__body">
          <div className="services-six-standards__inner">
            <div className="services-six-standards__grid">
              {standardsItems.map((item) => (
                <article className="services-six-standards__card" key={item.title}>
                  <h3>{item.title}</h3>
                  <div className="services-six-standards__points">
                    {item.points.map((point) => (
                      <p key={point}>{point}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="services-six-applications">
        <div className="services-six-applications__top">
          <h2>APPLICATION AREAS</h2>
        </div>

        <div className="services-six-applications__body">
          <div className="services-six-applications__inner">
            <div className="services-six-applications__grid">
              {applicationItems.map((item) => (
                <article className="services-six-applications__card" key={item.title}>
                  <div className="services-six-applications__icon" aria-hidden="true">
                    {item.icon}
                  </div>
                  <h3>{item.title}</h3>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="services-six-approach">
        <div className="services-six-approach__top">
          <h2>OUR APPROACH</h2>
        </div>

        <div className="services-six-approach__body">
          <div className="services-six-approach__inner">
            <div className="services-six-approach__grid">
              {approachItems.map((item) => (
                <article className="services-six-approach__card" key={item.title}>
                  <div className="services-six-approach__icon" aria-hidden="true">
                    {item.icon}
                  </div>
                  <h3>{item.title}</h3>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="services-six-support">
        <div className="services-six-support__inner">
          <div className="services-six-support__media">
            <img src={supportImage} alt="Team support collaboration" />
          </div>

          <div className="services-six-support__card">
            <div className="services-six-support__heading">
              <span className="services-six-support__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="presentation">
                  <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
                  <path d="M6 13v4a2 2 0 0 0 2 2h2v-8H8a2 2 0 0 0-2 2Zm12-2h-2v8h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Z" />
                  <path d="M12 19v1a2 2 0 0 0 2 2h1" />
                </svg>
              </span>
              <h2>Support</h2>
            </div>

            <p>
              At Visionary Vantage Corporation, Support Is Not An Afterthought, It&apos;s
              Part Of Our Core Service. Whether You&apos;re In The Design Phase, Approval
              Stage, Or Post-Execution, We Provide Timely, Expert Assistance To Keep
              Your Project On Track.
            </p>

            <a className="services-six-support__cta" href="tel:+91 9811207119">
              <span aria-hidden="true">
                <svg viewBox="0 0 24 24" role="presentation">
                  <path d="M6.6 4h3.1l1.5 4.1-2 1.8a15.6 15.6 0 0 0 6 6l1.8-2L21 15.3v3.1a2 2 0 0 1-2.2 2A17.9 17.9 0 0 1 3.6 5.2 2 2 0 0 1 6.6 4Z" />
                </svg>
              </span>
              +91 9811207119
            </a>
          </div>
        </div>
      </section>

      <section className="services-six-benefits">
        <div className="services-six-benefits__inner">
          <div className="services-six-benefits__content">
            <h2>Benefits of Our Solutions</h2>

            <div className="services-six-benefits__list">
              {benefitsItems.map((item) => (
                <div className="services-six-benefits__item" key={item}>
                  <span className="services-six-benefits__check" aria-hidden="true">
                    <svg viewBox="0 0 24 24" role="presentation">
                      <path d="m5 12 4 4 10-10" />
                    </svg>
                  </span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="services-six-benefits__media">
            <img src={benefitsImage} alt="Parking solutions benefits illustration" />
          </div>
        </div>
      </section>
    </section>
  )
}

export default ServicesSix
