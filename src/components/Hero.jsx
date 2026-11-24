
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import GradientWaves from '../component/GradientWaves'
import './Hero.css'

function Hero() {
  const contentRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      contentRef.current.children,
      { y: 35, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.18,
        ease: 'power3.out'
      }
    )
  }, [])

  return (
    <section className="hero" id="home">
      <div className="hero-image"></div>

      <GradientWaves
        className="hero-waves"
        waveColor="#C94B32"
        horizonColor="#54251F"
        crestColor="#F2A16B"
        backgroundColor="transparent"
        speed={0.35}
        amplitude={2.5}
        swell={35}
        lightAngle={120}
        opacity={0.8}
      />

      <div className="hero-overlay"></div>

      <div className="hero-content" ref={contentRef}>
        <span className="hero-tag">
          WELCOME TO MARY JESUS EDUCATION CENTRE
        </span>

        <h1>
          Shaping Young Minds.
          <br />
          <span>Building Bright Futures.</span>
        </h1>

        <p>
          A place where curiosity is encouraged, character is nurtured,
          and every child is inspired to achieve their best.
        </p>

        <div className="hero-buttons">
          <a href="#about" className="hero-primary">
            Discover Our School
          </a>
          <a href="#admissions" className="hero-secondary">
            Explore Admissions →
          </a>
        </div>
      </div>

      <div className="hero-bottom">
        <span>LEARN</span>
        <span className="hero-line"></span>
        <span>GROW</span>
        <span className="hero-line"></span>
        <span>EXCEL</span>
      </div>
    </section>
  )
}

export default Hero
