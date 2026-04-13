import InfoPill from '../ui/InfoPill'
import MetricCard from '../ui/MetricCard'

function HeroSection({ typed, orbitSkills, socialLinks, onProjectsClick, onContactClick }) {
  return (
    <section id="home" className="hero-section panel">
      <div className="hero-copy">
        <span className="tag">Award-feel personal portfolio experience</span>
        <h1>
          Hello, I&apos;m <span>Satyam</span>
        </h1>
        <p className="hero-sub">
          I build bold interfaces, developer-first products, and polished web experiences with
          a strong focus on React, Java, DSA, backend systems, and visual storytelling.
        </p>

        <div className="role-line">
          <span className="muted">Currently shaping as</span>
          <strong>
            {typed}
            <span className="caret">|</span>
          </strong>
        </div>

        <div className="hero-actions">
          <button type="button" className="primary-btn" onClick={onProjectsClick}>
            Explore Projects
          </button>
          <button type="button" className="ghost-btn" onClick={onContactClick}>
            Let&apos;s Connect
          </button>
        </div>

        <div className="social-strip">
          {socialLinks.map((item) => (
            <InfoPill key={item.label} label={item.label} value={item.value} />
          ))}
        </div>
      </div>

      <div className="hero-visual">
        <div className="geo-stage">
          <div className="geo-core">
            <div className="core-sheen core-sheen-a" />
            <div className="core-sheen core-sheen-b" />
            <div className="core-glow core-glow-a" />
            <div className="core-glow core-glow-b" />
          </div>
          <div className="geo-ring ring-one" />
          <div className="geo-ring ring-two" />
          <div className="geo-ring ring-three" />

          {orbitSkills.map((skill) => (
            <div key={skill.name} className={`skill-orbit ${skill.tone}`} style={skill.style}>
              {skill.name}
            </div>
          ))}
        </div>

        <div className="feature-marquee">
          {['JDBC', 'Servlets', 'JSP', 'Spring Boot', 'Hibernate', 'JPA', 'MVC', 'REST APIs'].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div className="hero-stats">
          <MetricCard title="Projects" value="12+" meta="Live demos + UI cases" />
          <MetricCard title="DSA Focus" value="300+" meta="Problems target ready" />
          <MetricCard title="Experience" value="Intern / Freelance" meta="Add your real timeline" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
