// Footer.jsx
import '../styles/Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__links">
          <a href="mailto:matteleazar@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/matthew-eleazar-nd/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/lynx-zenchar" target="_blank" rel="noreferrer">GitHub</a>
        </div>
        <span className="footer__copy">© {new Date().getFullYear()} Matthew Eleazar</span>
      </div>
    </footer>
  )
}