import SectionHeading from '../ui/SectionHeading'

function AboutSection({ education, techIcons, skills }) {
  return (
    <section id="about" className="panel">
      <SectionHeading
        tag="Dynamic About"
        title="About, education, stack icons, and personal story"
        text="Short intro, education, tech stack icons, and editable profile summary ek polished layout me integrated hain."
      />

      <div className="grid two-col">
        <div className="glass-card">
          <h3>About Me</h3>
          <p>
            I&apos;m a developer focused on building modern web products with cinematic interfaces,
            thoughtful UX, and a strong foundation in Java, DSA, React, Node, and database-driven systems.
          </p>
          <div className="icon-strip">
            {techIcons.map((icon) => (
              <span key={icon}>{icon}</span>
            ))}
          </div>
        </div>

        <div className="glass-card">
          <h3>Education</h3>
          <p><strong>College:</strong> {education.college}</p>
          <p><strong>Branch:</strong> {education.branch}</p>
          <p>{education.note}</p>
        </div>
      </div>

      <div className="glass-card skill-tree">
        <h3>Interactive skill tree</h3>
        <div className="tree-lanes">
          {skills.map((skill) => (
            <div key={skill.name} className="tree-node">
              <span className="node-core" />
              <strong>{skill.name}</strong>
              <p>{skill.level}% mastery track</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection
