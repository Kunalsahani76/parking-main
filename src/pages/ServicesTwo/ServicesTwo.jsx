import bannerImage from '../../assets/images/carinbuilding.jpg'
import parkingDesignImage from '../../assets/images/parkingdesign.jpg'
import supportImage from '../../assets/images/HB1.jpg'
import roadImage from '../../assets/images/carinroad.jpg'
import parkingLobbyImage from '../../assets/images/parkinglobby.jpg'
import designImage from '../../assets/images/designa.png'
import buildingImage from '../../assets/images/carinbuilding.jpg'
import sectionBackground from '../../assets/images/Our Expertise.png'
import './ServicesTwo.css'

const challengeItems = [
  {
    title: 'Entry/Exit Bottlenecks',
    icon: (
      <svg viewBox="0 0 64 64" role="presentation">
        <rect x="16" y="16" width="32" height="32" />
        <path d="M24 40 40 24M30 24h10v10M24 30V24h6" />
      </svg>
    ),
  },
  {
    title: 'Vehicle Conflict Points',
    icon: (
      <svg viewBox="0 0 64 64" role="presentation">
        <path d="M32 48V34c0-10-5-16-13-22M32 34c0-10 5-16 13-22" />
        <path d="M19 12h13M45 12H32M14 17l5-5 5 5M50 17l-5-5-5 5" />
      </svg>
    ),
  },
  {
    title: 'Inefficient Turning Movements',
    icon: (
      <svg viewBox="0 0 64 64" role="presentation">
        <path d="M41 46 31 36l10-10" />
        <path d="M31 14v22h10" />
      </svg>
    ),
  },
  {
    title: 'Peak-Hour Congestion',
    icon: (
      <svg viewBox="0 0 64 64" role="presentation">
        <circle cx="32" cy="32" r="18" />
        <path d="M32 22v10l-6 6M32 14v-4M50 32h4M14 32h-4M44.7 19.3l2.8-2.8M19.3 44.7l-2.8 2.8" />
        <path d="M46 46c-3.4 3.4-8.1 5.5-13.3 5.5" />
      </svg>
    ),
  },
  {
    title: 'Pedestrian Safety Risks',
    icon: (
      <svg viewBox="0 0 64 64" role="presentation">
        <path d="M22 44h20M24 44v5l4 3M40 44v5l-4 3" />
        <path d="M26 24h12c4 0 7 3 7 7v8H19v-8c0-4 3-7 7-7Z" />
        <rect x="28" y="14" width="8" height="8" rx="1" />
      </svg>
    ),
  },
]

const scopeItems = [
  { title: 'ENTRY & EXIT ENGINEERING', image: buildingImage },
  { title: 'INTERNAL CIRCULATION DESIGN', image: parkingLobbyImage },
  { title: 'PEDESTRIAN-VEHICLE SEGREGATION', image: designImage },
  { title: 'QUEUE & CONGESTION MANAGEMENT', image: roadImage },
]

const methodologyItems = [
  {
    title: 'Swept Path Analysis',
    points: [
      'Car, SUV, and service vehicle movement',
      'Turning radius validation',
      'Ramp maneuverability',
    ],
    icon: (
      <svg viewBox="0 0 64 64" role="presentation">
        <rect x="14" y="14" width="24" height="32" rx="2" />
        <path d="M22 38V28M30 38V20M18 38v-6M14 46h24" />
      </svg>
    ),
  },
  {
    title: 'Traffic Volume Analysis',
    points: [
      'Peak hour load estimation',
      'Entry/exit capacity calculation',
      'Vehicle arrival rate modelling',
    ],
    icon: (
      <svg viewBox="0 0 64 64" role="presentation">
        <path d="M16 44V26M28 44V18M40 44V30" />
        <path d="M12 44h36" />
      </svg>
    ),
  },
  {
    title: 'IRC Design Parameters',
    points: [
      'Minimum turning radius: 5.5m-6.0m',
      'Lane width: 3.0m-3.5m',
      'Aisle width: 5.5m-7.5m',
    ],
    icon: (
      <svg viewBox="0 0 64 64" role="presentation">
        <path d="M16 22h14M16 32h14M16 42h14" />
        <path d="m38 18 6 6 10-10M38 38l6 6 10-10M40 28l14 14M54 28 40 42" />
      </svg>
    ),
  },
  {
    title: 'Simulation-Based Planning',
    points: [
      'Movement modeling for large projects',
      'Conflict detection',
      'Flow optimization before execution',
    ],
    icon: (
      <svg viewBox="0 0 64 64" role="presentation">
        <path d="M32 14v8M20 22a16 16 0 1 0 24 0" />
        <path d="M28 34a4 4 0 1 1 8 0c0 3-4 4-4 7" />
        <path d="m40 18 6 0-3-5" />
      </svg>
    ),
  },
]

const benefitsItems = [
  'Smooth traffic flow',
  'Reduced waiting time',
  'Enhanced safety',
  'Better user experience',
  'Higher operational efficiency',
]

const faqItems = [
  {
    id: 'Q1',
    question: 'What is Peak Hour Traffic Volume (PHTV) and why is it important?',
    answer:
      'PHTV represents the maximum vehicle load during peak usage hours. It helps design entry/exit capacity and prevent congestion.',
  },
  {
    id: 'Q2',
    question: 'How do you calculate queue length at entry gates?',
    answer:
      'Queue length is calculated based on vehicle arrival rate, service time per vehicle, and peak load conditions.',
  },
  {
    id: 'Q3',
    question: 'What is swept path analysis in parking design?',
    answer:
      'It is a simulation technique used to check how vehicles turn and move within a layout, ensuring no collisions or tight turns.',
  },
  {
    id: 'Q4',
    question: 'What is the ideal aisle width for smooth circulation?',
    answer: 'Typically 5.5m-7.5m depending on parking angle and vehicle type.',
  },
  {
    id: 'Q5',
    question: 'How do you reduce congestion in high-density parking areas?',
    answer:
      'Through one-way circulation systems, multiple entry points, and proper queue management.',
  },
  {
    id: 'Q6',
    question: 'Do you design for emergency vehicle movement?',
    answer:
      'Through one-way circulation systems, multiple entry points, and proper queue management.',
  },
  {
    id: 'Q7',
    question: 'Can circulation planning improve user experience?',
    answer:
      'Yes, smooth movement reduces confusion, waiting time, and stress.',
  },
]

function ServicesTwo() {
  return (
    <section className="services-two-page">
      <section className="services-two-banner">
        <div className="services-two-banner__media">
          <img src={bannerImage} alt="Traffic flow and circulation planning" />
        </div>

        <div className="services-two-banner__overlay">
          <div className="services-two-banner__panel">
            <div className="services-two-banner__content">
              <h1>Traffic Flow &amp; Circulation Planning</h1>
              <a href="/contact">Get Expert Consultation</a>
            </div>
          </div>
        </div>
      </section>

      <section className="services-two-intro">
        <div className="services-two-intro__inner">
          <p>
            Efficient Traffic Flow And Circulation Planning Is The Backbone Of Any
            Successful Parking System. Poorly Designed Circulation Leads To Vehicle
            Conflicts, Congestion, Safety Hazards, And Operational Inefficiencies.
          </p>

          <p>
            At Visionary Vantage Corporation, We Design Data-Driven Vehicle Movement
            Systems That Ensure Smooth Entry, Circulation, Parking, And Exit -
            Aligned With IRC Guidelines, NBC Standards, And Real-World Usage Patterns.
          </p>
        </div>
      </section>

      <section className="services-two-challenges">
        <div className="services-two-challenges__top">
          <div className="services-two-challenges__title">
            <h2>CORE CHALLENGES WE SOLVE</h2>
          </div>
        </div>

        <div
          className="services-two-challenges__body"
          style={{ backgroundImage: `url(${sectionBackground})` }}
        >
          <div className="services-two-challenges__inner">
            <div className="services-two-challenges__grid">
              {challengeItems.map((item) => (
                <article className="services-two-challenges__item" key={item.title}>
                  <div className="services-two-challenges__icon" aria-hidden="true">
                    {item.icon}
                  </div>
                  <h3>{item.title}</h3>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="services-two-scope">
        <div className="services-two-scope__inner">
          <div className="services-two-scope__heading">
            <h2>DETAILED SCOPE OF WORK</h2>
          </div>

          <div className="services-two-scope__grid">
            {scopeItems.map((item) => (
              <article className="services-two-scope__card" key={item.title}>
                <img src={item.image} alt={item.title} />
                <div className="services-two-scope__label">
                  <h3>{item.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="services-two-support">
        <div className="services-two-support__inner">
          <div className="services-two-support__media">
            <img src={supportImage} alt="Team support collaboration" />
          </div>

          <div className="services-two-support__card">
            <div className="services-two-support__heading">
              <span className="services-two-support__heading-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="presentation">
                  <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
                  <path d="M6 13v4a2 2 0 0 0 2 2h2v-8H8a2 2 0 0 0-2 2Zm12-2h-2v8h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Z" />
                  <path d="M12 19v1a2 2 0 0 0 2 2h1" />
                </svg>
              </span>
              <h2>Support</h2>
            </div>

            <p>
              At Visionary Vantage Corporation, support is not an afterthought, it&apos;s
              part of our core service. Whether you&apos;re in the design phase, approval
              stage, or post-execution, we provide timely expert assistance to keep your
              project on track.
            </p>

            <a className="services-two-support__cta" href="tel:+91 9811207119">
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

      <section className="services-two-methodology">
        <div className="services-two-methodology__inner">
          <div className="services-two-methodology__heading">
            <h2>TECHNICAL METHODOLOGY</h2>
          </div>

          <div className="services-two-methodology__grid">
            {methodologyItems.map((item) => (
              <article className="services-two-methodology__card" key={item.title}>
                <div className="services-two-methodology__icon" aria-hidden="true">
                  {item.icon}
                </div>
                <h3>{item.title}</h3>
                <div className="services-two-methodology__points">
                  {item.points.map((point) => (
                    <p key={point}>{point}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="services-two-benefits">
        <div className="services-two-benefits__inner">
          <div className="services-two-benefits__content">
            <h2>Benefits of Our Parking</h2>

            <div className="services-two-benefits__list">
              {benefitsItems.map((item) => (
                <div className="services-two-benefits__item" key={item}>
                  <span className="services-two-benefits__check" aria-hidden="true">
                    <svg viewBox="0 0 24 24" role="presentation">
                      <path d="m6 12 4 4 8-8" />
                    </svg>
                  </span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="services-two-benefits__media">
            <img src={parkingDesignImage} alt="Parking design benefits visualization" />
          </div>
        </div>
      </section>

      <section className="services-two-faq">
        <div className="services-two-faq__inner">
          <div className="services-two-faq__heading">
            <span className="services-two-faq__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="presentation">
                <path d="M12 18v.01" />
                <path d="M9.2 9a3 3 0 1 1 5.6 1.5c-.7 1-1.8 1.5-2.3 2.2-.3.4-.5.8-.5 1.3V15" />
                <path d="M20 12c0 4.4-3.6 8-8 8a8.6 8.6 0 0 1-3-.5L4 20l.8-4A8 8 0 1 1 20 12Z" />
              </svg>
            </span>
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="services-two-faq__list">
            {faqItems.map((item) => (
              <article className="services-two-faq__item" key={item.id}>
                <div className="services-two-faq__badge">{item.id}</div>
                <div className="services-two-faq__content">
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

export default ServicesTwo
