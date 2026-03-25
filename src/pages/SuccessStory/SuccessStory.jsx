import serviceBanner from '../../assets/images/servicebanner.png'
import designaImage from '../../assets/images/designa.png'
import kaImage from '../../assets/images/ka.png'
import nagarImage from '../../assets/images/nagar.png'
import plusImage from '../../assets/images/plus.png'
import symImage from '../../assets/images/sym.png'
import './SuccessStory.css'

const impactStats = [
  { label: 'Projects Completed', value: '8+' },
  { label: 'Parking Slots', value: '6000+' },
  { label: 'RFP Design Projects', value: '5+' },
]

const trustedClients = [
  { image: designaImage, alt: 'Designa logo' },
  { image: symImage, alt: 'SYM logo' },
  { image: plusImage, alt: 'Plus Parking Solutions logo' },
  { image: nagarImage, alt: 'Nagar logo' },
  { image: kaImage, alt: 'KA logo' },
]

const marqueeClients = [...trustedClients, ...trustedClients]

function SuccessStory() {
  return (
    <section className="success-story-page">
      <section className="success-story-hero">
        <div className="success-story-hero__media">
          <img src={serviceBanner} alt="Success stories from smart parking projects" />
        </div>

        <div className="success-story-hero__overlay">
          <div className="success-story-hero__content">
            <h1>SUCCESS STORIES</h1>
            <p>Delivering Smart Parking Solutions Across India</p>
            <a className="success-story-hero__cta" href="/contact">
              View Our Projects
            </a>
          </div>
        </div>
      </section>

      <section className="success-story-showcase">
        <div className="success-story-showcase__inner">
          <div className="success-story-showcase__stats">
            {impactStats.map((item) => (
              <article className="success-story-stat-card" key={item.label}>
                <h3>{item.label}</h3>
                <p>{item.value}</p>
              </article>
            ))}
          </div>

          <div className="success-story-showcase__clients">
            <h2>OUR TRUSTED CLIENTS</h2>

            <div className="success-story-showcase__marquee">
              <div className="success-story-showcase__track">
                {marqueeClients.map((item, index) => (
                  <article className="success-story-showcase__logo-card" key={`${item.alt}-${index}`}>
                    <img src={item.image} alt={item.alt} />
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default SuccessStory
