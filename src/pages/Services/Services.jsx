import serviceBanner from '../../assets/images/servicebanner.jpg'
import anprPreviewImage from '../../assets/images/car3.jpg'
import smartParkingBanner from '../../assets/images/smart.jpg'
import parkingDesignImage from '../../assets/images/parkingdesign.jpg'
import sectionBackground from '../../assets/images/Our Expertise.png'
import supportImage from '../../assets/images/HB1.jpg'
import layoutRedesignImage from '../../assets/images/lobby.jpg'
import residentialSocietiesImage from '../../assets/images/Residential societies.jpg'
import mallsImage from '../../assets/images/malls.jpg'
import hospitalsImage from '../../assets/images/hospitals.jpg'
import itParksImage from '../../assets/images/IT parks.jpg'
import airportsImage from '../../assets/images/airports.jpg'
import railwayStationsImage from '../../assets/images/railway stations.jpg'
import './Services.css'

const applicationItems = [
  { title: 'RESIDENTIAL SOCIETIES', image: residentialSocietiesImage },
  { title: 'MALLS', image: mallsImage },
  { title: 'HOSPITALS', image: hospitalsImage },
  { title: 'IT PARKS', image: itParksImage },
  { title: 'AIRPORTS', image: airportsImage },
  { title: 'RAILWAY STATIONS', image: railwayStationsImage },
]

const processSteps = [
  {
    title: 'Consultation',
    description:
      'We begin by understanding your specific needs, challenges, and long-term goals.',
  },
  {
    title: 'Planning',
    description:
      'Detailed schematic designs and volume analyses are created for optimal efficiency.',
  },
  {
    title: 'Implementation',
    description:
      'Our experts oversee the integration of technology and physical design layouts.',
  },
  {
    title: 'Optimization',
    description:
      'Continuous monitoring and scaling to ensure long-term ROI and mobility.',
  },
]

const benefitsItems = [
  'Up to 30% better space utilization',
  'Reduced congestion and waiting time',
  'Faster government approvals',
  'Improved user experience',
  'Enhanced project value and revenue potential',
]

const smartParkingMattersItems = [
  {
    title: 'Reduces Manual Errors',
    icon: (
      <svg viewBox="0 0 64 64" role="presentation">
        <path d="M22 16h14l8 8v20l-8 8H22l-8-8V24Z" />
        <path d="M28 24h8a6 6 0 0 1 0 12h-8V24Zm0 12v4" />
        <path d="M18 18 46 46" />
      </svg>
    ),
  },
  {
    title: 'Improves Speed And Efficiency',
    icon: (
      <svg viewBox="0 0 64 64" role="presentation">
        <path d="M34 10 20 34h10l-2 20 16-28H34Z" />
      </svg>
    ),
  },
  {
    title: 'Enhances Security',
    icon: (
      <svg viewBox="0 0 64 64" role="presentation">
        <path d="M32 12 48 18v13c0 11-6.8 18.2-16 21-9.2-2.8-16-10-16-21V18Z" />
        <path d="M32 12v40" />
      </svg>
    ),
  },
  {
    title: 'Enables Data-Driven Decisions',
    icon: (
      <svg viewBox="0 0 64 64" role="presentation">
        <path d="m14 40 10-14 8 9 11-18 7 9" />
        <circle cx="41" cy="43" r="8" />
        <path d="m47 49 7 7" />
      </svg>
    ),
  },
]

const technicalArchitectureItems = [
  {
    title: 'API Layer',
    icon: (
      <svg viewBox="0 0 64 64" role="presentation">
        <path d="m32 14 6 6-6 6-6-6 6-6Zm12 12 6 6-6 6-6-6 6-6ZM20 26l6 6-6 6-6-6 6-6Zm12 12 6 6-6 6-6-6 6-6Z" />
      </svg>
    ),
  },
  {
    title: 'Cloud Engine',
    icon: (
      <svg viewBox="0 0 64 64" role="presentation">
        <path d="M20 48h24a8 8 0 1 0-1.4-15.9A13 13 0 0 0 18 22a16 16 0 0 0 2 26" />
        <path d="M32 16v18M32 16h10M32 16l8 10" />
      </svg>
    ),
  },
  {
    title: 'Edge Nodes',
    icon: (
      <svg viewBox="0 0 64 64" role="presentation">
        <rect x="22" y="22" width="20" height="20" />
        <rect x="28" y="28" width="8" height="8" />
        <path d="M32 14v8M32 42v8M14 32h8M42 32h8M20 20l-4-4M44 20l4-4M20 44l-4 4M44 44l4 4" />
      </svg>
    ),
  },
  {
    title: 'Analytics Engine',
    icon: (
      <svg viewBox="0 0 64 64" role="presentation">
        <path d="m16 42 10-14 9 10 13-18" />
        <circle cx="16" cy="42" r="2.8" fill="currentColor" stroke="none" />
        <circle cx="26" cy="28" r="2.8" fill="currentColor" stroke="none" />
        <circle cx="35" cy="38" r="2.8" fill="currentColor" stroke="none" />
        <circle cx="48" cy="20" r="2.8" fill="currentColor" stroke="none" />
        <path d="M18 18h0M46 12h0" />
        <path d="M18 18v0M46 12v0" />
      </svg>
    ),
  },
]

const smartOptimizationCards = [
  {
    title: 'Dead Space Utilization',
    description: 'Unlock hidden capacity in your facility using algorithmic spatial mapping.',
    icon: (
      <svg viewBox="0 0 64 64" role="presentation">
        <rect x="18" y="28" width="18" height="18" rx="2" />
        <rect x="28" y="18" width="18" height="18" rx="2" />
        <path d="M18 38H10V20M28 18h18v-8" />
      </svg>
    ),
  },
  {
    title: 'Capacity Enhancement',
    description: 'Increase stall count without physical expansion through intelligent rerouting.',
    icon: (
      <svg viewBox="0 0 64 64" role="presentation">
        <rect x="18" y="18" width="28" height="28" rx="2" />
        <path d="M18 32h28M32 18v28" />
      </svg>
    ),
  },
  {
    title: 'Slot Optimization',
    description: 'Dynamic allocation based on vehicle size and dwell time projections.',
    icon: (
      <svg viewBox="0 0 64 64" role="presentation">
        <rect x="16" y="16" width="32" height="32" rx="2" />
        <path d="M16 28h32M16 40h32M28 16v32M40 16v32" />
      </svg>
    ),
  },
  {
    title: 'Flow Improvement',
    description: 'AI-driven traffic patterns that eliminate internal facility congestion.',
    icon: (
      <svg viewBox="0 0 64 64" role="presentation">
        <path d="m16 42 10-14 9 10 13-18" />
        <circle cx="16" cy="42" r="3" fill="currentColor" stroke="none" />
        <circle cx="26" cy="28" r="3" fill="currentColor" stroke="none" />
        <circle cx="35" cy="38" r="3" fill="currentColor" stroke="none" />
        <circle cx="48" cy="20" r="3" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
]

const systemComponentCards = [
  {
    number: '01',
    title: 'Access Control Systems',
    description:
      'Securing your perimeter with multi-modal authentication. Our systems support seamless entry for authorized personnel and temporary guests alike.',
    bullets: [
      'Intelligent Boom Barriers with override protocols',
      'RFID & UHF readers',
      'Dynamic QR & Mobile-first access keys',
    ],
  },
  {
    number: '02',
    title: 'ANPR Systems',
    description:
      'Next-generation Automatic Number Plate Recognition powered by deep learning for 99.9% accuracy in all weather and light conditions.',
    details: [
      {
        title: 'Entry/Exit Logging',
        text: 'Real-time timestamping and plate archival.',
      },
      {
        title: 'Security Tracking',
        text: 'Instant alerts for blacklisted or flagged vehicles.',
      },
    ],
  },
]

const systemComponentExtras = [
  {
    title: 'Parking Guidance Systems',
    description:
      'LED indicators and high-visibility digital display boards to guide drivers to the nearest open slot.',
    icon: (
      <svg viewBox="0 0 64 64" role="presentation">
        <rect x="18" y="18" width="28" height="22" rx="2" />
        <path d="M26 46h12M32 40v12M24 24h10a5 5 0 0 1 0 10h-10V24Zm24-2h8M52 18v8M52 26v8" />
      </svg>
    ),
  },
  {
    title: 'IoT & Data Hub',
    description:
      'Real-time occupancy tracking and centralized cloud dashboards that sync every sensor in your network.',
    icon: (
      <svg viewBox="0 0 64 64" role="presentation">
        <circle cx="32" cy="32" r="6" />
        <circle cx="32" cy="14" r="3" />
        <circle cx="32" cy="50" r="3" />
        <circle cx="14" cy="32" r="3" />
        <circle cx="50" cy="32" r="3" />
        <circle cx="20" cy="20" r="3" />
        <circle cx="44" cy="20" r="3" />
        <path d="M32 20v6M32 38v6M20 32h6M38 32h6M24 24l4 4M40 24l-4 4" />
      </svg>
    ),
  },
  {
    title: 'EV Charging Integration',
    description:
      'Future-ready infrastructure with dynamic load balancing for integrated electric vehicle charging stalls.',
    icon: (
      <svg viewBox="0 0 64 64" role="presentation">
        <path d="M24 14h16v36H24zM28 18h8M32 30l-4 8h5l-2 8 7-11h-5l3-5" />
        <path d="M46 22h4a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4h-4M50 18v8" />
      </svg>
    ),
  },
]

const smartBenefitsItems = [
  'Reduced manpower',
  'Faster vehicle movement',
  'Real-time visibility',
  'Increased revenue control',
  'Higher operational efficiency',
]

const smartFaqItems = [
  {
    id: 'Q1',
    question: 'What is the difference between RFID and ANPR systems?',
    answer:
      'RFID uses tags for access control, while ANPR uses cameras to read number plates automatically.',
  },
  {
    id: 'Q2',
    question: 'How accurate are parking sensors?',
    answer: 'Modern sensors offer 95-98% accuracy depending on system quality.',
  },
  {
    id: 'Q3',
    question: 'Can smart parking systems be integrated with mobile apps?',
    answer: 'Yes, users can check availability and book slots in real-time.',
  },
  {
    id: 'Q4',
    question: 'What is a parking guidance system?',
    answer: 'It uses sensors and displays to guide drivers to available parking slots.',
  },
  {
    id: 'Q5',
    question: 'Is smart parking suitable for small projects?',
    answer: 'Yes, systems can be scaled as per project size.',
  },
  {
    id: 'Q6',
    question: 'How does automation reduce operational costs?',
    answer: 'It minimizes manpower, reduces errors, and improves efficiency.',
  },
  {
    id: 'Q7',
    question: 'Can smart systems generate reports?',
    answer: 'Yes, they provide data on occupancy, revenue, and usage trends.',
  },
]

const faqItems = [
  {
    id: 'Q1',
    question: 'What is the standard size of a car parking space in India?',
    answer: 'Typically 2.5m x 5m as per NBC guidelines.',
  },
  {
    id: 'Q2',
    question: 'What is the ideal ramp slope for parking?',
    answer: 'Between 1:8 and 1:10 for safe and smooth vehicle movement.',
  },
  {
    id: 'Q3',
    question: 'Can you redesign existing parking layouts?',
    answer: 'Yes, we specialize in optimizing existing spaces for better efficiency.',
  },
  {
    id: 'Q4',
    question: 'Do you provide approval-ready drawings?',
    answer: 'Yes, all designs are compliant with NBC, IRC, and local regulations.',
  },
  {
    id: 'Q5',
    question: 'How much efficiency improvement can be achieved?',
    answer: 'Up to 20-30% depending on the project.',
  },
]

const parkingPlanningItems = [
  {
    title: 'SITE FEASIBILITY & ANALYSIS',
    icon: (
      <svg viewBox="0 0 64 64" role="presentation">
        <circle cx="32" cy="32" r="7" />
        <circle cx="32" cy="15" r="5" />
        <circle cx="49" cy="24" r="5" />
        <circle cx="49" cy="49" r="5" />
        <circle cx="15" cy="24" r="5" />
        <circle cx="15" cy="49" r="5" />
        <path d="M32 20v7M38 28l6-3M38 36l6 8M26 28l-6-3M26 36l-6 8" />
      </svg>
    ),
  },
  {
    title: 'PARKING LAYOUT DESIGN (2D/3D)',
    icon: (
      <svg viewBox="0 0 64 64" role="presentation">
        <rect x="22" y="12" width="20" height="14" rx="2" />
        <path d="M29 17h6M18 36l4-10h20l4 10v10h-4v-5H22v5h-4Z" />
        <circle cx="24" cy="40" r="2.5" fill="currentColor" stroke="none" />
        <circle cx="40" cy="40" r="2.5" fill="currentColor" stroke="none" />
        <path d="M46 18h8v28M50 18v-6M50 46h-8" />
      </svg>
    ),
  },
  {
    title: 'BASEMENT & SURFACE PARKING PLANNING',
    icon: (
      <svg viewBox="0 0 64 64" role="presentation">
        <rect x="14" y="12" width="36" height="40" />
        <path d="M14 24h36M14 36h36M26 24v28M38 24v28" />
        <path d="M19 18h8M22 32l3-5 3 5M18 44h12" />
        <path d="M30 18h14M41 42l5-5 4 4M37 46h13" />
      </svg>
    ),
  },
  {
    title: 'ENTRY/EXIT OPTIMIZATION',
    icon: (
      <svg viewBox="0 0 64 64" role="presentation">
        <path d="M22 18h12v28H22zM34 15l12 4v26l-12 4Z" />
        <circle cx="38" cy="32" r="1.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: 'USER FLOW & SAFETY PLANNING',
    icon: (
      <svg viewBox="0 0 64 64" role="presentation">
        <circle cx="32" cy="32" r="17" />
        <path d="M32 21 42 25v8c0 7-4.2 11.8-10 14-5.8-2.2-10-7-10-14v-8Z" />
        <path d="m27 32 4 4 7-8" />
      </svg>
    ),
  },
]

function Services() {
  const isServicesThree = window.location.pathname === '/services-3'

  return (
    <section className="services-page">
      <section className={`services-hero${isServicesThree ? ' services-hero--smart' : ''}`}>
        <div className="services-hero__media">
          <img
            src={isServicesThree ? smartParkingBanner : serviceBanner}
            alt={
              isServicesThree
                ? 'Smart and automated parking system interior'
                : 'Parking structure design and consulting services'
            }
          />
        </div>

        <div className="services-hero__overlay">
          {isServicesThree && (
            <div className="services-hero__lane-mark" aria-hidden="true">
              <span className="services-hero__lane-arrow" />
            </div>
          )}

          <div className="services-hero__content">
            <div className="services-hero__panel">
              {isServicesThree ? (
                <div className="services-hero__copy">
                  <h1>SMART &amp; AUTOMATED PARKING</h1>
                </div>
              ) : (
                <p>Parking Structure Design &amp; Consulting Services</p>
              )}
              <a className="services-hero__cta" href="/contact">
                Get Expert Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {!isServicesThree && (
        <section className="services-parking-intro">
          <div className="services-parking-intro__inner">
            <p>
              Visionary Vantage Corporation Offers Specialized Parking Planning And
              Design Services In India, Focused On Creating Efficient, Compliant,
              And Future-Ready Parking Systems For Residential, Commercial, And
              Mixed-Use Developments.
            </p>
            <p>
              In Today&apos;s Urban Infrastructure, Poorly Designed Parking Leads To
              Traffic Congestion, Safety Risks, Approval Delays, And Revenue Loss.
              Our Approach Ensures Optimized Layouts, Smooth Circulation, And
              Compliance With National Building Code (NBC), IRC Guidelines, And
              Local Authority Regulations.
            </p>
            <p>
              We Design Parking That Works, Not Just On Drawings, But On Ground.
            </p>
          </div>
        </section>
      )}

      {!isServicesThree && (
        <section className="services-parking-planning">
          <div className="services-parking-planning__heading">
            <h2>OUR EXPERTISE</h2>
          </div>
          <div className="services-parking-planning__inner">
            <div className="services-parking-planning__grid">
              {parkingPlanningItems.map((item) => (
                <article className="services-parking-planning__item" key={item.title}>
                  <div className="services-parking-planning__icon" aria-hidden="true">
                    {item.icon}
                  </div>
                  <h2>{item.title}</h2>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {isServicesThree && (
        <section className="services-smart-intro">
          <div className="services-smart-intro__inner">
            <p>
              We Offer Advanced Smart Parking Solutions In India, Integrating Automation,
              IoT, And Digital Systems To Create Efficient And Future-Ready Parking
              Environments.
            </p>
            <p>
              Manual Parking Systems Often Lead To Delays, Errors, Revenue Leakage, And
              Inefficiency. Our Solutions Ensure Real-Time Monitoring, Faster Access, And
              Better Control.
            </p>
          </div>
        </section>
      )}

      {isServicesThree && (
        <section className="services-smart-matters">
          <div className="services-smart-matters__top">
            <h2>WHY SMART PARKING MATTERS</h2>
          </div>

          <div
            className="services-smart-matters__body"
            style={{ backgroundImage: `url(${sectionBackground})` }}
          >
            <div className="services-smart-matters__inner">
              <div className="services-smart-matters__grid">
                {smartParkingMattersItems.map((item) => (
                  <article className="services-smart-matters__item" key={item.title}>
                    <div className="services-smart-matters__icon" aria-hidden="true">
                      {item.icon}
                    </div>
                    <h3>{item.title}</h3>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {isServicesThree && (
        <section className="services-smart-architecture">
          <div className="services-smart-architecture__top">
            <h2>TECHNICAL ARCHITECTURE</h2>
          </div>

          <div
            className="services-smart-architecture__body"
            style={{ backgroundImage: `url(${sectionBackground})` }}
          >
            <div className="services-smart-architecture__inner">
              <div className="services-smart-architecture__grid">
                {technicalArchitectureItems.map((item) => (
                  <article className="services-smart-architecture__item" key={item.title}>
                    <div className="services-smart-architecture__icon" aria-hidden="true">
                      {item.icon}
                    </div>
                    <h3>{item.title}</h3>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {isServicesThree && (
        <section className="services-smart-layout">
          <div className="services-smart-layout__inner">
            <article className="services-smart-layout__feature services-smart-layout__feature--image">
              <img src={layoutRedesignImage} alt="Parking layout redesign visualization" />
              <div className="services-smart-layout__image-label">LAYOUT REDESIGN</div>
            </article>

            <article className="services-smart-layout__feature services-smart-layout__feature--tall">
              <div className="services-smart-layout__icon" aria-hidden="true">
                {smartOptimizationCards[0].icon}
              </div>
              <h3>{smartOptimizationCards[0].title}</h3>
              <p>{smartOptimizationCards[0].description}</p>
            </article>

            {smartOptimizationCards.slice(1).map((item) => (
              <article className="services-smart-layout__feature" key={item.title}>
                <div className="services-smart-layout__icon" aria-hidden="true">
                  {item.icon}
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      {isServicesThree && (
        <section className="services-system-components">
          <div className="services-system-components__inner">
            <div className="services-system-components__heading">
              <h2>SYSTEM COMPONENTS</h2>
            </div>

            <div className="services-system-components__highlights">
              <article className="services-system-components__highlight services-system-components__highlight--access">
                <div className="services-system-components__copy">
                  <span className="services-system-components__number">
                    {systemComponentCards[0].number}
                  </span>
                  <div className="services-system-components__text">
                    <h3>{systemComponentCards[0].title}</h3>
                    <p>{systemComponentCards[0].description}</p>
                    <div className="services-system-components__bullets">
                      {systemComponentCards[0].bullets.map((item) => (
                        <div className="services-system-components__bullet" key={item}>
                          <span aria-hidden="true">
                            <svg viewBox="0 0 24 24" role="presentation">
                              <circle cx="12" cy="12" r="9" />
                              <path d="m8.6 12.2 2.1 2.2 4.7-4.8" />
                            </svg>
                          </span>
                          <p>{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="services-system-components__visual services-system-components__visual--barrier" aria-hidden="true">
                  <div className="services-system-components__barrier-post" />
                  <div className="services-system-components__barrier-arm" />
                </div>
              </article>

              <article className="services-system-components__highlight services-system-components__highlight--anpr">
                <div className="services-system-components__visual services-system-components__visual--anpr">
                  <img src={anprPreviewImage} alt="ANPR systems dashboard preview" />
                  <div className="services-system-components__plate">MH 12 AB 0001</div>
                </div>

                <div className="services-system-components__copy">
                  <span className="services-system-components__number">
                    {systemComponentCards[1].number}
                  </span>
                  <div className="services-system-components__text">
                    <h3>{systemComponentCards[1].title}</h3>
                    <p>{systemComponentCards[1].description}</p>

                    <div className="services-system-components__details">
                      {systemComponentCards[1].details.map((item) => (
                        <article className="services-system-components__detail" key={item.title}>
                          <h4>{item.title}</h4>
                          <p>{item.text}</p>
                        </article>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </div>

            <div className="services-system-components__extras">
              {systemComponentExtras.map((item) => (
                <article className="services-system-components__extra" key={item.title}>
                  <div className="services-system-components__extra-icon" aria-hidden="true">
                    {item.icon}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="services-support">
        <div className="services-support__inner">
          <div className="services-support__media">
            <img src={supportImage} alt="Team support collaboration" />
          </div>

          <div className="services-support__card">
            <div className="services-support__heading">
              <span className="services-support__heading-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="presentation">
                  <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
                  <path d="M6 13v4a2 2 0 0 0 2 2h2v-8H8a2 2 0 0 0-2 2Zm12-2h-2v8h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Z" />
                  <path d="M12 19v1a2 2 0 0 0 2 2h1" />
                </svg>
              </span>
              <h2>Support</h2>
            </div>

            <p>
              At Visionary Vantage Corporation, support is not an afterthought, it is
              part of our core service. Whether you&apos;re in the design phase, approval
              stage, or post-execution, we provide timely expert assistance to keep your
              project on track.
            </p>

            <a className="services-support__cta" href="tel:+91 9811207119">
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

      {isServicesThree && (
        <section className="services-smart-benefits">
          <div className="services-smart-benefits__inner">
            <div className="services-smart-benefits__content">
              <h2>Benefits</h2>

              <div className="services-smart-benefits__list">
                {smartBenefitsItems.map((item) => (
                  <div className="services-smart-benefits__item" key={item}>
                    <span className="services-smart-benefits__check" aria-hidden="true">
                      <svg viewBox="0 0 24 24" role="presentation">
                        <path d="m6 12 4 4 8-8" />
                      </svg>
                    </span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="services-smart-benefits__media">
              <img src={parkingDesignImage} alt="Smart parking benefits illustration" />
            </div>
          </div>
        </section>
      )}

      {isServicesThree && (
        <section className="services-smart-faq">
          <div className="services-smart-faq__inner">
            <div className="services-smart-faq__heading">
              <span className="services-smart-faq__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="presentation">
                  <path d="M12 18v.01" />
                  <path d="M9.2 9a3 3 0 1 1 5.6 1.5c-.7 1-1.8 1.5-2.3 2.2-.3.4-.5.8-.5 1.3V15" />
                  <path d="M20 12c0 4.4-3.6 8-8 8a8.6 8.6 0 0 1-3-.5L4 20l.8-4A8 8 0 1 1 20 12Z" />
                </svg>
              </span>
              <h2>Frequently Asked Questions</h2>
            </div>

            <div className="services-smart-faq__list">
              {smartFaqItems.map((item) => (
                <article className="services-smart-faq__item" key={item.id}>
                  <div className="services-smart-faq__badge">{item.id}</div>
                  <div className="services-smart-faq__content">
                    <h3>{item.question}</h3>
                    <p>{item.answer}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {!isServicesThree && (
        <section className="footer-process">
          <div className="footer-process__inner">
            <div className="footer-process__intro">
              <h2>OUR PROCESS</h2>
              <p>
                A structured approach to transforming your parking infrastructure into a
                visionary asset.
              </p>
            </div>

            <div className="footer-process__grid">
              {processSteps.map((step) => (
                <article className="footer-process__step" key={step.title}>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  <span aria-hidden="true" />
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {!isServicesThree && (
        <section className="applications-section">
          <div className="applications-section__inner">
            <div className="applications-section__heading">
              <h2>APPLICATIONS</h2>
            </div>

            <div className="applications-section__grid">
              {applicationItems.map((item) => (
                <article className="applications-section__card" key={item.title}>
                  <img src={item.image} alt={item.title} />
                  <div className="applications-section__label">
                    <h3>{item.title}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {!isServicesThree && (
        <section className="services-benefits">
          <div className="services-benefits__inner">
            <div className="services-benefits__content">
              <h2>Benifits of Our Parking Design</h2>

              <div className="services-benefits__list">
                {benefitsItems.map((item) => (
                  <div className="services-benefits__item" key={item}>
                    <span className="services-benefits__check" aria-hidden="true">
                      <svg viewBox="0 0 24 24" role="presentation">
                        <path d="m6 12 4 4 8-8" />
                      </svg>
                    </span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="services-benefits__media">
              <img src={parkingDesignImage} alt="Parking design visualization" />
            </div>
          </div>
        </section>
      )}

      {!isServicesThree && (
        <section className="services-faq">
          <div className="services-faq__inner">
            <div className="services-faq__heading">
              <span className="services-faq__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="presentation">
                  <path d="M12 18v.01" />
                  <path d="M9.2 9a3 3 0 1 1 5.6 1.5c-.7 1-1.8 1.5-2.3 2.2-.3.4-.5.8-.5 1.3V15" />
                  <path d="M20 12c0 4.4-3.6 8-8 8a8.6 8.6 0 0 1-3-.5L4 20l.8-4A8 8 0 1 1 20 12Z" />
                </svg>
              </span>
              <h2>Frequently Asked Questions</h2>
            </div>

            <div className="services-faq__list">
              {faqItems.map((item) => (
                <article className="services-faq__item" key={item.id}>
                  <div className="services-faq__badge">{item.id}</div>
                  <div className="services-faq__content">
                    <h3>{item.question}</h3>
                    <p>{item.answer}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </section>
  )
}

export default Services
