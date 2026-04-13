import SectionHeading from '../ui/SectionHeading'

function SkillsSection({ skills, backendHighlights }) {
  return (
    <section id="skills" className="panel">
      <SectionHeading
        tag="Interactive Skills"
        title="Orbit-driven expertise map"
        text="Content ko clean aur modern developer portfolio feel me structure kiya gaya hai, jise aap baad me aur detail se update kar sakte ho."
      />

      <div className="grid two-col">
        <div className="glass-card skill-radar">
          <div className="skill-card-head">
            <h3>Core strengths</h3>
            <span className="mini-tag">Frontend + Problem Solving + Backend</span>
          </div>
          <div className="sphere-shell">
            {skills.map((skill) => (
              <div key={skill.name} className="skill-row">
                <div className="skill-head">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <span style={{ width: `${skill.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card heat-card">
          <h3>Technology heat map</h3>
          <div className="heat-grid">
            {skills.map((skill) => (
              <article key={skill.name} className="heat-cell">
                <span>{skill.name}</span>
                <strong>{skill.level}</strong>
              </article>
            ))}
          </div>
          <p className="card-note">
            Java, DSA, React, Backend, DB aur future skills ko isi panel me easily expand kiya ja sakta hai.
          </p>
        </div>
      </div>

      <div className="glass-card backend-card">
        <div className="skill-card-head">
          <div>
            <h3>Backend Expertise</h3>
            <p className="card-note">Clean, modern summary for a developer portfolio.</p>
          </div>
          <span className="mini-tag">Java Web + Spring Stack</span>
        </div>

        <div className="backend-grid">
          {backendHighlights.map((item) => (
            <article key={item} className="backend-point">
              <span className="backend-bullet" />
              <p>{item}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
