
import { useState } from 'react'
import './App.css'

const facilities = [
  { number: '01', title: 'Science Laboratories', desc: 'Explore Physics, Chemistry and Biology through practical learning.', image: 'image8.jpg', tag: 'LEARN BY DOING' },
  { number: '02', title: 'The School Library', desc: 'A world of knowledge with 4,000+ books, magazines and digital resources.', image: 'image7.jpg', tag: 'READ & DISCOVER' },
  { number: '03', title: 'Computer Laboratory', desc: 'Building digital confidence through modern computing facilities.', image: 'image9.jpg', tag: 'DIGITAL LEARNING' },
  { number: '04', title: 'Sports & Athletics', desc: 'Developing teamwork, discipline and sporting excellence.', image: 'image10.jpg', tag: 'PLAY & EXCEL' },
  { number: '05', title: 'Indoor Activities', desc: 'Chess, carrom, table tennis and activities beyond academics.', image: 'image11.jpg', tag: 'GROW TOGETHER' },
  { number: '06', title: 'School Auditorium', desc: 'A space for performances, celebrations and memorable moments.', image: 'image13.jpg', tag: 'EXPRESS YOURSELF' }
]

const leaders = [
  { role: 'DIRECTOR', name: 'Mr. Noble Kumar', image: 'image4.jpg' },
  { role: 'PRINCIPAL', name: 'Mrs. Olga Prasad', image: 'image5.jpg' },
  { role: 'VICE PRINCIPAL', name: 'Mrs. Anita Kumar', image: 'image6.jpg' }
]

const achievements = [
  '100% pass rate in ICSE / ISC Board Examinations',
  'Students representing at national-level football tournaments',
  'State-level volleyball and kho-kho champions',
  'Kho-Kho girls team secured 2nd rank in CISCE Inter-School Competition'
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <div className="top-strip">
        <span>BARRA, KANPUR, UTTAR PRADESH</span>
        <span>EXCELLENCE IN EDUCATION SINCE 2004</span>
        <a href="tel:+917522089522">CALL: +91 75220 89522</a>
      </div>

      <header className="navbar">
        <a href="#home" className="brand" onClick={closeMenu}>
          <div className="brand-logo">MJ</div>
          <div>
            <strong>MARY JESUS</strong>
            <small>EDUCATION CENTRE</small>
          </div>
        </a>

        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </button>

        <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About Us</a>
          <a href="#leadership" onClick={closeMenu}>Leadership</a>
          <a href="#academics" onClick={closeMenu}>Academics</a>
          <a href="#facilities" onClick={closeMenu}>Facilities</a>
          <a href="#gallery" onClick={closeMenu}>Gallery</a>
          <a className="nav-cta" href="#admissions" onClick={closeMenu}>Admissions ↗</a>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section className="hero" id="home">
          <div className="hero-photo" />
          <div className="hero-shade" />

          <div className="hero-content">
            <div className="hero-label">
              <span /> WELCOME TO MARY JESUS EDUCATION CENTRE
            </div>

            <h1 className="hero-title">
              Education that<br />
              inspires <em>greatness.</em>
            </h1>

            <p className="hero-description">
              Nurturing young minds, building strong values and preparing
              students to create a brighter tomorrow.
            </p>

            <div className="hero-actions">
              <a href="#about" className="button button-red">DISCOVER OUR SCHOOL ↗</a>
              <a href="#facilities" className="button button-outline">EXPLORE OUR CAMPUS</a>
            </div>
          </div>

          <div className="hero-bottom">
            <span>LEARN WITH PURPOSE</span>
            <span className="hero-bottom-line" />
            <span>GROW WITH VALUES</span>
          </div>

          <div className="hero-index">01 / 04</div>
        </section>

        {/* INTRO */}
        <section className="intro section-wrap" id="about">
          <div className="intro-left reveal">
            <span className="eyebrow">A LEGACY OF LEARNING</span>
            <h2>More than a school.<br /><em>A place to become.</em></h2>
          </div>

          <div className="intro-right reveal">
            <p>
              Established in 2004, Mary Jesus Education Centre is an
              English-medium, co-educational institution affiliated with
              CISCE, New Delhi. We offer education from Playgroup to
              Class XII, with Science and Commerce streams.
            </p>
            <p>
              Our approach brings together academic learning, practical
              experiences, digital literacy, sports and values to help
              every learner discover their potential.
            </p>
            <a href="https://mjeckanpur.in/about.html" className="text-link">
              MORE ABOUT OUR SCHOOL ↗
            </a>
          </div>
        </section>

        {/* IMAGE FEATURE */}
        <section className="feature-section">
          <div className="feature-image" />

          <div className="feature-content reveal">
            <span className="eyebrow light">OUR PHILOSOPHY</span>
            <h2>Knowledge for the mind.<br /><em>Values for life.</em></h2>
            <p>
              We believe education should develop confident thinkers,
              compassionate individuals and responsible citizens.
            </p>
            <a href="#academics" className="button button-white">
              EXPLORE OUR APPROACH ↗
            </a>
          </div>

          <div className="feature-number">MJEC / 2004</div>
        </section>

        {/* LEADERSHIP */}
        <section className="leadership section-wrap" id="leadership">
          <div className="section-heading reveal">
            <span className="eyebrow">PEOPLE WHO INSPIRE</span>
            <h2>Guided by experience.<br /><em>Driven by purpose.</em></h2>
            <p>Meet the leadership team dedicated to guiding our school community.</p>
          </div>

          <div className="leader-grid">
            {leaders.map((leader) => (
              <article className="leader-card reveal" key={leader.role}>
                <div
                  className="leader-image image-placeholder"
                  style={{ backgroundImage: `url('/images/${leader.image}')` }}
                />
                <div className="leader-info">
                  <span>{leader.role}</span>
                  <h3>{leader.name}</h3>
                  <div className="leader-line" />
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ACADEMICS */}
        <section className="academics" id="academics">
          <div className="academics-image" />

          <div className="academics-content reveal">
            <span className="eyebrow light">ACADEMIC JOURNEY</span>
            <h2>Every stage.<br /><em>A new possibility.</em></h2>
            <p>
              From the first steps in Playgroup to the important choices
              of senior secondary education, we support learners at every
              stage of their journey.
            </p>

            <div className="class-list">
              <div>
                <span>01</span>
                <strong>Playgroup – Primary</strong>
                <small>Building strong foundations</small>
              </div>
              <div>
                <span>02</span>
                <strong>Middle School</strong>
                <small>Exploring ideas and possibilities</small>
              </div>
              <div>
                <span>03</span>
                <strong>Secondary – Senior Secondary</strong>
                <small>Preparing for the future</small>
              </div>
            </div>

            <a href="https://mjeckanpur.in/academics.html" className="button button-red">
              ACADEMIC INFORMATION ↗
            </a>
          </div>
        </section>

        {/* FACILITIES */}
        <section className="facilities section-wrap" id="facilities">
          <div className="section-heading reveal">
            <span className="eyebrow">SPACES THAT INSPIRE</span>
            <h2>Discover. Create.<br /><em>Perform. Excel.</em></h2>
            <p>
              Learning continues beyond the classroom. Explore the spaces
              that support the all-round development of our students.
            </p>
          </div>

          <div className="facility-grid">
            {facilities.map((item) => (
              <article className="facility-card reveal" key={item.number}>
                <div
                  className="facility-image image-placeholder"
                  style={{ backgroundImage: `url('/images/${item.image}')` }}
                >
                  <span className="facility-number">{item.number}</span>
                  <span className="facility-tag">{item.tag}</span>
                </div>

                <div className="facility-info">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <span className="facility-arrow">↗</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section className="achievement-section">
          <div className="achievement-inner section-wrap">
            <div className="achievement-heading reveal">
              <span className="eyebrow light">MOMENTS OF PRIDE</span>
              <h2>Hard work today.<br /><em>Achievements tomorrow.</em></h2>
              <p>
                Celebrating the dedication, discipline and accomplishments
                of our students.
              </p>

              <div className="result-stat">
                <strong>100<span>%</span></strong>
                <div>ICSE / ISC<br />BOARD RESULTS</div>
              </div>
            </div>

            <div className="achievement-list reveal">
              {achievements.map((item, index) => (
                <div className="achievement-item" key={item}>
                  <span>0{index + 1}</span>
                  <p>{item}</p>
                  <b>↗</b>
                </div>
              ))}

              <a href="https://mjeckanpur.in/" className="achievement-link">
                VIEW SCHOOL ACHIEVEMENTS ↗
              </a>
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section className="gallery section-wrap" id="gallery">
          <div className="gallery-heading reveal">
            <div>
              <span className="eyebrow">LIFE AT MJEC</span>
              <h2>Little moments.<br /><em>Lasting memories.</em></h2>
            </div>
            <p>
              A glimpse into the learning, celebrations and experiences
              that make school life special.
            </p>
          </div>

          <div className="gallery-grid">
            <div
              className="gallery-item gallery-large image-placeholder"
              style={{ backgroundImage: "url('/images/image11.jpg')" }}
            >
              <span>01 / SCHOOL LIFE</span>
            </div>

            <div
              className="gallery-item image-placeholder"
              style={{ backgroundImage: "url('/images/image12.jpg')" }}
            >
              <span>02 / ACHIEVEMENTS</span>
            </div>

            <div
              className="gallery-item image-placeholder"
              style={{ backgroundImage: "url('/images/image10.jpg')" }}
            >
              <span>03 / SPORTS</span>
            </div>

            <div
              className="gallery-item image-placeholder"
              style={{ backgroundImage: "url('/images/image8.jpg')" }}
            >
              <span>04 / LEARNING</span>
            </div>
          </div>
        </section>

        {/* ADMISSION CTA */}
        <section className="admission" id="admissions">
          <div className="admission-bg" />

          <div className="admission-content reveal">
            <span className="eyebrow light">YOUR CHILD'S JOURNEY BEGINS HERE</span>
            <h2>Every great journey<br />starts with <em>one step.</em></h2>
            <p>
              Discover the opportunities waiting at Mary Jesus Education Centre.
            </p>
            <a href="https://mjeckanpur.in/admission.html" className="button button-white">
              ENQUIRE ABOUT ADMISSIONS ↗
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-main section-wrap">
          <div className="footer-brand">
            <div className="brand footer-logo">
              <div className="brand-logo">MJ</div>
              <div>
                <strong>MARY JESUS</strong>
                <small>EDUCATION CENTRE</small>
              </div>
            </div>
            <p>Educating with excellence, values and vision since 2004.</p>
          </div>

          <div className="footer-column">
            <h4>EXPLORE</h4>
            <a href="#about">About Us</a>
            <a href="#leadership">Our Leadership</a>
            <a href="#academics">Academics</a>
            <a href="#facilities">Facilities</a>
            <a href="#gallery">Gallery</a>
          </div>

          <div className="footer-column">
            <h4>QUICK LINKS</h4>
            <a href="https://mjeckanpur.in/academics.html">Academic Information</a>
            <a href="https://mjeckanpur.in/admission.html">Admissions</a>
            <a href="https://mjeckanpur.in/">Official Website</a>
          </div>

          <div className="footer-column footer-contact">
            <h4>GET IN TOUCH</h4>
            <p>
              Mary Jesus Education Centre,<br />
              Barra, Kanpur, Uttar Pradesh
            </p>
            <a href="tel:+917522089522">+91 75220 89522</a>
            <a href="mailto:mryjss@rediffmail.com">mryjss@rediffmail.com</a>
            <small>Monday – Saturday · 9:00 AM – 2:00 PM</small>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 MARY JESUS EDUCATION CENTRE</span>
          <span>LEARN · GROW · EXCEL</span>
          <a href="#home">BACK TO TOP ↑</a>
        </div>
      </footer>
    </>
  )
}

export default App
