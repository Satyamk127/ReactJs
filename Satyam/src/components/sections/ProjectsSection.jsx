import SectionHeading from '../ui/SectionHeading'

function ProjectsSection({ projects, repoCards, contributionGrid }) {
  return (
    <section id="projects" className="panel">
      <SectionHeading
        tag="Revolutionary Projects"
        title="Project cards with demo, code, and story"
        text="Har card me description, stack, GitHub link, live link, aur screenshot placeholder diya gaya hai."
      />

      <div className="project-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <div className="project-shot">
              <span>Live Demo + Screenshot Area</span>
              <p>{project.shot}</p>
            </div>
            <div className="project-body">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="stack-list">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github}>GitHub</a>
                <a href={project.live}>Live Demo</a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="grid two-col">
        <div className="glass-card">
          <h3>GitHub activity integration</h3>
          <div className="repo-list">
            {repoCards.map((repo) => (
              <div key={repo.name} className="repo-card">
                <div>
                  <strong>{repo.name}</strong>
                  <p>{repo.type}</p>
                </div>
                <div className="repo-meta">
                  <span>{repo.stars} stars</span>
                  <span>{repo.commits} commits</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card">
          <h3>Contribution graph</h3>
          <div className="contribution-grid">
            {contributionGrid.map((cell) => (
              <span key={cell.id} className={`contribution-cell level-${cell.level}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
