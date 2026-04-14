import bannerImage from '../../assets/images/government.png'
import benefitsImage from '../../assets/images/parkingdesign.jpg'
import supportImage from '../../assets/images/HB1.jpg'
import './ServicesFour.css'

const complianceItems = [
  {
    title: 'Government Approvals And Sanctions',
    icon: (
      <svg viewBox="0 0 64 64" role="presentation">
        <path d="M12 24h40" />
        <path d="M18 24v24M30 24v24M42 24v24" />
        <path d="M10 50h44" />
        <path d="m32 12 20 10H12Z" />
      </svg>
    ),
  },
  {
    title: 'Project Timelines And Execution Speed',
    icon: (
      <svg viewBox="0 0 64 64" role="presentation">
        <circle cx="32" cy="32" r="18" />
        <path d="M32 22v12l8 8" />
      </svg>
    ),
  },
  {
    title: 'Safety And Legal Standards',
    icon: (
      <svg viewBox="0 0 64 64" role="presentation">
        <path d="m18 18 28 28" />
        <path d="M24 18 46 40" />
        <path d="M18 46h18" />
      </svg>
    ),
  },
  {
    title: 'Risk Of Penalties And Redesign',
    icon: (
      <svg viewBox="0 0 64 64" role="presentation">
        <path d="m32 12 20 36H12Z" />
        <path d="M32 26v10" />
        <circle cx="32" cy="44" r="2" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: 'Overall Project Credibility',
    icon: (
      <svg viewBox="0 0 64 64" role="presentation">
        <path d="m32 12 6 4 8-1 2 8 6 5-4 7 1 8-8 2-5 6-7-4-8 1-2-8-6-5 4-7-1-8 8-2Z" />
        <path d="m24 32 5 5 11-11" />
      </svg>
    ),
  },
]

const scopeItems = [
  {
    number: '01',
    title: 'Regulatory Compliance Assessment',
    points: [
      'Review of parking layouts as per NBC',
      'IRC guideline verification',
      'Local authority bylaw alignment',
      'Identification of compliance gaps',
    ],
  },
  {
    number: '02',
    title: 'Approval-Ready Design Support',
    points: [
      'Preparation of compliant parking drawings',
      'Design validation as per authority requirements',
      'Integration of safety and accessibility norms',
      'Documentation for submission',
    ],
  },
  {
    number: '03',
    title: 'Government Liaison & Coordination',
    points: [
      'Support in handling authority queries',
      'Technical clarifications',
      'Design modifications as per feedback',
      'Coordination with consultants and stakeholders',
    ],
  },
  {
    number: '04',
    title: 'Fire & Safety Compliance',
    points: [
      'Fire tender movement planning',
      'Hydrant and sprinkler system coordination',
      'Emergency exit route planning',
      'Smoke ventilation compliance',
    ],
  },
  {
    number: '05',
    title: 'Accessibility & Universal Design',
    points: [
      'Barrier-free parking layout',
      'Accessible parking slot allocation',
      'Ramp and movement compliance',
      'PWD and universal design standards',
    ],
  },
]

const standardsItems = [
  {
    title: 'National Building Code (NBC)',
    points: [
      'Parking dimensions and layout standards',
      'Fire safety and emergency norms',
      'Accessibility and universal design',
    ],
    icon: (
      <svg viewBox="0 0 64 64" role="presentation">
        <rect x="12" y="12" width="16" height="40" rx="3" />
        <path d="M20 18v4M20 28v4M20 38v4" />
        <rect x="36" y="12" width="16" height="40" rx="3" />
        <path d="M44 18v4M44 28v4M44 38v10" />
      </svg>
    ),
  },
  {
    title: 'IRC Guidelines',
    points: [
      'Turning radius and movement standards',
      'Road and circulation design',
      'Entry/exit and traffic flow compliance',
      'Documentation for submission',
    ],
    icon: (
      <svg viewBox="0 0 64 64" role="presentation">
        <path d="M18 40h28l-3-10H21Z" />
        <path d="M24 22h16l4 8H20Z" />
        <circle cx="24" cy="42" r="3" fill="currentColor" stroke="none" />
        <circle cx="40" cy="42" r="3" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: 'Fire Safety Norms',
    points: [
      'Fire tender access (minimum 6m width)',
      'Fire exits and evacuation routes',
      'Sprinkler and hydrant integration',
    ],
    icon: (
      <svg viewBox="0 0 64 64" role="presentation">
        <path d="M32 14 42 18v12c0 8-4.8 13.3-10 16-5.2-2.7-10-8-10-16V18Z" />
        <path d="m28 30 3 3 5-6" />
      </svg>
    ),
  },
  {
    title: 'Accessibility Standards',
    points: [
      'Reserved parking for differently-abled users',
      'Barrier-free access routes',
      'Slope and movement guidelines',
    ],
    icon: (
      <svg viewBox="0 0 64 64" role="presentation">
        <path d="M22 48V18c0-2.2 1.8-4 4-4h12c2.2 0 4 1.8 4 4v30" />
        <path d="M22 22h20" />
        <path d="M26 48c3-4 9-4 12 0" />
      </svg>
    ),
  },
]

const problemItems = [
  'Approval rejections due to non-compliance',
  'Incomplete or incorrect documentation',
  'Fire safety violations',
  'Accessibility non-compliance',
]

const approachItems = [
  { number: '1', title: 'Regulation Review' },
  { number: '2', title: 'Gap Identification' },
  { number: '3', title: 'Design Alignment' },
  { number: '4', title: 'Approval Support' },
]

const benefitsItems = [
  'Faster government approvals',
  'Reduced design revisions',
  'Zero compliance risk',
  'Improved project credibility',
  'Smooth execution without delays',
]

const faqItems = [
  {
    id: 'Q1',
    question: 'What is NBC in parking design?',
    answer:
      'The National Building Code defines standards for safety, design, and compliance in construction projects.',
  },
  {
    id: 'Q2',
    question: 'What is IRC and why is it important?',
    answer:
      'Indian Roads Congress provides guidelines for traffic movement, turning radius, and circulation design.',
  },
  {
    id: 'Q3',
    question: 'What approvals are required for parking projects in India?',
    answer:
      'Local authority approval, fire NOC, and sometimes environmental clearance.',
  },
  {
    id: 'Q4',
    question: 'What happens if parking design is not compliant?',
    answer:
      'It can lead to rejection, penalties, and costly redesign.',
  },
  {
    id: 'Q5',
    question: 'Do you provide approval-ready drawings?',
    answer:
      'Yes, all designs are prepared as per required standards.',
  },
  {
    id: 'Q6',
    question: 'Do you assist during government approvals?',
    answer:
      'Yes, including query handling and coordination.',
  },
  {
    id: 'Q7',
    question: 'How do you ensure compliance from the start?',
    answer:
      'By integrating NBC, IRC, and local bylaws during initial design stages.',
  },
  {
    id: 'Q8',
    question: 'Is fire safety mandatory in parking design?',
    answer:
      'Yes, it is a critical requirement for approval.',
  },
  {
    id: 'Q9',
    question: 'What are accessibility requirements in parking?',
    answer:
      'Dedicated slots, proper ramp slopes, and barrier-free movement.',
  },
]

function ServicesFour() {
  return (
    <section className="services-four-page">
      <section className="services-four-banner">
        <div className="services-four-banner__media">
          <img src={bannerImage} alt="Multi-level basement parking structure" />
        </div>

        <div className="services-four-banner__overlay">
          <div className="services-four-banner__inner">
            <div className="services-four-banner__panel">
              <div className="services-four-banner__copy">
                <h1>
                  <span>Government &amp; Compliance Advisory</span>
                  <span>Approval Ready Planning</span>
                  <span>Zero Delays</span>
                </h1>
              </div>

              <a className="services-four-banner__cta" href="/contact">
                Get Expert Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="services-four-intro">
        <div className="services-four-intro__inner">
          <p>
            Visionary Vantage Corporation provides specialized parking compliance and government advisory services in India, ensuring that every parking design meets National Building Code (NBC), IRC guidelines, fire safety norms, and local authority regulations.
            In infrastructure and real estate projects, non-compliance can lead to approval rejections, costly redesigns, project delays, and financial losses. Our approach ensures that your parking systems are fully compliant, technically sound, and approval-ready from day one.
          </p>
        </div>
      </section>

      <section className="services-four-matters">
        <div className="services-four-matters__top">
          <h2>WHY COMPLIANCE MATTERS</h2>
        </div>

        <div className="services-four-matters__body">
          <div className="services-four-matters__inner">
            <div className="services-four-matters__grid">
              {complianceItems.map((item) => (
                <article className="services-four-matters__item" key={item.title}>
                  <div className="services-four-matters__icon" aria-hidden="true">
                    {item.icon}
                  </div>
                  <h3>{item.title}</h3>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="services-four-scope">
        <div className="services-four-scope__top">
          <h2>OUR SCOPE OF WORK</h2>
        </div>

        <div className="services-four-scope__body">
          <div className="services-four-scope__inner">
            <div className="services-four-scope__grid">
              {scopeItems.map((item) => (
                <article className="services-four-scope__card" key={item.number}>
                  <span className="services-four-scope__number">{item.number}</span>
                  <h3>{item.title}</h3>
                  <div className="services-four-scope__points">
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

      <section className="services-four-standards">
        <div className="services-four-standards__top">
          <h2>TECHNICAL STANDARDS WE FOLLOW</h2>
        </div>

        <div className="services-four-standards__body">
          <div className="services-four-standards__inner">
            <div className="services-four-standards__grid">
              {standardsItems.map((item) => (
                <article className="services-four-standards__card" key={item.title}>
                  <div className="services-four-standards__icon" aria-hidden="true">
                    {item.icon}
                  </div>
                  <h3>{item.title}</h3>
                  <div className="services-four-standards__points">
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

      <section className="services-four-problems">
        <div className="services-four-problems__top">
          <h2>COMMON PROBLEMS WE SOLVE</h2>
        </div>

        <div className="services-four-problems__body">
          <div className="services-four-problems__inner">
            <div className="services-four-problems__grid">
              {problemItems.map((item) => (
                <article className="services-four-problems__card" key={item}>
                  <span className="services-four-problems__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" role="presentation">
                      <path d="m5 12 4 4 10-10" />
                    </svg>
                  </span>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="services-four-approach">
        <div className="services-four-approach__top">
          <h2>OUR APPROACH</h2>
        </div>

        <div className="services-four-approach__body">
          <div className="services-four-approach__inner">
            <div className="services-four-approach__steps">
              {approachItems.map((item) => (
                <article className="services-four-approach__step" key={item.number}>
                  <div className="services-four-approach__step-box">
                    <span>{item.number}</span>
                  </div>
                  <h3>{item.title}</h3>
                </article>
              ))}
            </div>

            <div className="services-four-approach__support">
              <div className="services-four-approach__support-media">
                <img src={supportImage} alt="Team support collaboration" />
              </div>

              <div className="services-four-approach__support-card">
                <div className="services-four-approach__support-heading">
                  <span className="services-four-approach__support-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" role="presentation">
                      <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
                      <path d="M6 13v4a2 2 0 0 0 2 2h2v-8H8a2 2 0 0 0-2 2Zm12-2h-2v8h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Z" />
                      <path d="M12 19v1a2 2 0 0 0 2 2h1" />
                    </svg>
                  </span>
                  <h3>Support</h3>
                </div>

                <p>
                  At Visionary Vantage Corporation, Support Is Not An Afterthought, It&apos;s
                  Part Of Our Core Service. Whether You&apos;re In The Design Phase, Approval
                  Stage, Or Post-Execution, We Provide Timely, Expert Assistance To Keep
                  Your Project On Track.
                </p>

                <a className="services-four-approach__support-cta" href="tel:011-35862581">
                  <span aria-hidden="true">
                    <svg viewBox="0 0 24 24" role="presentation">
                      <path d="M6.6 4h3.1l1.5 4.1-2 1.8a15.6 15.6 0 0 0 6 6l1.8-2L21 15.3v3.1a2 2 0 0 1-2.2 2A17.9 17.9 0 0 1 3.6 5.2 2 2 0 0 1 6.6 4Z" />
                    </svg>
                  </span>
                  011-35862581
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-four-benefits">
        <div className="services-four-benefits__inner">
          <div className="services-four-benefits__content">
            <h2>Benefits of Our Advisory</h2>

            <div className="services-four-benefits__list">
              {benefitsItems.map((item) => (
                <div className="services-four-benefits__item" key={item}>
                  <span className="services-four-benefits__check" aria-hidden="true">
                    <svg viewBox="0 0 24 24" role="presentation">
                      <path d="m5 12 4 4 10-10" />
                    </svg>
                  </span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="services-four-benefits__media">
            <img src={benefitsImage} alt="Parking advisory benefits illustration" />
          </div>
        </div>
      </section>

      <section className="services-four-faq">
        <div className="services-four-faq__inner">
          <div className="services-four-faq__heading">
            <span className="services-four-faq__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="presentation">
                <path d="M12 18v.01" />
                <path d="M9.2 9a3 3 0 1 1 5.6 1.5c-.7 1-1.8 1.5-2.3 2.2-.3.4-.5.8-.5 1.3V15" />
                <path d="M20 12c0 4.4-3.6 8-8 8a8.6 8.6 0 0 1-3-.5L4 20l.8-4A8 8 0 1 1 20 12Z" />
              </svg>
            </span>
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="services-four-faq__list">
            {faqItems.map((item) => (
              <article className="services-four-faq__item" key={item.id}>
                <div className="services-four-faq__badge">{item.id}</div>
                <div className="services-four-faq__content">
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

export default ServicesFour
