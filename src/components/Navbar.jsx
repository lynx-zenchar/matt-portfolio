// Navbar.
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'

const NAV_LINKS = [
  { to: '/',               label: 'Home' },
  { to: '/resume',         label: 'Resume' },
  { to: '/projects',       label: 'Projects' },
  { to: '/certifications', label: 'Certifications' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <NavLink to="/" className="navbar__brand">ME</NavLink>
      <ul className="navbar__links">
        {NAV_LINKS.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `nav-link${isActive ? ' nav-link--active' : ''}`
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}