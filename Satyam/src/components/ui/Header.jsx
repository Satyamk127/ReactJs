function Header({ navItems, activeSection, onNavigate, resumeLink, resumeLabel }) {
  return (
    <header className="topbar">
      <div className="brand">
        <span className="brand-mark">S</span>
        <div>
          <p className="eyebrow">Cinematic Portfolio</p>
          <strong>Satyam Developer Space</strong>
        </div>
      </div>

      <nav className="nav">
        {navItems.map(([id, label]) => (
          <button
            key={id}
            type="button"
            className={activeSection === id ? 'nav-link active' : 'nav-link'}
            onClick={() => onNavigate(id)}
          >
            {label}
          </button>
        ))}
      </nav>

      <a className="resume-btn" href={resumeLink} download={resumeLabel}>
        Download Resume
      </a>
    </header>
  )
}

export default Header
