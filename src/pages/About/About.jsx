import aboutDetailImage from '../../assets/images/introbanner.jpg'
import missionImageOne from '../../assets/images/M1.jpg'
import missionImageTwo from '../../assets/images/M2.jpg'
import missionImageThree from '../../assets/images/M3.jpg'
import './About.css'

const whyChooseUsCards = [
  {
    title: 'Innovative Parking Technology',
    description:
      'Cutting-edge automation and sensors to streamline flow and reduce overhead.',
    icon: (
      <svg viewBox="0 0 24 24" role="presentation">
        <path
          d="M6 19V9.5a1.5 1.5 0 0 1 1.5-1.5H10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 17.5 7.5 15l-2.5 2.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.5 7A2.5 2.5 0 1 0 13.5 2a2.5 2.5 0 0 0 0 5Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M11 10.5h5.5l2.5 2.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.5 10.5V19"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M18.5 15H14"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: 'Efficient Space Optimization',
    description:
      'Maximizing every square foot to increase capacity and vehicle throughput.',
    icon: (
      <svg viewBox="0 0 24 24" role="presentation">
        <rect x="4" y="4" width="6" height="6" rx="1" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <rect x="14" y="4" width="6" height="6" rx="1" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <rect x="4" y="14" width="6" height="6" rx="1" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <rect x="14" y="14" width="6" height="6" rx="1" fill="none" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: 'Reliable Infrastructure Solutions',
    description:
      'Durable construction and robust systems designed for 24/7 mission-critical use.',
    icon: (
      <svg viewBox="0 0 24 24" role="presentation">
        <path
          d="M3 11.5 12 4l9 7.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.5 10.5V20M12 10.5V20M17.5 10.5V20M4 20h16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: 'Experienced Industry Professionals',
    description:
      'A veteran team bringing decades of strategic insight to every project.',
    icon: (
      <svg viewBox="0 0 24 24" role="presentation">
        <path
          d="M12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM5.5 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm13 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M4 19c0-2.2 2.5-4 5.5-4S15 16.8 15 19M9 19c0-2.5 3-4.5 6.5-4.5S22 16.5 22 19"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
]

const missionImages = [
  {
    image: missionImageOne,
    alt: 'Business partnership and analytics dashboard',
    className: 'about-mission__image-card--top',
  },
  {
    image: missionImageThree,
    alt: 'Professional crossing a strategic pathway',
  },
  {
    image: missionImageTwo,
    alt: 'Business growth and financial performance concept',
  },
]

const missionItems = [
  {
    title: 'Innovation & Efficiency',
    description:
      'To provide innovative parking and infrastructure solutions that improve operational efficiency and user convenience.',
    icon: (
      <svg viewBox="0 0 24 24" role="presentation">
        <path
          d="M12 3a5.5 5.5 0 0 0-3.7 9.6c.5.5.8 1.2.8 1.9V15h5.8v-.5c0-.7.3-1.4.8-1.9A5.5 5.5 0 0 0 12 3Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.5 18h5M10.5 21h3"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: 'Long-term Partnerships',
    description:
      'To build long term partnerships with clients by maintaining high standards of quality, transparency and professionalism.',
    icon: (
      <svg viewBox="0 0 24 24" role="presentation">
        <path
          d="M10 13.5 8 15.5a3 3 0 0 1-4.2-4.2l2.7-2.7A3 3 0 0 1 10.7 8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m14 10.5 2-2a3 3 0 1 1 4.2 4.2l-2.7 2.7A3 3 0 0 1 13.3 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m9 12 6-6m-6 12 6-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: 'Sustainable Development',
    description:
      'To contribute to the development of smart cities and sustainable infrastructure through intelligent mobility solutions.',
    icon: (
      <svg viewBox="0 0 24 24" role="presentation">
        <path
          d="M12 4v4m0 8v4M4 12h4m8 0h4M6.3 6.3l2.8 2.8m5.8 5.8 2.8 2.8m0-11.4-2.8 2.8m-5.8 5.8-2.8 2.8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle cx="12" cy="12" r="2.8" fill="none" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: 'Continuous Evolution',
    description:
      'To continuously evolve with technology and industry needs while delivering value driven results for every project.',
    icon: (
      <svg viewBox="0 0 24 24" role="presentation">
        <path
          d="M6 16 16 6m0 0h-5m5 0v5"
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
    title: 'Advanced Technology',
    description:
      'To leverage advanced technologies and industry expertise to deliver reliable and scalable systems for modern urban environments.',
    icon: (
      <svg viewBox="0 0 24 24" role="presentation">
        <path
          d="M12 8.5A3.5 3.5 0 1 0 12 15.5 3.5 3.5 0 0 0 12 8.5Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M19 12h2M3 12h2m10.8-6.1 1.4-1.4M6.8 17.2l1.4-1.4m9 1.4-1.4-1.4M8.2 8.2 6.8 6.8M12 3v2m0 14v2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
]

function About() {
  return (
    <section className="about-page">
      <section className="about-hero">
        <div className="about-hero__overlay">
          <div className="about-hero__content">
            <h1>We Don&apos;t Just Plan Parking. We Make It Perform.</h1>
            <p>
              At Visionary Vantage Corporation, we believe parking is not just
              about space it&apos;s about movement, efficiency, and intelligent
              planning.
            </p>
          </div>
        </div>
      </section>

      <section className="about-details">
        <div className="about-details__grid">
          <div className="about-details__image">
            <img src={aboutDetailImage} alt="Parking facility exterior at night" />
          </div>

          <div className="about-details__content">
            <h2>We See What Others Ignore.</h2>

            <article className="about-details__item">
              <div className="about-details__icon" aria-hidden="true">
                <span>P</span>
              </div>
              <p>
                Parking is not about vehicles. It&apos;s about movement. It&apos;s
                about how people arrive, pause, and move forward. Most parking
                designs look perfect on paper, but on ground they fail.
              </p>
            </article>

            <p className="about-details__highlights">
              Congestion. Confusion. Wasted Space. Delays.
            </p>

            <article className="about-details__item">
              <div className="about-details__icon about-details__icon--spark" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="presentation">
                  <path
                    d="M12 3l1.4 4.1L17.5 8l-4.1 1.4L12 13.5l-1.4-4.1L6.5 8l4.1-.9L12 3Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 14l.9 2.6L9.5 17.5l-2.6.9L6 21l-.9-2.6L2.5 17.5l2.6-.9L6 14Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18 13l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p>
                That&apos;s exactly what we saw, again and again, across projects
                worth crores struggling because something as basic as parking was
                treated like an afterthought.
              </p>
            </article>

            <p className="about-details__closing">
              That&apos;s where Visionary Vantage Corporation was born
            </p>
          </div>
        </div>
      </section>

      <section className="about-story-journey">
        <div className="about-story-journey__inner">
          <article className="about-story-journey__column">
            <h2>The Beginning</h2>
            <p>Our founder saw a pattern</p>
            <ul>
              <li>Designs that ignored actual vehicle movement</li>
              <li>Spaces that looked efficient but didn&apos;t function</li>
              <li>Projects facing delays due to poor planning</li>
              <li>Revenue potential being completely wasted</li>
            </ul>
            <p>And one clear thought emerged:</p>
            <p>Parking is not just space. It&apos;s a system.</p>
          </article>

          <article className="about-story-journey__column">
            <h2>The Shift</h2>
            <p>
              Instead of following outdated methods, we chose to rethink
              everything
            </p>
            <ul>
              <li>Design based on how vehicles actually move</li>
              <li>Plan for real usage, not assumptions</li>
              <li>Focus on flow, efficiency, and performance</li>
            </ul>
            <p>Because in infrastructure:-</p>
            <p>small mistakes create big consequences.</p>
          </article>

          <div className="about-story-journey__belief">
            <p>Founder Belief :</p>
            <strong>If it doesn&apos;t work on ground, it doesn&apos;t work at all</strong>
          </div>
        </div>
      </section>

      <section className="about-why-choose">
        <div className="about-why-choose__inner">
          <div className="about-why-choose__heading">
            <h2>WHY CHOOSE US?</h2>
            <span aria-hidden="true" />
          </div>

          <div className="about-why-choose__grid">
            {whyChooseUsCards.map((card) => (
              <article className="about-why-card" key={card.title}>
                <div className="about-why-card__icon" aria-hidden="true">
                  {card.icon}
                </div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-vision">
        <div className="about-vision__inner">
          <div className="about-vision__heading">
            <div className="about-vision__eye" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="presentation">
                <path
                  d="M2 12s3.7-6 10-6 10 6 10 6-3.7 6-10 6S2 12 2 12Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="12" r="2.8" fill="none" stroke="currentColor" strokeWidth="1.8" />
              </svg>
            </div>
            <h2>OUR VISION</h2>
          </div>

          <div className="about-vision__quote">
            <p>
              To Redefine Urban Parking By Creating Intelligent, Efficient,
              And Future-Ready Mobility Spaces.
            </p>
          </div>
        </div>
      </section>

      <section className="about-mission">
        <div className="about-mission__inner">
          <div className="about-mission__heading">
            <div className="about-mission__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" role="presentation">
                <path
                  d="M12 3v6m0 0a4 4 0 1 1-4 4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 9a4 4 0 1 0 4 4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h2>OUR MISSION</h2>
          </div>

          <div className="about-mission__layout">
            <div className="about-mission__images">
              {missionImages.map((item) => (
                <div
                  className={`about-mission__image-card ${item.className || ''}`.trim()}
                  key={item.alt}
                >
                  <img src={item.image} alt={item.alt} />
                </div>
              ))}
            </div>

            <div className="about-mission__cards">
              {missionItems.map((item) => (
                <article className="about-mission-card" key={item.title}>
                  <div className="about-mission-card__icon" aria-hidden="true">
                    {item.icon}
                  </div>

                  <div className="about-mission-card__content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="about-cta__inner">
          <h2>JOIN OUR JOURNEY TO SMARTER CITIES</h2>
          <p>
            Ready to optimize your infrastructure? Let&apos;s discuss how our
            data-driven approach can solve your parking challenges.
          </p>

          <div className="about-cta__actions">
            <a className="about-cta__button about-cta__button--primary" href="/contact">
              Contact Us
            </a>
            <a className="about-cta__button about-cta__button--secondary" href="/services">
              View Services
            </a>
          </div>
        </div>
      </section>
    </section>
  )
}

export default About
