import { useEffect, useState } from 'react'
import homeBannerImage from '../../assets/images/homebanner.png'
import carouselOneImage from '../../assets/images/c1.jpg'
import carouselTwoImage from '../../assets/images/c2.jpg'
import carouselThreeImage from '../../assets/images/c3.jpg'
import carouselFourImage from '../../assets/images/c4.jpg'
import hbOneImage from '../../assets/images/HB1.jpg'
import mapImage from '../../assets/images/map.jpg'
import parkingLobbyImage from '../../assets/images/parkinglobby.jpg'
import carInBuildingImage from '../../assets/images/carinbuilding.jpg'
import carInRoadImage from '../../assets/images/carinroad.jpg'
import multiImage from '../../assets/images/multi.jpg'
import designaImage from '../../assets/images/designa.png'
import kaImage from '../../assets/images/ka.png'
import nagarImage from '../../assets/images/nagar.png'
import plusImage from '../../assets/images/plus.png'
import symImage from '../../assets/images/sym.png'
import elevenImage from '../../assets/images/11.png'
import twentyTwoImage from '../../assets/images/22.png'
import clockImage from '../../assets/images/clock.png'
import compassImage from '../../assets/images/compass.png'
import leafImage from '../../assets/images/leaf.png'
import './Home.css'

const competencies = [
  {
    title: '2 Decades Expertise',
    description: 'Deep industry knowledge and proven track record.',
    icon: clockImage,
    className: '',
  },
  {
    title: 'Design & Execution',
    description: 'End-to-end project management excellence',
    icon: compassImage,
    className: 'competency-card--design',
  },
  {
    title: 'Sustainable Innovation',
    description: 'Eco-friendly solutions for modern demands',
    icon: leafImage,
    className: 'competency-card--sustainable',
  },
  {
    title: 'Future Ready Designs',
    description: 'Deep industry knowledge and proven track record.',
    icon: clockImage,
    className: '',
  },
  {
    title: 'Revenue Strategy',
    description: 'Deep industry knowledge and proven track record.',
    icon: clockImage,
    className: '',
  },
]

const impactStats = [
  { value: '8+', label: 'Major Projects' },
  { value: '6000+', label: 'Parking Slots Optimized' },
  { value: '5+', label: 'RFP & PMC Projects' },
]

const successStoryLogos = [
  { image: designaImage, alt: 'Designa logo' },
  { image: nagarImage, alt: 'Nagar logo' },
  { image: kaImage, alt: 'KA logo' },
  { image: plusImage, alt: 'Plus logo' },
  { image: symImage, alt: 'SYM logo' },
  { image: elevenImage, alt: 'Success story logo 11' },
  { image: twentyTwoImage, alt: 'Success story logo 22' },
]

const successStoryMarquee = [...successStoryLogos, ...successStoryLogos]
const introCarouselImages = [
  { image: carouselOneImage, alt: 'Parking area aerial view 1' },
  { image: carouselTwoImage, alt: 'Parking area aerial view 2' },
  { image: carouselThreeImage, alt: 'Parking area aerial view 3' },
  { image: carouselFourImage, alt: 'Parking area aerial view 4' },
]

function Home() {
  const [introSlideIndex, setIntroSlideIndex] = useState(0)

  useEffect(() => {
    const timerId = window.setInterval(() => {
      setIntroSlideIndex((currentIndex) =>
        (currentIndex + 1) % introCarouselImages.length,
      )
    }, 3500)

    return () => window.clearInterval(timerId)
  }, [])

  return (
    <section className="home-page">
      <section
        className="home-banner"
        style={{ backgroundImage: `url(${homeBannerImage})` }}
      >
        <div className="home-banner__overlay">
          <div className="home-banner__content">
            <h1>We help businesses design</h1>
            <h2>Efficient, Safe And Revenue-Driven Parking Systems.</h2>
            <p>
              We Help Builders, Commercial Spaces, And Government Bodies
              Transform Unorganized Parking Into Structured, Efficient, And
              Scalable Solutions.
            </p>
            <a className="home-banner__cta" href="/services">
              View Service
            </a>
          </div>
        </div>
      </section>

      <section className="intro-section">
        <article className="intro-section__card">
          <h2>INTRODUCTION</h2>
          <span className="intro-section__accent" aria-hidden="true" />
          <h3>Rethinking Parking. Redefining Efficiency</h3>
          <p>
            At Visionary Vantage Corporation, we believe parking is more than
            just arranging vehicles. It's about designing intelligent movement
            systems.
          </p>
          <p>
            We help builders, commercial spaces, and government bodies
            transform unorganized parking into structured, efficient, and
            scalable solutions.
          </p>
          <a className="intro-section__cta" href="/about">
            Read More
          </a>
        </article>

        <div className="intro-section__image-wrap">
          <div
            className="intro-section__carousel-track"
            style={{ transform: `translateX(-${introSlideIndex * 100}%)` }}
          >
            {introCarouselImages.map((item) => (
              <div className="intro-section__carousel-slide" key={item.alt}>
                <img src={item.image} alt={item.alt} />
              </div>
            ))}
          </div>

          <div className="intro-section__carousel-dots" aria-label="Introduction image carousel">
            {introCarouselImages.map((item, index) => (
              <button
                type="button"
                key={item.alt}
                className={`intro-section__carousel-dot ${
                  introSlideIndex === index ? 'is-active' : ''
                }`}
                onClick={() => setIntroSlideIndex(index)}
                aria-label={`Show slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="competency-section">
        <div className="competency-section__intro">
          <h2>CORE COMPETENCE</h2>
          <p>
            Our expertise drives your success through comprehensive parking
            solutions.
          </p>
        </div>

        <div className="competency-section__grid">
          {competencies.map((item, index) => (
            <article
              className={`competency-card ${item.className}`.trim()}
              key={`${item.title}-${index}`}
            >
              <div className="competency-card__icon" aria-hidden="true">
                <img src={item.icon} alt="" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="impact-section">
        <div className="impact-section__intro">
          <h2>OUR IMPACT</h2>
        </div>

        <div className="impact-section__grid">
          {impactStats.map((item) => (
            <article className="impact-card" key={item.label}>
              <h3>{item.value}</h3>
              <p>{item.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="services-gallery">
        <article className="services-gallery__feature">
          <img src={hbOneImage} alt="Traffic planning and design workspace" />
          <div className="services-gallery__feature-overlay">
            <h2>TRAFFIC PLANNING &amp; DESIGN</h2>
            <ul>
              <li>Site Analysis &amp; Feasibility Study</li>
              <li>Efficient Layout &amp; Space Allocation</li>
              <li>User-Centric Design Approach</li>
              <li>Entry &amp; Exit Optimization</li>
              <li>Compliance With Local Regulations</li>
            </ul>
            <a href="/services">Explore Service</a>
          </div>
        </article>
      </section>

      <section className="traffic-flow-section">
        <article className="traffic-flow-section__feature">
          <img src={mapImage} alt="Traffic flow and circulation map" />
          <div className="traffic-flow-section__overlay">
            <h2>TRAFFIC FLOW &amp; CIRCULATION</h2>
            <ul>
              <li>Entry &amp; Exit Movement Planning</li>
              <li>Internal Circulation Design</li>
              <li>Congestion &amp; Bottleneck Reduction</li>
              <li>Pedestrian &amp; Vehicle Segregation</li>
              <li>Safety &amp; Signage Planning</li>
            </ul>
          </div>
        </article>
      </section>

      <section className="parking-lobby-section">
        <article className="parking-lobby-section__feature">
          <img src={parkingLobbyImage} alt="Parking lobby and arrival zone" />
          <div className="parking-lobby-section__overlay">
            <h2>PARKING LOBBY &amp; ARRIVAL EXPERIENCE</h2>
            <ul>
              <li>Arrival Zone Planning &amp; Drop-Off Management</li>
              <li>Lobby Access, Waiting &amp; Transition Spaces</li>
              <li>Driver Guidance &amp; User Wayfinding</li>
              <li>Pedestrian Safety, Visibility &amp; Comfort</li>
              <li>Integrated Signage &amp; First-Impression Design</li>
            </ul>
          </div>
        </article>
      </section>

      <section className="space-utilization-section">
        <article className="space-utilization-section__feature">
          <img src={carInBuildingImage} alt="Multi-level parking space optimization" />
          <div className="space-utilization-section__overlay">
            <h2>PARKING OPTIMIZATION &amp; SPACE UTILIZATION</h2>
            <ul>
              <li>Maximum Space Efficiency Planning</li>
              <li>Dead Space Conversion Strategies</li>
              <li>Slot Size Optimization</li>
              <li>Peak Load Management</li>
              <li>Layout Reconfiguration For Better Capacity</li>
            </ul>
          </div>
        </article>
      </section>

      <section className="compliance-advisory-section">
        <article className="compliance-advisory-section__feature">
          <img src={carInRoadImage} alt="Parking compliance monitoring and advisory" />
          <div className="compliance-advisory-section__overlay">
            <h2>GOVERNMENT &amp; COMPLIANCE ADVISORY</h2>
            <ul>
              <li>Local Authority Norms &amp; Guidelines</li>
              <li>Approval Documentation Support</li>
              <li>Fire &amp; Safety Compliance</li>
              <li>Accessibility Standards (NBC, Etc.)</li>
              <li>Liaison Support For Approvals</li>
            </ul>
          </div>
        </article>
      </section>

      <section className="multi-level-section">
        <article className="multi-level-section__feature">
          <img src={multiImage} alt="Multi-level and basement parking design" />
          <div className="multi-level-section__overlay">
            <h2>MULTI-LEVEL &amp; BASEMENT PARKING DESIGN</h2>
            <ul>
              <li>Ramp Design &amp; Gradient Planning</li>
              <li>Structural Coordination</li>
              <li>Ventilation &amp; Fire Safety Planning</li>
              <li>Wayfinding &amp; Signage Systems</li>
              <li>Lighting &amp; Security Planning</li>
            </ul>
          </div>
        </article>
      </section>

      <section className="success-story-section">
        <div className="success-story-section__intro">
          <div className="success-story-section__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" role="presentation">
              <path
                d="M14.5 3.5c2.8.4 5.8 2.2 6 2.4-.1.2-1.8 3.2-4.7 5.2l-1.8-1.8-2 2 1.6 1.6c-1.7.8-3.4 1.2-5 1.2-.1-1.6.3-3.3 1.2-5L11.4 11l2-2-1.8-1.8c2-2.9 5-4.6 5.2-4.7Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 15c-.8 0-1.9.3-2.8 1.2C4.7 17.7 4.5 20 4.5 20s2.3-.2 3.8-1.7C9.2 17.4 9.5 16.3 9.5 15.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h2>SUCCESS STORY</h2>
        </div>

        <div className="success-story-section__marquee">
          <div className="success-story-section__track">
            {successStoryMarquee.map((item, index) => (
              <article className="success-story-section__logo-card" key={`${item.alt}-${index}`}>
                <img src={item.image} alt={item.alt} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-section__content">
          <h2>
            Ready to Optimize Your Parking Asset?
            <br />
            
          </h2>
          <p>
            Join the forward-thinking property owners who have transformed their
            facilities into high-performing assets.
          </p>
          <a className="cta-section__button" href="/contact">
            Schedule Strategy Call
          </a>
        </div>
      </section>
    </section>
  )
}

export default Home
