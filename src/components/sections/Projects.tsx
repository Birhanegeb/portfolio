import Section from '../Section'
import { projects, type Project } from '../../data/content'

const TIER_COLOR: Record<Project['tier'], string> = {
  bronze: 'var(--bronze)',
  silver: 'var(--silver)',
  gold: 'var(--gold)',
}

export default function Projects() {
  return (
    <Section id="projects" title="Projects" bg="var(--section-projects)">
      <div className="flex flex-col gap-14 max-w-3xl">
        {projects.map((project) => (
          <article
            key={project.name}
            className="pl-6 border-l-2"
            style={{ borderColor: TIER_COLOR[project.tier] }}
          >
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3">
              <h3 className="text-xl font-medium">{project.name}</h3>
              <span className="font-mono text-[11px]" style={{ color: TIER_COLOR[project.tier] }}>
                {project.tier}
              </span>
            </div>

            <ul className="flex flex-col gap-2 mb-4">
              {project.description.map((line) => (
                <li key={line} className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                  {line}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-x-3 gap-y-1 mb-4">
              {project.stack.map((tech) => (
                <span key={tech} className="font-mono text-[11px]" style={{ color: 'var(--text-faint)' }}>
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[13px] border-b"
              style={{ borderColor: 'var(--line)' }}
            >
              View repository
            </a>
          </article>
        ))}
      </div>
    </Section>
  )
}
