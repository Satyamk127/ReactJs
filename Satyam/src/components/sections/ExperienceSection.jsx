import SectionHeading from '../ui/SectionHeading'
import StatTile from '../ui/StatTile'

function ExperienceSection({ experience, achievements }) {
  return (
    <section id="experience" className="panel">
      <SectionHeading
        tag="Experience and Achievements"
        title="Growth timeline with proof-ready slots"
        text="Internship, freelance, college work, certificates, aur measurable achievements ke liye ready sections."
      />

      <div className="grid two-col">
        <div className="glass-card timeline-card">
          <h3>Experience</h3>
          {experience.map((item) => (
            <div key={item.role} className="timeline-item">
              <span className="timeline-dot" />
              <div>
                <p className="timeline-period">{item.period}</p>
                <strong>{item.role}</strong>
                <p>{item.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="glass-card">
          <h3>Achievements / Certificates</h3>
          <div className="certificate-frame">Certificate image / proof placeholder</div>
          <ul className="plain-list">
            {achievements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid three-col">
        <StatTile label="LeetCode / HackerRank" value="Add Stats" />
        <StatTile label="Freelance Work" value="Add Clients" />
        <StatTile label="Certifications" value="Add Count" />
      </div>
    </section>
  )
}

export default ExperienceSection
