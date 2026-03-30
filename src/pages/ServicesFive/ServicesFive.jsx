import bannerImage from '../../assets/images/multi.png'
import benefitsImage from '../../assets/images/parkingdesign.jpg'
import supportImage from '../../assets/images/HB1.jpg'
import './ServicesFive.css'

const designMattersItems = [
  {
    title: 'Land Utilization',
    icon: (
      <svg viewBox="0 0 64 64" role="presentation">
        <rect x="16" y="16" width="12" height="12" />
        <rect x="36" y="16" width="12" height="12" />
        <rect x="16" y="36" width="12" height="12" />
        <rect x="36" y="36" width="12" height="12" />
      </svg>
    ),
  },
  {
    title: 'Vehicle Movement',
    icon: (
      <svg viewBox="0 0 64 64" role="presentation">
        <path d="M32 48V18" />
        <path d="m22 28 10-10 10 10" />
        <path d="M32 34c0-6 3-10 9-14" />
        <path d="m35 22 6-6 6 6" />
        <path d="M32 34c0-6-3-10-9-14" />
        <path d="m23 22-6-6-6 6" />
      </svg>
    ),
  },
  {
    title: 'Safety Compliance',
    icon: (
      <svg viewBox="0 0 64 64" role="presentation">
        <path d="M32 14 46 20v12c0 10-6 16-14 20-8-4-14-10-14-20V20Z" />
        <path d="m25 33 5 5 10-11" />
      </svg>
    ),
  },
  {
    title: 'Project Value',
    icon: (
      <svg viewBox="0 0 64 64" role="presentation">
        <path d="m16 40 14-14 10 10 12-12" />
        <path d="M52 24v12H40" />
      </svg>
    ),
  },
]

const scopeItems = [
  {
    number: '01',
    title: 'Ramp Design & Vehicle Movement Engineering',
    points: [
      'Gradient planning based on NBC standards',
      'Entry/exit ramp positioning',
      'Transition curve design for smooth movement',
      'Anti-skid surface recommendations',
      'Swept path validation for all vehicle types',
    ],
  },
  {
    number: '02',
    title: 'Basement Layout Planning',
    points: [
      'Column grid coordination',
      'Slot arrangement and aisle design',
      'Turning radius optimization',
      'Dead space elimination',
      'Multi-level circulation planning',
    ],
  },
  {
    number: '03',
    title: 'Ventilation & Air Quality Planning',
    points: [
      'Air Changes per Hour (ACH) calculations',
      'Mechanical ventilation system design',
      'CO level monitoring and control',
      'Fresh air intake and exhaust planning',
      'Natural vs mechanical ventilation strategy',
    ],
  },
  {
    number: '04',
    title: 'Fire Safety & Emergency Systems',
    points: [
      'Fire tender movement planning',
      'Sprinkler and hydrant system integration',
      'Smoke extraction systems',
      'Emergency exit routes',
      'Fire compartmentalization',
    ],
  },
  {
    number: '05',
    title: 'Lighting, Wayfinding & Safety',
    points: [
      'Energy-efficient lighting design',
      'Signage and directional systems',
      'CCTV and surveillance planning',
      'Pedestrian safety zones',
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
    number: '01.',
    title: 'Analysis',
    description:
      'Topographic and soil analysis to determine basement depth feasibility.',
  },
  {
    number: '02.',
    title: 'Movement',
    description:
      'Simulation of vehicle turning radii and traffic surge patterns.',
  },
  {
    number: '03.',
    title: 'Systems',
    description:
      'Integration of HVAC, fire suppression, and drainage systems.',
  },
  {
    number: '04.',
    title: 'Compliance',
    description:
      'Strict alignment with local authority guidelines and NOC protocols.',
  },
  {
    number: '05.',
    title: 'Delivery',
    description:
      'Handover of detailed structural blueprints and operational manuals.',
  },
]

const benefitsItems = [
  'Maximum space utilization',
  'Smooth vehicle movement in confined spaces',
  'Compliance with all safety norms',
  'Reduced risk of ventilation and fire hazards',
  'Enhanced user experience and safety',
]

const faqItems = [
  {
    id: 'Q1',
    question: 'What is the ideal ramp slope for basement parking?',
    answer:
      'The recommended slope is between 1:8 and 1:10 for safe vehicle movement.',
  },
  {
    id: 'Q2',
    question: 'What is the minimum height required for basement parking?',
    answer:
      'Typically between 2.4m and 3.0m depending on usage and regulations.',
  },
  {
    id: 'Q3',
    question: 'How is ventilation handled in basement parking?',
    answer:
      'Through mechanical ventilation systems based on Air Changes per Hour (ACH) calculations.',
  },
  {
    id: 'Q4',
    question: 'Is fire safety mandatory in basement parking design?',
    answer:
      'Yes, including sprinklers, hydrants, and smoke extraction systems.',
  },
  {
    id: 'Q5',
    question: 'What are the common issues in basement parking?',
    answer:
      'Poor ventilation, tight ramps, congestion, and non-compliance.',
  },
  {
    id: 'Q6',
    question: 'Can basement parking be optimized for more capacity?',
    answer:
      'Yes, through layout redesign and efficient planning.',
  },
  {
    id: 'Q7',
    question: 'What is ACH in ventilation design?',
    answer:
      'Air Changes per Hour - a measure of how frequently air is replaced.',
  },
  {
    id: 'Q8',
    question: 'Do you design multi-level parking structures?',
    answer:
      'Yes, including vertical circulation and structural coordination.',
  },
  {
    id: 'Q9',
    question: 'Is natural ventilation sufficient for basements?',
    answer:
      'Usually not - mechanical ventilation is required for safety.',
  },
]

function ServicesFive() {
  return (
    <section className="services-five-page">
      <section className="services-five-banner">
        <div className="services-five-banner__media">
          <img src={bannerImage} alt="Multi-level and basement parking design" />
        </div>

        <div className="services-five-banner__overlay">
          <div className="services-five-banner__inner">
            <div className="services-five-banner__panel">
              <div className="services-five-banner__copy">
                <span className="services-five-banner__eyebrow"></span>
                <h1>Multi-Level &amp; Basement Parking Design</h1>
              </div>

              <a className="services-five-banner__cta" href="/contact">
                Get Expert Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="services-five-intro">
        <div className="services-five-intro__inner">
          <p>
            Visionary Vantage Corporation Provides Specialized Basement And Multi-Level
            Parking Design Services In India, Focused On Delivering Space-Efficient,
            Safe, And Fully Compliant Parking Systems For Modern Infrastructure.
          </p>

          <p>
            In Dense Urban Environments, Basement Parking Is Not Just An Option - It Is
            A Necessity. Poorly Designed Basement Systems Can Lead To Ventilation
            Issues, Safety Risks, Difficult Vehicle Movement, And Compliance Failures.
          </p>

          <p>
            Our Approach Ensures Optimized Layouts, Smooth Circulation, Proper
            Ventilation, And Strict Adherence To NBC, Fire Safety Norms, And
            Engineering Standards.
          </p>
        </div>
      </section>

      <section className="services-five-matters">
        <div className="services-five-matters__top">
          <h2>WHY BASEMENT &amp; MULTI-LEVEL PARKING DESIGN MATTERS</h2>
        </div>

        <div className="services-five-matters__body">
          <div className="services-five-matters__inner">
            <div className="services-five-matters__grid">
              {designMattersItems.map((item) => (
                <article className="services-five-matters__item" key={item.title}>
                  <div className="services-five-matters__icon" aria-hidden="true">
                    {item.icon}
                  </div>
                  <h3>{item.title}</h3>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="services-five-scope">
        <div className="services-five-scope__top">
          <h2>OUR SCOPE OF WORK</h2>
        </div>

        <div className="services-five-scope__body">
          <div className="services-five-scope__inner">
            <div className="services-five-scope__grid">
              {scopeItems.map((item) => (
                <article className="services-five-scope__card" key={item.number}>
                  <span className="services-five-scope__number">{item.number}</span>
                  <h3>{item.title}</h3>
                  <div className="services-five-scope__points">
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

      <section className="services-five-standards">
        <div className="services-five-standards__top">
          <h2>TECHNICAL DESIGN STANDARDS (HIGH AUTHORITY SECTION)</h2>
        </div>

        <div className="services-five-standards__body">
          <div className="services-five-standards__inner">
            <div className="services-five-standards__grid">
              {standardsItems.map((item) => (
                <article className="services-five-standards__card" key={item.title}>
                  <h3>{item.title}</h3>
                  <div className="services-five-standards__points">
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

      <section className="services-five-applications">
        <div className="services-five-applications__top">
          <h2>APPLICATION AREAS</h2>
        </div>

        <div className="services-five-applications__body">
          <div className="services-five-applications__inner">
            <div className="services-five-applications__grid">
              {applicationItems.map((item) => (
                <article className="services-five-applications__card" key={item.title}>
                  <div className="services-five-applications__icon" aria-hidden="true">
                    {item.icon}
                  </div>
                  <h3>{item.title}</h3>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="services-five-approach">
        <div className="services-five-approach__top">
          <h2>OUR APPROACH</h2>
        </div>

        <div className="services-five-approach__body">
          <div className="services-five-approach__inner">
            <div className="services-five-approach__grid">
              {approachItems.map((item) => (
                <article className="services-five-approach__card" key={item.number}>
                  <h3>
                    <span>{item.number}</span> {item.title}
                  </h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="services-five-support">
        <div className="services-five-support__inner">
          <div className="services-five-support__media">
            <img src={supportImage} alt="Team support collaboration" />
          </div>

          <div className="services-five-support__card">
            <div className="services-five-support__heading">
              <span className="services-five-support__icon" aria-hidden="true">
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

            <a className="services-five-support__cta" href="tel:+91 9811207119">
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

      <section className="services-five-benefits">
        <div className="services-five-benefits__inner">
          <div className="services-five-benefits__content">
            <h2>Benefits of Our Design</h2>

            <div className="services-five-benefits__list">
              {benefitsItems.map((item) => (
                <div className="services-five-benefits__item" key={item}>
                  <span className="services-five-benefits__check" aria-hidden="true">
                    <svg viewBox="0 0 24 24" role="presentation">
                      <path d="m5 12 4 4 10-10" />
                    </svg>
                  </span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="services-five-benefits__media">
            <img src={benefitsImage} alt="Parking design benefits illustration" />
          </div>
        </div>
      </section>

      <section className="services-five-faq">
        <div className="services-five-faq__inner">
          <div className="services-five-faq__heading">
            <span className="services-five-faq__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="presentation">
                <path d="M12 18v.01" />
                <path d="M9.2 9a3 3 0 1 1 5.6 1.5c-.7 1-1.8 1.5-2.3 2.2-.3.4-.5.8-.5 1.3V15" />
                <path d="M20 12c0 4.4-3.6 8-8 8a8.6 8.6 0 0 1-3-.5L4 20l.8-4A8 8 0 1 1 20 12Z" />
              </svg>
            </span>
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="services-five-faq__list">
            {faqItems.map((item) => (
              <article className="services-five-faq__item" key={item.id}>
                <div className="services-five-faq__badge">{item.id}</div>
                <div className="services-five-faq__content">
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </section>
  )
}

export default ServicesFive
