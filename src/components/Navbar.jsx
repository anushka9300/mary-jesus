
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import './Navbar.css'

function Navbar() {
  const navRef = useRef(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -70, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    )
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="navbar" ref={navRef}>
      <a href="#home" className="nav-brand" onClick={closeMenu}>
        <span className="brand-mark">MJ</span>
        <span>
          <strong>MARY JESUS</strong>
          <small>EDUCATION CENTRE</small>
        </span>
      </a>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#academics" onClick={closeMenu}>Academics</a>
        <a href="#facilities" onClick={closeMenu}>Facilities</a>
        <a href="#gallery" onClick={closeMenu}>Gallery</a>
        <a href="#admissions" className="nav-admission" onClick={closeMenu}>Admissions</a>
      </nav>
    </header>
  )
}

export default Navbar
